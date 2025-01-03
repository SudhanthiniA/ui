import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NdlcexpComponent } from './ndlcexp.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path : 'list',
    component : NdlcexpComponent
  },
  {
    path : 'view',
    component : ViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NdlcexpRoutingModule { }
