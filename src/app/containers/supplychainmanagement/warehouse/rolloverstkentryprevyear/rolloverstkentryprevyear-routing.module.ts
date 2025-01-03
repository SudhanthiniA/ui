import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RolloverstkentryprevyearComponent } from './rolloverstkentryprevyear.component';
import { AddrolloverstkentryprevyearComponent } from './addrolloverstkentryprevyear/addrolloverstkentryprevyear.component';

const routes: Routes = [ 
  {
    path : 'list',
    component : RolloverstkentryprevyearComponent
  },
  {
    path : 'add',
    component : AddrolloverstkentryprevyearComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class  RolloverstkentryprevyearRoutingModule{ }
