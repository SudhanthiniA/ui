import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SamplereceiptackComponent } from './samplereceiptack.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path : 'list',
    component : SamplereceiptackComponent, 
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
export class SamplereceiptackRoutingModule { }
