import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfigurationofsmsmailalertComponent } from './configurationofsmsmailalert.component';
import { AddconfigurationofsmsmailalertComponent } from './addconfigurationofsmsmailalert/addconfigurationofsmsmailalert.component';
import { ViewconfigurationofsmsmailalertComponent } from './viewconfigurationofsmsmailalert/viewconfigurationofsmsmailalert.component';

const routes: Routes = [
  {
    path: 'list',
    component: ConfigurationofsmsmailalertComponent
  },
  {
    path: 'add',
    component: AddconfigurationofsmsmailalertComponent
  },
  {
    path: 'view',
    component: ViewconfigurationofsmsmailalertComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigurationofsmsmailalertRoutingModule { }
