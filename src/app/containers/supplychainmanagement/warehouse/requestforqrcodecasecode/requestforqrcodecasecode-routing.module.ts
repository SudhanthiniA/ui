import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { RequestforqrcodecasecodeComponent } from './requestforqrcodecasecode.component';


const routes: Routes = [
  { path: 'add', component: AddComponent },
  { path: 'view', component: ViewComponent },
  { path: 'list', component: RequestforqrcodecasecodeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestforqrcodecasecodeRoutingModule { }
