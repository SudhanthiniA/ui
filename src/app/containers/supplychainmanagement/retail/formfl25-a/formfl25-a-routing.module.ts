import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Formfl25AComponent } from './formfl25-a.component';
import { Part1Component } from './part1/part1.component';
import { Addpart1Component } from './part1/addpart1/addpart1.component';
import { Viewpart1Component } from './part1/viewpart1/viewpart1.component';
import { Part2Component } from './part2/part2.component';
import { Addpart2Component } from './part2/addpart2/addpart2.component';
import { Viewpart2Component } from './part2/viewpart2/viewpart2.component';
import { Part3Component } from './part3/part3.component';
import { Addpart3Component } from './part3/addpart3/addpart3.component';
import { Viewpart3Component } from './part3/viewpart3/viewpart3.component';
import { Part4Component } from './part4/part4.component';
import { Addpart4Component } from './part4/addpart4/addpart4.component';
import { Viewpart4Component } from './part4/viewpart4/viewpart4.component';

const routes: Routes = [
  { path: '', component: Formfl25AComponent },
  { path: 'part1/list', component: Part1Component },
  { path: 'part1/add', component: Addpart1Component },
  { path: 'part1/view/:id', component: Viewpart1Component },
  { path: 'part2/list', component: Part2Component },
  { path: 'part2/add', component: Addpart2Component },
  { path: 'part2/view/:id', component: Viewpart2Component },
  { path: 'part3/list', component: Part3Component },
  { path: 'part3/add', component: Addpart3Component },
  { path: 'part3/view/:id', component: Viewpart3Component },
  { path: 'part4/list', component: Part4Component },
  { path: 'part4/add', component: Addpart4Component },
  { path: 'part4/view/:id', component: Viewpart4Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Formfl25ARoutingModule { }
