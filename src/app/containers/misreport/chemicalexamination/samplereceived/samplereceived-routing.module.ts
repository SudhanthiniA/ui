import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SamplereceivedComponent } from './samplereceived.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path : 'list',
    component : SamplereceivedComponent, 
  },
  
  {
    path : 'view', 
    component : ViewComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SamplereceivedRoutingModule { }
