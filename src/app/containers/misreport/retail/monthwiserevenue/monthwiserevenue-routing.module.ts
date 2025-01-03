import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { JdstataddComponent } from './jdstatadd/jdstatadd.component';
import { JdstatlistComponent } from './jdstatlist/jdstatlist.component';
import { TaskforcelistComponent } from './taskforcelist/taskforcelist.component';
import { TaskforceaddComponent } from './taskforceadd/taskforceadd.component';

const routes: Routes = [
  { path: 'add', component: AddComponent },
  { path: 'list', component: ListComponent },
  { path: 'jdstatadd', component: JdstataddComponent },
  { path: 'jdstatlist', component: JdstatlistComponent },
  { path: 'taskforcelist', component: TaskforcelistComponent },
  { path: 'taskforceadd', component: TaskforceaddComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MonthwiserevenueRoutingModule { }
