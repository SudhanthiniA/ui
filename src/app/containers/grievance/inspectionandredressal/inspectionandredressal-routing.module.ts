import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InspectionandredressalComponent } from './inspectionandredressal.component';
import { ViewinspectionandredressalComponent } from './viewinspectionandredressal/viewinspectionandredressal.component';


const routes: Routes = [
  { path: 'list', 
  component : InspectionandredressalComponent 
  },
  { path: 'view', 
  component: ViewinspectionandredressalComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InspectionandredressalRoutingModule { }