import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedbackformComponent } from './feedbackform.component';

const routes: Routes = [
  { 
    path: 'add', component: FeedbackformComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeedbackformRoutingModule { }
