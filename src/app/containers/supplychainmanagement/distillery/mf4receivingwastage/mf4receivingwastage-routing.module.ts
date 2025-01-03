import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mf4receivingwastageComponent } from './mf4receivingwastage.component';
import { ViewComponent } from './view/view.component';


const routes: Routes = [{ path: 'list', component: Mf4receivingwastageComponent },
{ path: 'view', component: ViewComponent }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Mf4receivingwastageRoutingModule { }
