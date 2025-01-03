import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NonRegisterbrandEDPMRPComponent } from './non-registerbrand-edp-mrp.component';
import { AddnonRegisterbrandEDPMRPComponent } from './addnon-registerbrand-edp-mrp/addnon-registerbrand-edp-mrp.component';

const routes: Routes = [
  {
    path: 'list',
    component: NonRegisterbrandEDPMRPComponent
  },
  {
    path: 'add',
    component: AddnonRegisterbrandEDPMRPComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NonRegisterbrandEDPMRPRoutingModule { }
