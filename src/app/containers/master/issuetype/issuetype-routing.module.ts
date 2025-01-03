import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IssuetypeComponent } from './issuetype.component';
import { AddissuetypeComponent } from './addissuetype/addissuetype.component';
import { ViewissuetypeComponent } from './viewissuetype/viewissuetype.component';


const routes: Routes = [
  {
    path: 'list',
    component: IssuetypeComponent
  },
  {
    path: 'add',
    component: AddissuetypeComponent
  },
  {
    path : 'view',
    component: ViewissuetypeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IssuetypeRoutingModule { }
