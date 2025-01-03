import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { Id3jun22Component } from './id3jun22.component';

const routes: Routes = [
  {
    path : 'list',
    component : Id3jun22Component
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
export class Id3jun22RoutingModule { }
