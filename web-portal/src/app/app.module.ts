import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ConfigbarComponent } from './components/configbar/configbar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MqttCredentialComponent } from './pages/mqtt-credential/mqtt-credential.component';
import { IMqttServiceOptions, MqttModule } from 'ngx-mqtt';
import { environment as env } from '../environments/environment';
import { ConfigComponent } from './pages/config/config.component';

const MQTT_SERVICE_OPTIONS: IMqttServiceOptions = {
  hostname: env.mqtt.server,
  port: env.mqtt.port,
  protocol: (env.mqtt.protocol === 'wss') ? 'wss' : 'ws',
  path: '',
};

const importModules = [
  BrowserModule,
  AppRoutingModule,
  CommonModule,
  FormsModule,
  MqttModule.forRoot(MQTT_SERVICE_OPTIONS)
]

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    ConfigbarComponent,
    DashboardComponent,
    MqttCredentialComponent,
    ConfigComponent
  ],
  imports: importModules,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
