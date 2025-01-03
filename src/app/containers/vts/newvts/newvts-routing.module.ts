import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewvtsComponent } from './newvts.component'
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { FinishedgoodviewComponent } from './finishedgoodview/finishedgoodview.component';
import { MolassesviewComponent } from './molassesview/molassesview.component';
import { SpiritviewComponent } from './spiritview/spiritview.component';

const routes: Routes = [
  {
    path: 'list',
    component: NewvtsComponent
  },
  {
    path: 'add',
    component: AddComponent
  },
  {
  path: 'view',
  component: ViewComponent
},
{
  path: 'finishedgoodview',
  component: FinishedgoodviewComponent
},
{
  path: 'molassesview',
  component: MolassesviewComponent
},
{
  path: 'spiritview',
  component: SpiritviewComponent
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewvtsRoutingModule { }
