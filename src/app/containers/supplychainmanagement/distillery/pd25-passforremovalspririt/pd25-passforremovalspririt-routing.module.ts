import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pd25PassforremovalspriritComponent } from './pd25-passforremovalspririt.component';
import { Pd25AddeditComponent } from './pd25-addedit/pd25-addedit.component';
import { Pd25ViewComponent } from './pd25-view/pd25-view.component';
import { Pd25AcknowledgementComponent } from './pd25-acknowledgement/pd25-acknowledgement.component';

const routes: Routes = [{ path: 'list', component: Pd25PassforremovalspriritComponent },
{ path: 'add', component: Pd25AddeditComponent },
{ path: 'view', component: Pd25ViewComponent },
{ path: 'edit/:id', component: Pd25AddeditComponent },
{ path: 'preview', component: Pd25ViewComponent },
{ path: 'acknowledgement', component: Pd25AcknowledgementComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Pd25PassforremovalspriritRoutingModule { }
