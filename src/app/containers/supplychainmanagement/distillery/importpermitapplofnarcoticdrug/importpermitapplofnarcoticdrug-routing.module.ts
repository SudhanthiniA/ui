import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImportpermitapplofnarcoticdrugComponent } from './importpermitapplofnarcoticdrug.component';
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component'

const routes: Routes = [
  {
    path : 'list',
    component : ImportpermitapplofnarcoticdrugComponent
  },
  {
    path : 'add',
    component : AddComponent
  },
  {
    path: 'view',
    component : ViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImportpermitapplofnarcoticdrugRoutingModule { }
