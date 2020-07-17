import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import {Paho} from 'ng2-mqtt/mqttws31';
import { IotService } from '../../services/iot.service'
@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss'],
})
export class ControlComponent implements OnInit {
  public inicio: boolean = false;
  public paridad: boolean = false;
  public estado: Number = 0;
  public encendido: boolean = false;
  public confirmacion: boolean = false;
  public cierre: boolean = false;
  public nivel: number;
  public textBtn:string="Apagado";
  public colorBtn:string="primary";
  public imgBtn:string="assets/images/foco_apagado.jpg";
  public Istatus:any;
  public ICstatus:any;
  public resP:any;
  public resP2:any;
  private client;
  public userID:string;
  mqttbroker = 'broker.shiftr.io';

  constructor(
    private toast:IotService,
    private navparams: NavParams,
    private modal:ModalController) {}

  changeProp(newState:Number){
    if(newState == 1){
      this.textBtn = "Prendido";
      this.imgBtn = "assets/images/foco_prendido.jpg"
      this.colorBtn = 'rank'
    }
    else{
      this.textBtn = "Apagado";
      this.imgBtn = "assets/images/foco_apagado.jpg"
      this.colorBtn = 'primary'
    }
  }
  changeStatus() {
    if(this.estado==1){
      this.sendMessage("0");
    }
    else{
      this.sendMessage("1")
    }
  }
  ngOnInit() {
    this.userID = this.navparams.get("uid");
    this.client = new Paho.MQTT.Client(this.mqttbroker, Number(80), this.userID);
    this.onMessage();
    this.client.onConnectionLost = this.onConnectionLost.bind(this);
    this.client.connect({
      onSuccess: this.onConnect.bind(this),
      userName: 'mqtt_integration_app',
      password:'71224b33c9cee434',
      keepAliveInterval:60
    });
  }
  closeControl(){
    this.modal.dismiss();
  }
  sendMessage(message: string) {
    console.log("Mandar:",message)
    let packet = new Paho.MQTT.Message(message);
    packet.destinationName = "outState";
    packet.qos = 1;
    this.client.send(packet);
  }
  onConnect() {
    console.log('Conectado...');
    this.sendMessage("2")
    this.client.subscribe('inState');
  }
  onConnectionLost(responseObject) {
    this.client.onConnectionLost = (responseObject: Object) => {
    this.toast.warning('Foquito is now offline')
    };
  }
  onMessage() {
    this.client.onMessageArrived = (message: Paho.MQTT.Message) => {
      console.log('Recibe : ' + message.payloadString);
      message.destinationName.indexOf('inState')
      this.estado = Number(message.payloadString);
      this.changeProp(this.estado);
    };
  }
  
}
