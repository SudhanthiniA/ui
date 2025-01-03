import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImplabelregistrationComponent } from './implabelregistration.component';
import { AddimplabelregistrationComponent } from './addimplabelregistration/addimplabelregistration.component';
import { ViewimplabelregistrationComponent } from './viewimplabelregistration/viewimplabelregistration.component';

const routes: Routes = [
  {
    path : 'list',
    component : ImplabelregistrationComponent
  },
  {
    path : 'add',
    component : AddimplabelregistrationComponent
  },
  {
    path : 'view',
    component : ViewimplabelregistrationComponent
  }
]
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class ImplabelregistrationRoutingModule { }
