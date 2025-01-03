import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddsupplytypeComponent } from './addsupplytype/addsupplytype.component';
import { SupplytypeComponent } from './supplytype.component';
import { ViewsupplytypeComponent } from './viewsupplytype/viewsupplytype.component';

const routes: Routes = [
  { path: 'list', component: SupplytypeComponent },
  { path: 'add', component: AddsupplytypeComponent },
  { path: 'view', component: ViewsupplytypeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SupplytypeRoutingModule { }




