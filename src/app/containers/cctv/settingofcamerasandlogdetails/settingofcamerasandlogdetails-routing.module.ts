import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingofcamerasandlogdetailsComponent } from './settingofcamerasandlogdetails.component';
import { AddsettingofcamerasandlogdetailsComponent } from './addsettingofcamerasandlogdetails/addsettingofcamerasandlogdetails.component';
import { ViewsettingofcamerasandlogdetailsComponent } from './viewsettingofcamerasandlogdetails/viewsettingofcamerasandlogdetails.component';

const routes: Routes = [
  {
    path: 'list',
    component: SettingofcamerasandlogdetailsComponent
  },
  {
    path: 'add',
    component: AddsettingofcamerasandlogdetailsComponent
  },
  {
    path: 'view',
    component: ViewsettingofcamerasandlogdetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingofcamerasandlogdetailsRoutingModule { }
