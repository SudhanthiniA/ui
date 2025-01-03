import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PalletcasecodeunmappingComponent } from './palletcasecodeunmapping.component';

const routes: Routes = [
  {
  path : 'list',
  component : PalletcasecodeunmappingComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PalletcasecodeunmappingRoutingModule { }
