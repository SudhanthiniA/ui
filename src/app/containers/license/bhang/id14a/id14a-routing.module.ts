import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Id14aComponent } from './id14a.component';
import { Viewid14aComponent } from './viewid14a/viewid14a.component';
const routes: Routes = [
  {
    path : 'list',
    component : Id14aComponent
  },
  {
    path : 'view',
    component : Viewid14aComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Id14aRoutingModule { }
