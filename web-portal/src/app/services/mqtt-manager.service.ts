import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MqttService, IMqttMessage, IOnConnectEvent, IOnErrorEvent } from 'ngx-mqtt';


@Injectable({
  providedIn: 'root'
})
export class MqttManagerService {
  constructor(private _mqttService: MqttService) {
    this._mqttService.onConnect.subscribe(async (connectStatus: IOnConnectEvent) => {
      console.log('CONNECT MQTT');
      console.log(connectStatus);
    });

    this._mqttService.onReconnect.subscribe(async (connectStatus: any) => {
      console.warn('RECONNECT MQTT');
      console.warn(connectStatus);
    });

    this._mqttService.onError.subscribe(async (error: IOnErrorEvent) => {
      console.error('ERROR MQTT');
      console.error(error);
    });

    this._mqttService.onEnd.subscribe((connectStatus: any) => {
      console.warn('END MQTT');
      console.warn(connectStatus);
    });

    this._mqttService.onOffline.subscribe(async (connectStatus: any) => {
      console.warn('OFFLINE MQTT');
      console.warn(connectStatus);
    });
  }

  public publish(topic: string, message: any): void {
    this._mqttService.unsafePublish(topic, JSON.stringify(message), {qos: 1, retain: true});
  }

  public subscribe(topic: string): Observable<IMqttMessage> {
    return this._mqttService.observe(topic)
  }

  private _onConnectMqtt(): void {

  }
}
