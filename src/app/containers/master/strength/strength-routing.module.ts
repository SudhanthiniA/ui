import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StrengthComponent } from './strength.component';
import { AddeditstrengthComponent } from './addeditstrength/addeditstrength.component';
import { ViewstrengthComponent } from './viewstrength/viewstrength.component';

const routes: Routes = [
  { path: 'list', component: StrengthComponent },
  { path: 'add', component: AddeditstrengthComponent },
  { path: 'edit/:id', component: AddeditstrengthComponent },
  { path: 'view', component: ViewstrengthComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StrengthRoutingModule { }
