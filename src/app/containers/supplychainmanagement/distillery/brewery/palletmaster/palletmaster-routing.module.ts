import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { PalletmasterComponent } from './palletmaster.component';
const routes: Routes = [
  {
  path : 'list',
  component : PalletmasterComponent
},
{
  path : 'view',
  component : ViewComponent
},
{
  path : 'add',
  component : AddComponent
}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PalletmasterRoutingModule { }
