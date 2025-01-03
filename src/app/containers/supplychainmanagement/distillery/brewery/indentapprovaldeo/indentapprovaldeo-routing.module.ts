import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndentapprovaldeoComponent } from './indentapprovaldeo.component';
import { ViewComponent } from './view/view.component';


const routes: Routes = [ 
  {
    path : 'list',
    component : IndentapprovaldeoComponent
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
export class IndentapprovaldeoRoutingModule { }
