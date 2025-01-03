import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MappingforoverseasupComponent } from './mappingforoverseasup.component';
import{AddmappingforoverseasupComponent} from  './addmappingforoverseasup/addmappingforoverseasup.component';
import {ViewmappingforoverseasupComponent} from './viewmappingforoverseasup/viewmappingforoverseasup.component';

const routes: Routes = [
  { 
    path: 'list',
   component: MappingforoverseasupComponent
   },
   {
    path:  'add',
    component: AddmappingforoverseasupComponent 
  },
  {
    path:  'view',
    component: ViewmappingforoverseasupComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MappingforoverseasupRoutingModule { }
