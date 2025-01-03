import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImpliquorComponent } from './impliquor.component';
import { ViewimpliquorComponent } from './viewimpliquor/viewimpliquor.component';

const routes: Routes = [
  {
    path : 'list',
    component : ImpliquorComponent
  },
  {
    path : 'view',
    component : ViewimpliquorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ImpliquorRoutingModule { }
