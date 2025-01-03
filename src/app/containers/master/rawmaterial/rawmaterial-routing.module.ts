import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RawmaterialComponent } from './rawmaterial.component';
import { AddeditrawmaterialComponent } from './addeditrawmaterial/addeditrawmaterial.component';
import { ViewrawmaterialComponent } from './viewrawmaterial/viewrawmaterial.component';

const routes: Routes = [
  { path: 'list', component: RawmaterialComponent },
  { path: 'add', component: AddeditrawmaterialComponent },
  { path: 'edit/:id', component: AddeditrawmaterialComponent },
  { path: 'view', component: ViewrawmaterialComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RawmaterialRoutingModule { }
