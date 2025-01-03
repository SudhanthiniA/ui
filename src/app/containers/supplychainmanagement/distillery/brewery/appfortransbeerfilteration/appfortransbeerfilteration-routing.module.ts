import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppfortransbeerfilterationComponent } from './appfortransbeerfilteration.component';
import { AddappfortransbeerfilterationComponent } from './addappfortransbeerfilteration/addappfortransbeerfilteration.component';
import { ViewappfortransbeerfilterationComponent } from './viewappfortransbeerfilteration/viewappfortransbeerfilteration.component';



const routes: Routes = [
  {
    path : 'list',
    component : AppfortransbeerfilterationComponent
  },
  {
    path : 'add',
    component : AddappfortransbeerfilterationComponent
  },
  {
    path : 'view',
    component : ViewappfortransbeerfilterationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppfortransbeerfilterationRoutingModule { }
