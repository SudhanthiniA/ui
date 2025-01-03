import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransportmodeComponent } from './transportmode.component';
import { AddtransportmodeComponent } from './addtransportmode/addtransportmode.component';
import { ViewtransportmodeComponent } from './viewtransportmode/viewtransportmode.component';

const routes: Routes = [
  { path: 'list', component: TransportmodeComponent },
  { path: 'add', component: AddtransportmodeComponent },
  { path: 'view', component: ViewtransportmodeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransportmodeRoutingModule { }


 