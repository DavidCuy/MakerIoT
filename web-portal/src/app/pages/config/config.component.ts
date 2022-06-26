import { Component, OnInit } from '@angular/core';
import { environment as env } from '../../../environments/environment';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  hostIP = ''

  constructor() { }

  ngOnInit(): void {
    let cur_hostIP = localStorage.getItem('hostIP')
    if (cur_hostIP != null) {
      this.hostIP = cur_hostIP
    }
  }

  save_settings(): void {
    localStorage.setItem('hostIP', this.hostIP)
    env.mqtt.server = this.hostIP
  }

}
