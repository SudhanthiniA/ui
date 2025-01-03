import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Formfl25BComponent } from './formfl25-b.component';
import { Addpart25BComponent } from './addpart25-b/addpart25-b.component';
import { Viewpart25BComponent } from './viewpart25-b/viewpart25-b.component';

const routes: Routes = [
  {
    path: 'list',
    component: Formfl25BComponent
  },
  {
    path: 'add',
    component: Addpart25BComponent
  },
  {
    path: 'view/:id',
    component: Viewpart25BComponent
  },
  {
    path: 'edit/:id',
    component: Addpart25BComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Formfl25BRoutingModule { }
