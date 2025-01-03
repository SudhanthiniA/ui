import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IssueofrawComponent } from './issueofraw.component';
import { AddissueofrawComponent } from './addissueofraw/addissueofraw.component';
import { ViewissueofrawComponent } from './viewissueofraw/viewissueofraw.component';

const routes: Routes = [ 
  {
    path : 'add',
    component : AddissueofrawComponent
  },
  {
    path : 'view',
    component : ViewissueofrawComponent
  },
  {
    path : 'list',
    component : IssueofrawComponent
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class IssueofrawRoutingModule { }
