import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfigurationComponent } from './configuration.component';
import { AddconfigurationComponent } from './addconfiguration/addconfiguration.component'
import { ViewconfigurationComponent } from './viewconfiguration/viewconfiguration.component';

const routes: Routes = [
  {
    path : 'list',
    component : ConfigurationComponent
  },
  {
    path : 'add',
    component : AddconfigurationComponent
  },
  {
    path: 'edit/:entityCode/:licenseTypeCode',
    component: AddconfigurationComponent
  },
  {
    path: 'view/:entityCode/:licenseTypeCode',
    component: ViewconfigurationComponent
  },
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigurationRoutingModule { }
