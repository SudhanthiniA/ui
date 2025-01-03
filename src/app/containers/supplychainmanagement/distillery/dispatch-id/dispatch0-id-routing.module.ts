import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DispatchIdComponent } from './dispatch-id.component';
import { EditComponent } from './edit/edit.component';


const routes: Routes = [
  { path: 'list', component: DispatchIdComponent },
  { path: 'edit', component: EditComponent },
  // { path: 'view', component: ViewdispatchedComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Dispatch0IdRoutingModule { }
