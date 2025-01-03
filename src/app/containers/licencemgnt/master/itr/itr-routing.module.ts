import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItrComponent } from './itr.component';
import { ViewitrComponent } from './viewitr/viewitr.component';

const routes: Routes = [
  {
    path : 'list',
    component : ItrComponent
  },
  {
    path : 'view',
    component : ViewitrComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItrRoutingModule { }
