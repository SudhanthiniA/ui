import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApplicationtypeComponent } from './applicationtype.component';

import { ViewapplicationtypeComponent } from './viewapplicationtype/viewapplicationtype.component';
import { AddeditapplicationtypeComponent } from './addeditapplicationtype/addeditapplicationtype.component';

const routes: Routes = [
  { path: 'list', component: ApplicationtypeComponent },
  { path: 'add', component:  AddeditapplicationtypeComponent},
  { path: 'edit/:id', component:  AddeditapplicationtypeComponent},
  { path: 'view', component: ViewapplicationtypeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationtypeRoutingModule { }
