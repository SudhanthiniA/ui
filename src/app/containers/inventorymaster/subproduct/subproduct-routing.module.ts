
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewsubproductComponent } from './viewsubproduct/viewsubproduct.component';
import { AddeditsubproductComponent } from './addeditsubproduct/addeditsubproduct.component';
import { SubproductComponent } from './subproduct.component';

const routes: Routes = [
  {
    path: 'list',
    component: SubproductComponent
  },
  {
    path: 'add',
    component: AddeditsubproductComponent
  },
  {
    path: 'edit/:Id',
    component: AddeditsubproductComponent
  },
  {
    path: 'view/:Id',
    component: ViewsubproductComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubproductRoutingModule { }
