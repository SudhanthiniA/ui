import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MolassesdispatchreportComponent } from './molassesdispatchreport.component';


const routes: Routes = [

  {
    path : 'report',
    component : MolassesdispatchreportComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MolassesdispatchreportRoutingModule { }
