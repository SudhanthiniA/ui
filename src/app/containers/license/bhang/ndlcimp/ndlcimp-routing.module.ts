import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NdlcimpComponent } from './ndlcimp.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path : 'list',
    component : NdlcimpComponent
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
export class NdlcimpRoutingModule { }
