import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImportofgrainmaltspiritisComponent } from './importofgrainmaltspiritis.component';
import { AddimportofgrainmaltspiritisComponent } from './addimportofgrainmaltspiritis/addimportofgrainmaltspiritis.component';
import { ViewimportofgrainmaltspiritisComponent } from './viewimportofgrainmaltspiritis/viewimportofgrainmaltspiritis.component';
import { EditimportofgrainmaltspiritisComponent } from './editimportofgrainmaltspiritis/editimportofgrainmaltspiritis.component';

const routes: Routes = [
  {
    path: 'list',
    component: ImportofgrainmaltspiritisComponent
  },
  {
    path: 'add',
    component: AddimportofgrainmaltspiritisComponent
  },
  {
    path: 'edit',
    component: EditimportofgrainmaltspiritisComponent
  },
  
  {
    path: 'view',
    component: ViewimportofgrainmaltspiritisComponent
  },
  
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImportofgrainmaltspiritisRoutingModule { }
