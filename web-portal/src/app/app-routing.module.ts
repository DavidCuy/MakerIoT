import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MqttCredentialComponent } from './pages/mqtt-credential/mqtt-credential.component';
import { ConfigComponent } from './pages/config/config.component';

const routes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "mqtt-credential-manager", component: MqttCredentialComponent },
  { path: "settings", component: ConfigComponent },
  { path: 'mqtt-client', loadChildren: () => import('./mqtt-client/mqtt-client.module').then(m => m.MqttClientModule) },
  { path: "",   redirectTo: "dashboard", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
