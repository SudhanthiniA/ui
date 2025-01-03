import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExciseofficerlistComponent } from './exciseofficerlist.component';
import { ViewinspectionComponent } from './viewinspection/viewinspection.component';


const routes: Routes = [

  {
    path : 'list',
    component : ExciseofficerlistComponent
  },
  {
    path : 'view/:Id',
    component : ViewinspectionComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExciseofficerlistRoutingModule { }
