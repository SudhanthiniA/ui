import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddDescriptionComponent } from './adddescription/adddescription.component';
import { ViewDescriptionComponent } from './viewdescription/viewdescription.component';
import { DescriptionComponent } from './description.component';

const routes: Routes = [
    {
      path: 'list',
      component: DescriptionComponent
    },
    {
      path: 'add',
      component: AddDescriptionComponent
    },
    {
      path : 'edit/:Id',
      component: AddDescriptionComponent
    },
    {
      path : 'view/:Id',
      component : ViewDescriptionComponent
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class DescriptionRoutingModule { }
  