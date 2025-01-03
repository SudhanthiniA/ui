import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MasterwarehouseComponent } from './masterwarehouse.component';
// import { ViewlicenserenewalComponent } from './viewlicenserenewal/viewlicenserenewal.component';
import { ViewmasterwarehouseComponent } from './viewmasterwarehouse/viewmasterwarehouse.component';

const routes: Routes = [
  {
    path : 'list',
    component : MasterwarehouseComponent
  },
//   {
//   path : 'view',
//   component : ViewlicenserenewalComponent 
// },
{
  path : 'view',
  component : ViewmasterwarehouseComponent   
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterwarehouseRoutingModule { }
