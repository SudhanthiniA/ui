import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TankconversionComponent } from './tankconversion.component';
import { AddedittankconversionComponent } from './addedittankconversion/addedittankconversion.component';
import { ViewtankconversionComponent } from './viewtankconversion/viewtankconversion.component';

 
const routes: Routes = [
  {
    path : 'list',
    component : TankconversionComponent
  },
  {
    path : 'add',
    component : AddedittankconversionComponent
  },
  {
    path: 'edit/:Id',
    component: AddedittankconversionComponent
  },
  {
    path: 'view/:Id',
    component: ViewtankconversionComponent
  },
  {
    path: 'preview',
    component: ViewtankconversionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TankconversionRoutingModule { }
