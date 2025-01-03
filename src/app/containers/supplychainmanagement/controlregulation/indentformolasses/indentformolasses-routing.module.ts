import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { IndentformolassesComponent } from './indentformolasses.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path: 'list', component: IndentformolassesComponent},
  { path: 'view', component: ViewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndentformolassesRoutingModule { }
