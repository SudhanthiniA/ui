import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdvancedutyComponent } from './advanceduty.component';

const routes: Routes = [ 
  {
    path : 'add',
    component : AdvancedutyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvancedutyRoutingModule { }
