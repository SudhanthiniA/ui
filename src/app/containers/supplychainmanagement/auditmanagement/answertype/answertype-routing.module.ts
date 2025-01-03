import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnswertypeComponent } from './answertype.component';

const routes: Routes = [
  {
    path : 'add',
    component : AnswertypeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnswertypeRoutingModule { }
