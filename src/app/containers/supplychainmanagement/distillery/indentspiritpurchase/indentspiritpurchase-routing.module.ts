import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddindentspiritpurchaseComponent } from './addindentspiritpurchase/addindentspiritpurchase.component';
import { ViewindentspiritpurchaseComponent } from './viewindentspiritpurchase/viewindentspiritpurchase.component';
import { IndentspiritpurchaseComponent } from './indentspiritpurchase.component';

const routes: Routes = [
  { path: 'add', component: AddindentspiritpurchaseComponent},
  {path: 'view', component: ViewindentspiritpurchaseComponent},
  {path: 'list', component: IndentspiritpurchaseComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndentspiritpurchaseRoutingModule { }
