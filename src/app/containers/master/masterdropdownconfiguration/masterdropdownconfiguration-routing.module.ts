import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { MasterdropdownconfigurationComponent } from './masterdropdownconfiguration.component';
import { ViewComponent } from './view/view.component';


const routes: Routes = [
  { path : 'list', component : MasterdropdownconfigurationComponent},
  { path: 'add', component: AddComponent },
  { path: 'edit/:id/:key', component: AddComponent },
  { path: 'view/:id/:key', component: ViewComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterDropdownconfigurationRoutingModule { }
