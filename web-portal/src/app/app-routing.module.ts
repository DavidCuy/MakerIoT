import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MqttTestComponent } from './pages/mqtt-test/mqtt-test.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "mqtt-test", component: MqttTestComponent },
  { path: "",   redirectTo: "dashboard", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
