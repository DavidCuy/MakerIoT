import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponentComponent } from './components/sidebar-component/sidebar-component.component';
import { NavbarComponentComponent } from './components/navbar-component/navbar-component.component';
import { FooterComponentComponent } from './components/footer-component/footer-component.component';
import { ConfigbarComponentComponent } from './components/configbar-component/configbar-component.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponentComponent,
    NavbarComponentComponent,
    FooterComponentComponent,
    ConfigbarComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
