import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PenaltyonaccidentalcasesComponent } from './penaltyonaccidentalcases.component';
import { ViewpenaltyonaccidentalcasesComponent } from './viewpenaltyonaccidentalcases/viewpenaltyonaccidentalcases.component';
import { AddpenaltyonaccidentalcasesComponent } from './addpenaltyonaccidentalcases/addpenaltyonaccidentalcases.component';
import { EditpenaltyonaccidentalcasesComponent } from './editpenaltyonaccidentalcases/editpenaltyonaccidentalcases.component';

const routes: Routes = [
  {
    path: 'list',
    component: PenaltyonaccidentalcasesComponent
  },
  {
    path: 'add',
    component: AddpenaltyonaccidentalcasesComponent
  },
  {
    path: 'edit',
    component: EditpenaltyonaccidentalcasesComponent
  },
  
  {
    path: 'view',
    component: ViewpenaltyonaccidentalcasesComponent
  },
  
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PenaltyonaccidentalcasesRoutingModule { }
