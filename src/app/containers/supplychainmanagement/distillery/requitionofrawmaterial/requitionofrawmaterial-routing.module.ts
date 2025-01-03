import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RequitionofrawmaterialComponent } from './requitionofrawmaterial.component';
import { AddeditrequitionofrawmaterialComponent } from './addeditrequitionofrawmaterial/addeditrequitionofrawmaterial.component';
import { ViewrequitionofrawmaterialComponent } from './viewrequitionofrawmaterial/viewrequitionofrawmaterial.component';


const routes: Routes = [
  {
    path : 'list',
    component : RequitionofrawmaterialComponent
  },
  {
    path : 'add',
    component : AddeditrequitionofrawmaterialComponent
  },
  {
    path : 'view/:Id',
    component : ViewrequitionofrawmaterialComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequitionofrawmaterialRoutingModule { }
