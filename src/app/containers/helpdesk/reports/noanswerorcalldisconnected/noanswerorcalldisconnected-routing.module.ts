import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoanswerorcalldisconnectedComponent } from './noanswerorcalldisconnected.component';


const routes: Routes = [
  { path: '', component: NoanswerorcalldisconnectedComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoanswerorcalldisconnectedRoutingModule { }
