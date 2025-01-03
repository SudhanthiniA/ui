import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentunitComponent } from './parentunit.component';
import { ViewparentunitComponent } from './viewparentunit/viewparentunit.component';

const routes: Routes = [
  {
    path : 'list',
    component : ParentunitComponent
  },
  {
    path : 'view',
    component : ViewparentunitComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParentunitRoutingModule { }
