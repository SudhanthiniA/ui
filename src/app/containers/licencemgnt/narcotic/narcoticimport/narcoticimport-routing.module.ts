import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NarcoticimportComponent } from './narcoticimport.component';
import { ViewnarcoticimportComponent } from './viewnarcoticimport/viewnarcoticimport.component';

const routes: Routes = [
  {
  path : 'add',
  component : NarcoticimportComponent 
  },
  {
    path : 'view',
    component : ViewnarcoticimportComponent   
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NarcoticimportRoutingModule { }
