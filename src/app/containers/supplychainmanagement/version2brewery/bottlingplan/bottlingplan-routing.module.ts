import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BottlingplanComponent } from './bottlingplan.component';
import { AddbottlingplanComponent } from './addbottlingplan/addbottlingplan.component';
import { ViewbottlingplanComponent } from './viewbottlingplan/viewbottlingplan.component';

const routes: Routes = [ 
  {
    path : 'add',
    component : AddbottlingplanComponent
  },
  {
    path : 'view',
    component : ViewbottlingplanComponent
  },
  {
    path : 'list',
    component : BottlingplanComponent
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BottlingplanRoutingModule { }
