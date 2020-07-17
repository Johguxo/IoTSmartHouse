import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss'],
})
export class SettingComponent implements OnInit {
  public color: string;
  constructor(
    private navparams: NavParams,
    private modal:ModalController,
  ){}

  ngOnInit() {
    if(this.navparams.get("color") == true){
      this.color = "Ligth";
    }
    else{
      this.color = "Dark";
    }
  }
  
  closeSetting(){
    this.modal.dismiss();
  }
}
