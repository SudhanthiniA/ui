import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersettingsComponent } from './usersettings.component';
import { AddusersettingsComponent } from './addusersettings/addusersettings.component';
import { ViewusersettingsComponent } from './viewusersettings/viewusersettings.component';


const routes: Routes = [
  {
    path: 'list',
    component: UsersettingsComponent
  },
  {
    path: 'add',
    component: AddusersettingsComponent
  },
  {
    path: 'view',
    component: ViewusersettingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersettingsRoutingModule { }
