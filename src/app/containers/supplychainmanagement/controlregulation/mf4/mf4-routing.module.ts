import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mf4Component } from './mf4.component';
import { Addmf4Component } from './addmf4/addmf4.component';
import { Viewmf4Component } from './viewmf4/viewmf4.component';
import { ListdraftfinalComponent } from './listdraftfinal/listdraftfinal.component';


const routes: Routes = [
  { path: 'list', component: Mf4Component},
  {path: 'add', component: Addmf4Component},
  {path: 'view', component:Viewmf4Component},
  {path: 'draftfinal', component:ListdraftfinalComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Mf4RoutingModule { }
