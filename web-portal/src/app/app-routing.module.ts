import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MqttTestComponent } from './pages/mqtt-test/mqtt-test.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MqttCredentialComponent } from './pages/mqtt-credential/mqtt-credential.component';

const routes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "mqtt-test", component: MqttTestComponent },
  { path: "mqtt-credential-manager", component: MqttCredentialComponent },
  { path: "",   redirectTo: "dashboard", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
