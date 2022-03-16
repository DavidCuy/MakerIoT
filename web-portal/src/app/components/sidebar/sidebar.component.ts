import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  menu_items: any = []

  constructor() { }

  ngOnInit(): void {
    this.menu_items = [
      {
        title: 'Dashboard',
        icon: 'dashboard',
        url: '/dashboard'
      },
      {
        title: 'MQTT Test',
        icon: 'network_wifi',
        url: '/mqtt-test'
      }
    ]
  }

}
