import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NonmaintainanceofindentregisterComponent } from './nonmaintainanceofindentregister.component';
import { AddnonmaintainanceofindentregisterComponent } from './addnonmaintainanceofindentregister/addnonmaintainanceofindentregister.component';
import { ViewnonmaintainanceofindentregisterComponent } from './viewnonmaintainanceofindentregister/viewnonmaintainanceofindentregister.component';
import { EditnonmaintainanceofindentregisterComponent } from './editnonmaintainanceofindentregister/editnonmaintainanceofindentregister.component';

const routes: Routes = [
  {
    path: 'list',
    component: NonmaintainanceofindentregisterComponent
  },
  {
    path: 'add',
    component: AddnonmaintainanceofindentregisterComponent
  },
  {
    path: 'edit',
    component: EditnonmaintainanceofindentregisterComponent
  },
  
  {
    path: 'view',
    component: ViewnonmaintainanceofindentregisterComponent
  },
  
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NonmaintainanceofindentregisterRoutingModule { }
