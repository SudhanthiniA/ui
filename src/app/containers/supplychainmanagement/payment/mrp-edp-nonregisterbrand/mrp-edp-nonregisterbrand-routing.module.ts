import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MRPEDPNonregisterbrandComponent } from './mrp-edp-nonregisterbrand.component';
import { AddMRPEDPNonregisterbrandComponent } from './add-mrp-edp-nonregisterbrand/add-mrp-edp-nonregisterbrand.component';


const routes: Routes = [
  {
    path: 'list',
    component: MRPEDPNonregisterbrandComponent
  },
  {
    path: 'add',
    component: AddMRPEDPNonregisterbrandComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MRPEDPNonregisterbrandRoutingModule { }
