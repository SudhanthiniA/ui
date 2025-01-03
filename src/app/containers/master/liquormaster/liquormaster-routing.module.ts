import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddeditliquorComponent } from './addeditliquor/addeditliquor.component';
import { ViewliquorComponent } from './viewliquor/viewliquor.component';
import { LiquormasterComponent } from './liquormaster.component';


const routes: Routes = [
  {
    path : 'list',
    component : LiquormasterComponent
  },
  {
    path : 'add',
    component : AddeditliquorComponent
  },
  {
    path : 'edit/:Id',
    component : AddeditliquorComponent
  },
  {
    path : 'view/:Id',
    component : ViewliquorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LiquormasterRoutingModule { }
