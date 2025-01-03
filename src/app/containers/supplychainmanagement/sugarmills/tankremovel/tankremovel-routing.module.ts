import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TankremovelComponent } from './tankremovel.component';
import { TankremovelviewComponent } from './tankremovelview/tankremovelview.component';


const routes: Routes = [
  {
    path : 'list',
    component : TankremovelComponent
  },
  {
    path : 'view',
    component : TankremovelviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TankremovelRoutingModule { }
