import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mf4TpGenerationComponent } from './mf4-tp-generation.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path: 'list', component: Mf4TpGenerationComponent },
  { path: 'add', component: AddComponent },
  { path: 'view', component: ViewComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Mf4TpGenerationRoutingModule { }
