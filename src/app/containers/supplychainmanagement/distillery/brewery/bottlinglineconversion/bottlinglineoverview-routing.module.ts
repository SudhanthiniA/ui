import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BottlinglineoverviewComponent } from './bottlinglineoverview.component';
import { ViewComponent } from './view/view.component';
import { AddbottlingplanComponent } from './add/addbottlingplan.component';

const routes: Routes = [ 
  {
    path : 'list',
    component : BottlinglineoverviewComponent
  },
  {
    path : 'add',
    component : AddbottlingplanComponent
  },
  {
    path : 'view',
    component : ViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BottlinglineoverviewRoutingModule { }
