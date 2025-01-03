import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MwqrcodeuploadComponent } from './mwqrcodeupload.component';

const routes: Routes = [
  { path: 'view', component: MwqrcodeuploadComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MwqrcodeuploadRoutingModule { }
