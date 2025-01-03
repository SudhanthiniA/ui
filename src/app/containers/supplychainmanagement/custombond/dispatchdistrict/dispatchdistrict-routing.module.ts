import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DispatchdistrictComponent } from './dispatchdistrict.component';
import { ViewdispatchdistrictComponent } from './viewdispatchdistrict/viewdispatchdistrict.component';
import { AdddispatchdistrictComponent } from './adddispatchdistrict/adddispatchdistrict.component';

const routes: Routes = [
  {
    path : 'list',
    component : DispatchdistrictComponent
  },
  {
    path : 'add',
    component : AdddispatchdistrictComponent
  },
  {
    path : 'view',
    component : ViewdispatchdistrictComponent
  }
]
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class DispatchdistrictRoutingModule { }
