import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Id14bComponent } from './id14b.component';
import { Viewid14bComponent } from './viewid14b/viewid14b.component';

const routes: Routes = [
  {
    path : 'list',
    component : Id14bComponent
  },
  {
    path : 'view',
    component : Viewid14bComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Id14bRoutingModule { }
