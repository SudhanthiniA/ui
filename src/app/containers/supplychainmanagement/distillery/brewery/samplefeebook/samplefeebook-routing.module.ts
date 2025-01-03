
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SamplefeebookComponent } from './samplefeebook.component';
import { AddsamplefeebookComponent } from './addsamplefeebook/addsamplefeebook.component';
import { ViewsamplefeebookComponent } from './viewsamplefeebook/viewsamplefeebook.component';

const routes: Routes = [
  {
    path : 'add',
    component : AddsamplefeebookComponent
  },
  {
    path : 'view',
    component : ViewsamplefeebookComponent
  },
  {
    path : 'list',
    component : SamplefeebookComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SamplefeebookRoutingModule { }
