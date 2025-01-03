import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InappticketComponent } from './inappticket.component';
import { AddinappticketComponent } from './addinappticket/addinappticket.component';
import { ViewinappticketComponent } from './viewinappticket/viewinappticket.component';

const routes: Routes = [
  { path: 'list', component: InappticketComponent },
  { path: 'view', component: ViewinappticketComponent },
  { path: 'add', component: AddinappticketComponent } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InappticketRoutingModule { }
