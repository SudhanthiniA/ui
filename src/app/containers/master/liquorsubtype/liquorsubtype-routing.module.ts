import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LiquorsubtypeComponent } from './liquorsubtype.component';
import { AddliquorsubtypeComponent } from './addliquorsubtype/addliquorsubtype.component';
import { ViewliquorsubtypeComponent } from './viewliquorsubtype/viewliquorsubtype.component';

const routes: Routes = [
  { path: 'list', component: LiquorsubtypeComponent },
  { path: 'add', component: AddliquorsubtypeComponent },
  { path: 'view', component: ViewliquorsubtypeComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LiquorsubtypeRoutingModule { }
