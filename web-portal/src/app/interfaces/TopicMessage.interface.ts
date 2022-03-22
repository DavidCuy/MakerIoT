import { MqttMessage } from './MqttMessage.interface'

export interface TopicMessage {
  topic: string;
  messages: Array<MqttMessage>;
}
