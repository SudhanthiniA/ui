import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RenewaltimelineComponent } from './renewaltimeline.component';
import { AddrenewaltimelineComponent } from './addrenewaltimeline/addrenewaltimeline.component';
import { ViewrenewaltimelineComponent } from './viewrenewaltimeline/viewrenewaltimeline.component';

const routes: Routes = [
  { path: 'list', component: RenewaltimelineComponent },
  { path: 'add', component: AddrenewaltimelineComponent },
  { path: 'view', component: ViewrenewaltimelineComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RenewaltimelineRoutingModule { }
