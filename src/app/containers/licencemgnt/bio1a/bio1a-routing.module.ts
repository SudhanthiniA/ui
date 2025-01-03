import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bio1aComponent } from './bio1a.component';
import { Addbio1aComponent } from './addbio1a/addbio1a.component'
import { Viewbio1aComponent } from './viewbio1a/viewbio1a.component';

const routes: Routes = [
  {
    path : 'list',
    component : Bio1aComponent
  },
  {
    path : 'add',
    component : Addbio1aComponent
  },
 
  {
    path: 'view',
    component: Viewbio1aComponent
  },
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Bio1aRoutingModule { }
