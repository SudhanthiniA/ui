import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportemailComponent } from './reportemail.component';


const routes: Routes = [
  { path: 'list', component: ReportemailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ReportemailRoutingModule { }
