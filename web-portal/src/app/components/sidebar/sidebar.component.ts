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

  router_active = '';

  menu_items: Array<any> = [
    {
      title: 'Dashboard',
      name: 'dashboard',
      icon: 'dashboard',
      url: '/dashboard'
    },
    {
      title: 'MQTT',
      name: 'mqtt',
      icon: 'network_wifi',
      submenu: [{
        title: 'Test',
        name: 'mqtt-test',
        url: '/mqtt-test'
      }, {
        title: 'Gestor de credenciales',
        name: 'credential-manager',
        url: '/mqtt-credential-manager'
      }]
    }
  ]

  constructor(public router: Router) { }

  ngOnInit(): void {

  }

  ngDoCheck(): void {
    let menu_item = this.menu_items.find(mi => mi.url === this.router.url)
    let parent_item: any = null;
    if (menu_item === undefined) {
      this.menu_items.forEach((mi) => {
        if (mi.submenu) {
          menu_item = mi.submenu.find((smi: { url: string; }) => smi.url === this.router.url)
          if (menu_item !== undefined) {
            parent_item = mi
            return
          }
        }
      })
    }
    if (menu_item === undefined) return
    this.router_active = parent_item === null ? null : parent_item.name;
    this.breadcrumbs_emitter.emit(menu_item.title)
    this.pageName_emitter.emit(menu_item.title)
  }

}
