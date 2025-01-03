import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LicencecategoryComponent } from './licencecategory.component';
import { AddeditlicencecategoryComponent } from './addeditlicencecategory/addeditlicencecategory.component';
import { ViewlicencecategoryComponent } from './viewlicencecategory/viewlicencecategory.component';

const routes: Routes = [
  { path: 'list', component: LicencecategoryComponent },
  { path: 'add', component: AddeditlicencecategoryComponent },
  { path: 'edit/:id', component: AddeditlicencecategoryComponent },
  { path: 'view/:id', component: ViewlicencecategoryComponent }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LicencecategoryRoutingModule { }
