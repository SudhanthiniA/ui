import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Inspectionmf5part2Component } from './inspectionmf5part2.component';
import { Viewinspectionpart2Component } from './viewinspectionpart2/viewinspectionpart2.component';


const routes: Routes = [

  { path: 'list', component: Inspectionmf5part2Component },

  { path: 'view/:Id', component: Viewinspectionpart2Component },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Inspectionmf5part2RoutingModule { }
