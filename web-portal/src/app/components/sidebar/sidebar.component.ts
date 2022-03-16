import { Component, OnInit, Output, EventEmitter, OnChanges, SimpleChanges, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, DoCheck {
  @Output() pageName_emitter = new EventEmitter<string>();
  @Output() breadcrumbs_emitter = new EventEmitter<string[]>();

  menu_items: Array<any> = [
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

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    const menu_item = this.menu_items.find(mi => mi.url === this._router.url)
    if (menu_item === undefined) return
    this.breadcrumbs_emitter.emit(menu_item.title)
    this.pageName_emitter.emit(menu_item.title)
  }

}
