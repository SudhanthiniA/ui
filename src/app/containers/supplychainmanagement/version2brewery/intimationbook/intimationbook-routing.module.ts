import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntimationbookComponent } from './intimationbook.component';
import { AddintimationbookComponent } from './addintimationbook/addintimationbook.component';
import { ViewintimationbookComponent } from './viewintimationbook/viewintimationbook.component';

const routes: Routes = [
  {
    path : 'add',
    component : AddintimationbookComponent
  },
  {
    path : 'view',
    component : ViewintimationbookComponent
  },
  {
    path : 'list',
    component : IntimationbookComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntimationbookRoutingModule { }
