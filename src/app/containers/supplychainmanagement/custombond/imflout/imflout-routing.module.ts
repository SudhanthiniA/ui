import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImfloutComponent } from './imflout.component';

const routes: Routes = [
  {
    path : 'add',
    component : ImfloutComponent
  }
]
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class ImfloutRoutingModule { }
