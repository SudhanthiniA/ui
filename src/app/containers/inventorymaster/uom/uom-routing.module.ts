import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UomComponent } from './uom.component';
import { AdduomComponent } from './adduom/adduom.component';
import { ViewuomComponent } from './viewuom/viewuom.component';


const routes: Routes = [
  {
    path : 'list',
    component : UomComponent
  },
  {
    path : 'add',
    component : AdduomComponent
  },
  {
    path : 'edit/:Id',
    component : AdduomComponent
  },
  {
    path : 'view/:Id',
    component : ViewuomComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UomRoutingModule { }
