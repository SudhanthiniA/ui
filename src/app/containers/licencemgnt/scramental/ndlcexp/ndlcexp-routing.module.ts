import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NdlcexpComponent } from './ndlcexp.component';
import { ViewndlcexpComponent } from './viewndlcexp/viewndlcexp.component';

const routes: Routes = [
  {
    path : 'list',
    component : NdlcexpComponent
  },
  {
    path : 'view',
    component : ViewndlcexpComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class NdlcexpRoutingModule { }
