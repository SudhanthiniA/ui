import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SurveyformComponent } from './surveyform.component';

const routes: Routes = [
  { 
    path: 'add', component: SurveyformComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SurveyformRoutingModule { }
