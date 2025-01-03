import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Cl10aComponent } from './cl10a.component';
import { Viewcl10aComponent } from './viewcl10a/viewcl10a.component';

const routes: Routes = [
  {
    path : 'list',
    component : Cl10aComponent
  },
  {
    path : 'view',
    component : Viewcl10aComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Cl10aRoutingModule { }
