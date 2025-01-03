import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrefermenterComponent } from './prefermenter.component';
import { AddprefermenterComponent } from './addprefermenter/addprefermenter.component';
import { ViewprefermenterComponent } from './viewprefermenter/viewprefermenter.component';

const routes: Routes = [
  {
    path : 'list',
    component : PrefermenterComponent
  },
  {
    path: 'view',
    component : ViewprefermenterComponent
  },
  {
    path : 'add',
    component : AddprefermenterComponent
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrefermenterRoutingModule { }
