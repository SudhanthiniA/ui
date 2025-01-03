import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pd5InspectorDiaryComponent } from './pd5-inspector-diary.component';
import { Pd5ViewComponent } from './pd5-view/pd5-view.component';
import { Pd5AddeditComponent } from './pd5-addedit/pd5-addedit.component';

const routes: Routes = [{ path: 'list', component: Pd5InspectorDiaryComponent },
{
  path : 'view/:id',
  component : Pd5ViewComponent
},
{
  path : 'add',
  component : Pd5AddeditComponent
},
{
  path : 'edit/:id',
  component : Pd5AddeditComponent
},
{ path: 'preview', component: Pd5ViewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Pd5InspectorDiaryRoutingModule { }
