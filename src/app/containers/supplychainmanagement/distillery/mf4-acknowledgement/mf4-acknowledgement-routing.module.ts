import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mf4AcknowledgementComponent } from './mf4-acknowledgement.component';

const routes: Routes = [{ path: 'list', component: Mf4AcknowledgementComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Mf4AcknowledgementRoutingModule { }
