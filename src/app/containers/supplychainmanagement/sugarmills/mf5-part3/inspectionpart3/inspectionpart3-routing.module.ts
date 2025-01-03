import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Inspectionpart3Component } from './inspectionpart3.component';
import { Viewinspectionpart3Component } from './viewinspectionpart3/viewinspectionpart3.component';


const routes: Routes = [

  { path: 'list', component: Inspectionpart3Component },

  { path: 'view/:Id', component: Viewinspectionpart3Component },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Inspectionpart3RoutingModule { }
