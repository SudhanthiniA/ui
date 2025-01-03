import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';


const routes: Routes = [
  { path: 'list', component:ListComponent  },
  { path: 'view', component:ViewComponent  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Nonregisterbrandpd2RoutingModule { }
