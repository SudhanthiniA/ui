import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { G6registerComponent } from './g6register.component';
import { Addg6registerComponent } from './addg6register/addg6register.component';
import { Viewg6registerComponent } from './viewg6register/viewg6register.component';

const routes: Routes = [
  {
    path : 'add',
    component : Addg6registerComponent
  },
  {
    path : 'view',
    component : Viewg6registerComponent
  },
  {
    path : 'list',
    component : G6registerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class G6registerRoutingModule { }
