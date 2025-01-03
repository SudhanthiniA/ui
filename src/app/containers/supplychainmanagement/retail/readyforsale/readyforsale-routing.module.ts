import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReadyforsaleComponent } from './readyforsale.component';
import { BillconfirmationComponent } from './billconfirmation/billconfirmation.component';

const routes: Routes = [
  { path: '', component: ReadyforsaleComponent },
  { path: 'billconfirmation', component: BillconfirmationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReadyforsaleRoutingModule { }
