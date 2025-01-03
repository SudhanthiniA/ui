import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LabeldesignComponent } from './labeldesign.component';
import { AddlabeldesignComponent } from './addlabeldesign/addlabeldesign.component';

const routes: Routes = [
  {
    path: 'list',
    component: LabeldesignComponent
  },
  {
    path: 'add',
    component: AddlabeldesignComponent
  },
  {
    path: 'edit/:Id',
    component: AddlabeldesignComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LabeldesignRoutingModule { }
