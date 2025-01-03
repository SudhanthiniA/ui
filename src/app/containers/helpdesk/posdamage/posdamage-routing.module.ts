import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PosdamageComponent } from './posdamage.component';
import { AddposdamageComponent } from './addposdamage/addposdamage.component';
import { ViewposdamageComponent } from './viewposdamage/viewposdamage.component';
import { CreateticketComponent } from './createticket/createticket.component';

const routes: Routes = [
  { path: 'list', component: PosdamageComponent },
  { path: 'add', component: AddposdamageComponent },
  { path: 'view', component: ViewposdamageComponent },
  { path: 'create', component: CreateticketComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PosdamageRoutingModule { }
