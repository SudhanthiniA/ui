import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExticketComponent } from './exticket.component';
import { AddexticketComponent } from './addexticket/addexticket.component';
import { ViewexticketComponent } from './viewexticket/viewexticket.component';

const routes: Routes = [
  { path: 'list', component: ExticketComponent },
  { path: 'view', component: ViewexticketComponent },
  { path: 'add', component: AddexticketComponent } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExticketRoutingModule { }
