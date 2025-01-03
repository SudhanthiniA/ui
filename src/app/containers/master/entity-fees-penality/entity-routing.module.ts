import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntityComponent } from './entity.component';
import { AddEntityComponent } from './add-entity/add-entity.component';
import { ViewEntityComponent } from './view-entity/view-entity.component';
const routes: Routes = [
  { path: 'list', component: EntityComponent },
  { path: 'add', component: AddEntityComponent },
  { path: 'edit/:id', component: AddEntityComponent },
  { path: 'view/:id', component: ViewEntityComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntityRoutingModule { }
