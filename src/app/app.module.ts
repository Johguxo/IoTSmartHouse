import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Observable } from 'rxjs'

import { AngularFireModule } from '@angular/fire';
import { firebaseConfig } from '../environments/environment';
import { ChartsModule } from 'ng2-charts';
//import { NgxMqttLiteService } from 'ngx-mqtt-lite'

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
    IonicModule.forRoot(), 
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    ChartsModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    //NgxMqttLiteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
