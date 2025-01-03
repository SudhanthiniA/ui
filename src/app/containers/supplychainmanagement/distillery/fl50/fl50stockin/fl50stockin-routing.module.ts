import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Fl50stockinComponent } from './fl50stockin.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { PreviewComponent } from './preview/preview.component';


const routes: Routes = [
  {
    path : 'list',
    component : Fl50stockinComponent
  },
  {
    path : 'preview',
    component : PreviewComponent
  },
  {
    path: 'add',
    component : AddComponent
  },
  {
    path: 'view',
    component : ViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Fl50stockinRoutingModule { }
