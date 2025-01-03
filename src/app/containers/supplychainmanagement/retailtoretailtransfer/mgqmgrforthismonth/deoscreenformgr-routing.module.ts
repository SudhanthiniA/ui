import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeoscreenformgrComponent } from './deoscreenformgr.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path: 'list', component: DeoscreenformgrComponent },
  { path: 'view', component: ViewComponent },
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeoscreenformgrRoutingModule { }
