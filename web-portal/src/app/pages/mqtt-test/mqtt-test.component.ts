import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mqtt-test',
  templateUrl: './mqtt-test.component.html',
  styleUrls: ['./mqtt-test.component.css']
})
export class MqttTestComponent implements OnInit {
  select_tabname = 'subscribe'

  constructor() { }

  ngOnInit(): void {
  }

  tabname_selected(tabname: string): void {
    this.select_tabname = tabname
  }

}
