import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReturnfillingapplicationComponent } from './returnfillingapplication.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { AcknowledgementComponent } from './acknowledgement/acknowledgement.component';
import { DeolistComponent } from './deolist/deolist.component';
import { DeoviewComponent } from './deoview/deoview.component';

const routes: Routes = [{ path: 'list', component: ReturnfillingapplicationComponent },
{ path: 'add', component: AddComponent },
{ path: 'view', component: ViewComponent },
{ path: 'ack', component: AcknowledgementComponent },
{ path: 'deolist', component: DeolistComponent },
{ path: 'deoview', component: DeoviewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReturnfillingapplicationRoutingModule { }
