import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuotatimelineComponent } from './quotatimeline.component';
import { AddquotatimelineComponent } from './addquotatimeline/addquotatimeline.component';
import { ViewquotatimelineComponent } from './viewquotatimeline/viewquotatimeline.component';

const routes: Routes = [
  { path: 'list', component: QuotatimelineComponent },
  { path: 'add', component: AddquotatimelineComponent },
  { path: 'view', component: ViewquotatimelineComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuotatimelineRoutingModule { }
