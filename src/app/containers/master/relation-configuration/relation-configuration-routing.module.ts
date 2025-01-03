import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RelationConfigurationComponent } from './relation-configuration.component';
import { AddRelationComponent } from './add-relation/add-relation.component';
import { ViewRelationComponent } from './view-relation/view-relation.component';


const routes: Routes = [
  { path: '', component: RelationConfigurationComponent },
  { path: 'add', component: AddRelationComponent },
  { path: 'edit/:code/:subCode', component: AddRelationComponent },
  { path: 'view/:code/:subCode', component: ViewRelationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RelationConfigurationRoutingModule { }
