import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cancelindentafter72hrsComponent } from './cancelindentafter72hrs.component';
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {
    path: 'list',
    component: Cancelindentafter72hrsComponent
  },
  {
    path: 'add',
    component: AddComponent
  },
  {
    path: 'edit',
    component: EditComponent
  },
  
  {
    path: 'view',
    component: ViewComponent
  },
  
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Cancelindentafter72hrsRoutingModule { }
