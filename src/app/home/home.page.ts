import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ModalController } from '@ionic/angular';
import { Router } from "@angular/router";
import { AngularFireAuth } from '@angular/fire/auth';
import { IotService } from '../services/iot.service';
import { map } from 'rxjs/operators';
import { ControlComponent } from '../componentsIoT/control/control.component';
import { MonitorComponent } from '../componentsIoT/monitor/monitor.component';
import { SettingComponent } from '../componentsIoT/setting/setting.component';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public uid:string;
  public data:any = {};
  public name:string="";
  public setting:boolean;
  public monitor:number;
  constructor(
    public auth:AuthService,
    public iotService: IotService,
    private router:Router,
    private modal:ModalController,
    private AFauth : AngularFireAuth
    ) {}
    OnLogOut(){
      this.auth.logout();
    }
    ngOnInit(){
      this.AFauth.authState.subscribe(data => {
        this.uid =  data.uid;
        this.iotService.consultId(this.uid).subscribe(resultado => {
          this.data = resultado.payload.data()
          this.setting = this.data.setting;
          this.name = this.data.name;
          this.monitor = this.data.monitor;
        });
      });
      
    };
    openControl(){
      this.modal.create({
        component: ControlComponent,
        componentProps:{
          uid: this.uid
        }
      }).then((modal)=>modal.present())
    };
    openMonitor(){
      this.modal.create({
        component: MonitorComponent,
        componentProps:{
          temp: this.monitor,
          uid: this.uid
        }
      }).then((modal)=>modal.present())
    };
    openSetting(){
      this.modal.create({
        component: SettingComponent,
        componentProps:{
          color: this.setting
        }
      }).then((modal)=>modal.present())
    };
}
