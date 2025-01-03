import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NarcoticexportComponent } from './narcoticexport.component';
import { ViewnarcoticexportComponent } from './viewnarcoticexport/viewnarcoticexport.component';

const routes: Routes = [
  {
  path : 'add',
  component : NarcoticexportComponent 
  },
  {
    path : 'view',
    component : ViewnarcoticexportComponent   
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NarcoticexportRoutingModule { }
