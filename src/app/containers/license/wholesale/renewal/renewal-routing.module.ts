import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { RenewalComponent } from './renewal.component';

const routes: Routes = [
  {
    path: '',
    component: RenewalComponent
  },
 
  {
    path: 'view',
    component: ViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RenewalRoutingModule { }
