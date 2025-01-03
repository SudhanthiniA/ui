import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReturnfillinglistComponent } from './returnfillinglist.component';
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component';
import { ViewapprovaldeoComponent } from './viewapprovaldeo/viewapprovaldeo.component';

const routes: Routes = [{ 
  path: 'list', component: ReturnfillinglistComponent},
  {path: 'view', component: ViewComponent},
  {path: 'add', component: AddComponent},
  {path: 'deoapproval', component: ViewapprovaldeoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReturnfillinglistRoutingModule { }
