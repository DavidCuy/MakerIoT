import { Component, OnInit } from '@angular/core';
import { IMqttMessage } from 'ngx-mqtt';
import { Subject, Observable, Subscription } from 'rxjs';
import { MqttManagerService } from '../../services/mqtt-manager.service';
import { TopicMessage } from '../../interfaces/TopicMessage.interface'
import { MqttMessage } from '../../interfaces/MqttMessage.interface';

@Component({
  selector: 'app-mqtt-test',
  templateUrl: './mqtt-test.component.html',
  styleUrls: ['./mqtt-test.component.css']
})
export class MqttTestComponent implements OnInit {
  select_tabname = 'subscribe'
  sub_topic_model = '';
  selected_topic: string = '';

  subscribed_topics: Array<string> = [];
  topic_messages: Array<TopicMessage> = [];
  displayed_messages: Array<MqttMessage> = [];
  private subscriptions: Array<Subscription> = [];

  constructor(private mqttManager: MqttManagerService) { }

  ngOnInit(): void {
  }

  tabname_selected(tabname: string): void {
    this.select_tabname = tabname
  }

  add_topic_subscribe(): void {
    console.log(`Topic to subscribe ${this.sub_topic_model}`)
    if (this.subscribed_topics.includes(this.sub_topic_model)) return

    this.subscribed_topics.unshift(this.sub_topic_model);
    this.subscriptions.push(
      this.mqttManager.subscribe(this.sub_topic_model).subscribe((message: IMqttMessage) => {
        if (this.subscribed_topics.includes(message.topic)) {
          const payload = JSON.parse(message.payload.toString());

          let selected_tm = this.topic_messages.find((tm) => tm.topic == message.topic);
          console.log(selected_tm)
          if(selected_tm === null || selected_tm === undefined) return
          const mqtt_message: MqttMessage = {
            datetime: new Date(),
            payload: payload,
            topic: message.topic
          }
          selected_tm?.messages.push(mqtt_message)
          console.log(this.topic_messages)
        }
      })
    );

    this.selected_topic = this.sub_topic_model

    const selected_tm = {
      topic: this.selected_topic,
      messages: []
    }
    this.topic_messages.push(selected_tm)

    const search_tm = this.topic_messages.find((tm) => tm.topic == this.selected_topic);
    if(search_tm !== null && search_tm !== undefined) {
      this.displayed_messages = search_tm.messages
    }

    this.sub_topic_model = '';
  }

  select_topic(topic: string) {
    console.log(topic)
    this.selected_topic = topic;

    const selected_tm = this.topic_messages.find((tm) => tm.topic == topic);
    if(selected_tm === null || selected_tm === undefined) return
    this.displayed_messages = selected_tm.messages
  }

}
