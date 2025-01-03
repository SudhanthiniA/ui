import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NdlcimpComponent } from './ndlcimp.component';
import { ViewndlcimpComponent } from './viewndlcimp/viewndlcimp.component';

const routes: Routes = [
  {
    path : 'list',
    component : NdlcimpComponent
  },
  {
    path : 'view',
    component : ViewndlcimpComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class NdlcimpRoutingModule { }
