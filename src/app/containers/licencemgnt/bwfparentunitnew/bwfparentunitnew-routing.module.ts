import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddbwfparentunitregistrationComponent } from './addbwfparentunitregistration/addbwfparentunitregistration.component';
import { ViewbwfparentunitregistrationComponent } from './viewbwfparentunitregistration/viewbwfparentunitregistration.component';
import { AddbwfparentunitadditionalComponent } from './addbwfparentunitadditional/addbwfparentunitadditional.component';
import { ViewbwfparentunitadditionalComponent } from './viewbwfparentunitadditional/viewbwfparentunitadditional.component';

const routes: Routes = [
  {
    path: 'addregistration',
    component: AddbwfparentunitregistrationComponent
  },
  {
    path: 'viewregistration',
    component: ViewbwfparentunitregistrationComponent
  },
  {
    path: 'addadditional',
    component: AddbwfparentunitadditionalComponent
  },
  {
    path: 'viewadditional',
    component: ViewbwfparentunitadditionalComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BwfparentunitnewRoutingModule { }
