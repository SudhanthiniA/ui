import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuotaComponent } from './quota.component';
import { AddComponent } from './add/add.component';



const routes: Routes = [
  {
    path: 'list',
    component: QuotaComponent
  },
  {
    path: 'add',
    component: AddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuotaRoutingModule { }
