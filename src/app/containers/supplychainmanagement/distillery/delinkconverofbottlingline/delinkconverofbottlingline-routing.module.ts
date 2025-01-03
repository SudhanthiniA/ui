import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DelinkconverofbottlinglineComponent } from './delinkconverofbottlingline.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { DelinklistComponent } from './delinklist/delinklist.component';

const routes: Routes = [ 
  {
    path : 'add',
    component : AddComponent
  },
  {
    path : 'view',
    component : ViewComponent
  },
  {
    path : 'list',
    component : DelinkconverofbottlinglineComponent
  },
  {
    path : 'delinklist',
    component : DelinklistComponent
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DelinkconverofbottlinglineRoutingModule { }
