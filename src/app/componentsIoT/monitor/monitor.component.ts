import { Component, OnInit } from '@angular/core';
import { NavParams, ToastController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import {Paho} from 'ng2-mqtt/mqttws31';
import { IotService } from '../../services/iot.service'
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.scss'],
})
export class MonitorComponent implements OnInit {
  public lineChartData: ChartDataSets[] = [
    { data: [], label: 'Temperatura' },
  ];
  public lineChartLabels: Label[] = [];
  public lineChartOptions: ChartOptions = {
      responsive: true,
      scales: {
          xAxes: [{
              display: false
          }]
      }
  };
  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';
  public temp: number;
  public varTemp: number;
  private client;
  public userID : string;
  mqttbroker = 'broker.shiftr.io';
  constructor(
    private toast:IotService,
    private navparams: NavParams,
    private modal:ModalController,
  ){}

  ngOnInit() {
    this.temp = this.navparams.get("temp");
    this.userID = this.navparams.get("uid");
    this.client = new Paho.MQTT.Client(this.mqttbroker, Number(80), this.userID);
    //this.client.onMessageArrived = this.onMessageArrived.bind(this);
    this.onMessage();
    this.client.onConnectionLost = this.onConnectionLost.bind(this);
    this.client.connect({
      onSuccess: this.onConnect.bind(this),
      userName: 'mqtt_integration_app',
      password:'71224b33c9cee434',
      keepAliveInterval:60
    });
    this.generateChart();
  }
  onConnect() {
    console.log('Conectado...');
    this.client.subscribe('inMonitor');
  }
  onConnectionLost(responseObject) {
    this.client.onConnectionLost = (responseObject: Object) => {
    // console.log('Connection lost : ' + JSON.stringify(responseObject));
    this.toast.warning('Monitor is now offline')
    };
  }
  onMessage() {
    this.client.onMessageArrived = (message: Paho.MQTT.Message) => {
      console.log('Temperatura : ' + message.payloadString);
      message.destinationName.indexOf('inMonitor')
      this.varTemp = Number(message.payloadString);
    };
  }

  closeMonitor(){
    this.modal.dismiss();
  }
  generateChart(){
  }
}
