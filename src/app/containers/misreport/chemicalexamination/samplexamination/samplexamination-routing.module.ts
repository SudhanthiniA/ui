import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SamplexaminationComponent } from './samplexamination.component';
import { ViewsamplexaminationComponent } from './viewsamplexamination/viewsamplexamination.component';

const routes: Routes = [
  {
    path : 'list',
    component : SamplexaminationComponent, 
  },
  
  {
    path : 'view', 
    component : ViewsamplexaminationComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SamplexaminationRoutingModule { }
