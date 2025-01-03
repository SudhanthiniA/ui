import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InappticketComponent } from './inappticket.component';

const routes: Routes = [
  { path: 'list', component: InappticketComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InappticketRoutingModule { }
