import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinancecontrollerComponent } from './financecontroller.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path: 'list', component: FinancecontrollerComponent },
  { path: 'add', component: AddComponent },
   { path: 'view', component: ViewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvancedutyregRoutingModule { }
