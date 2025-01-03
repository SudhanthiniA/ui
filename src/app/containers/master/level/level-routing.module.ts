import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LevelComponent } from './level.component';
import { AddlevelComponent } from './addlevel/addlevel.component';
import { ViewlevelComponent } from './viewlevel/viewlevel.component';

const routes: Routes = [
  { path: 'list', component: LevelComponent },
  { path: 'add', component: AddlevelComponent },
  { path: 'view', component: ViewlevelComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LevelRoutingModule { }
