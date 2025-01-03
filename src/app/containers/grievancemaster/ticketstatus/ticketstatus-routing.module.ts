import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TicketstatusComponent } from './ticketstatus.component';
import { AddticketstatusComponent } from './addticketstatus/addticketstatus.component';
import { ViewticketstatusComponent } from './viewticketstatus/viewticketstatus.component';

const routes: Routes = [
  { path: 'list', component: TicketstatusComponent },
  { path: 'add', component: AddticketstatusComponent },
  { path: 'view', component: ViewticketstatusComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketstatusRoutingModule { }
