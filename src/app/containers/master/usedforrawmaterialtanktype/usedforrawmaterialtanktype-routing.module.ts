import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 

import { UsedforrawmaterialtanktypeComponent } from './usedforrawmaterialtanktype.component';
import { AddusedforrawmaterialtanktypeComponent } from './addusedforrawmaterialtanktype/addusedforrawmaterialtanktype.component';
import { ViewusedforrawmaterialtanktypeComponent } from './viewusedforrawmaterialtanktype/viewusedforrawmaterialtanktype.component';


const routes: Routes = [
  {
    path: 'list',
    component: UsedforrawmaterialtanktypeComponent
  },
  {
    path: 'add',
    component: AddusedforrawmaterialtanktypeComponent
  },
  {
    path : 'view',
    component: ViewusedforrawmaterialtanktypeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsedforrawmaterialtanktypeRoutingModule { }
