import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReturnComponent } from './return.component';
import { AddreturnComponent } from './addreturn/addreturn.component';
import { ViewreturnComponent } from './viewreturn/viewreturn.component';
import { ReturnqrscanComponent } from './returnqrscan/returnqrscan.component';

const routes: Routes = [
  { path: '', component: ReturnComponent },
  { path: 'add', component: AddreturnComponent },
  { path: 'view', component: ViewreturnComponent },
  { path: 'qr-scan', component: ReturnqrscanComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReturnRoutingModule { }
