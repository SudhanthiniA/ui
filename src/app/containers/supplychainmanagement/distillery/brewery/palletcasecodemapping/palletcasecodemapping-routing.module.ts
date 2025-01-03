import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PalletcasecodemappingComponent } from './palletcasecodemapping.component';

const routes: Routes = [
  {
  path : 'list',
  component : PalletcasecodemappingComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PalletcasecodemappingRoutingModule { }
