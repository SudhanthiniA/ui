import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { BlendtransferrequestComponent } from './blendtransferrequest.component';

const routes: Routes = [
  { path: 'list', component: BlendtransferrequestComponent},
  {path: 'add', component: AddComponent},
  {path: 'view', component: ViewComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlendtransferrequestRoutingModule { }
