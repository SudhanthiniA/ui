import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReturnassetComponent } from './returnasset.component';
import { AddreturnassetComponent } from './addreturnasset/addreturnasset.component';
import { ViewreturnassetComponent } from './viewreturnasset/viewreturnasset.component';
import { AcknowledgementComponent } from './acknowledgement/acknowledgement.component';

const routes: Routes = [
  { path: 'list', component: ReturnassetComponent },
  { path: 'add', component: AddreturnassetComponent },
  { path: 'view', component: ViewreturnassetComponent },
  { path: 'ack', component: AcknowledgementComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReturnassetRoutingModule { }
