import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WastagereportComponent } from './wastagereport.component';


const routes: Routes = [

  {
    path : 'report',
    component : WastagereportComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WastagereportRoutingModule { }
