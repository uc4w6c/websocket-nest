import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebsocketComponent } from './websocket/websocket.component';

const routes: Routes = [
  { path: 'websocket', component: WebsocketComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
