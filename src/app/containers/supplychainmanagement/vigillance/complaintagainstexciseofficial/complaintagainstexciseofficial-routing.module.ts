import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComplaintagainstexciseofficialComponent } from './complaintagainstexciseofficial.component';
import { AddcomplaintagainstexciseofficialComponent } from './addcomplaintagainstexciseofficial/addcomplaintagainstexciseofficial.component';
import { ViewcomplaintagainstexciseofficialComponent } from './viewcomplaintagainstexciseofficial/viewcomplaintagainstexciseofficial.component';

const routes: Routes = [
  { path: 'list', component: ComplaintagainstexciseofficialComponent },
  { path: 'add', component: AddcomplaintagainstexciseofficialComponent },
  { path: 'view', component: ViewcomplaintagainstexciseofficialComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComplaintagainstexciseofficialRoutingModule { }
