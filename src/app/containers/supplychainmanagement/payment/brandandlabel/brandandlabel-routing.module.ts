import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrandandlabelComponent } from './brandandlabel.component';
import { ViewbrandandlabelComponent } from './viewbrandandlabel/viewbrandandlabel.component';
import { AddbrandandlabelComponent } from './addbrandandlabel/addbrandandlabel.component';
import { EditbrandandlabelComponent } from './editbrandandlabel/editbrandandlabel.component';

const routes: Routes = [
  {
    path: 'list',
    component: BrandandlabelComponent
  },
  {
    path: 'add',
    component: AddbrandandlabelComponent
  },
  {
    path: 'edit',
    component: EditbrandandlabelComponent
  },
  
  {
    path: 'view',
    component: ViewbrandandlabelComponent
  },
  
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrandandlabelRoutingModule { }
