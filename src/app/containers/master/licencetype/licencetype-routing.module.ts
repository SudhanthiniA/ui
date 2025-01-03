import { LicencetypeComponent } from './licencetype.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddeditlicencetypeComponent } from './addeditlicencetype/addeditlicencetype.component';
import { ViewlicencetypeComponent } from './viewlicencetype/viewlicencetype.component';


const routes: Routes = [
  {
    path : 'list',
    component : LicencetypeComponent
  },
  {
    path : 'add',
    component : AddeditlicencetypeComponent
  },
  {
    path : 'edit/:Id',
    component : AddeditlicencetypeComponent
  },
  {
    path : 'view',
    component : ViewlicencetypeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LicencetypeRoutingModule { }
