import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UploadlabelComponent } from './uploadlabel.component';

import { ViewuploadlabelComponent } from './viewuploadlabel/viewuploadlabel.component';

import { ScreenuploadlabelComponent } from './screenuploadlabel/screenuploadlabel.component';

const routes: Routes = [
  { path: 'list', component: UploadlabelComponent },
  { path: 'view/:id', component: ViewuploadlabelComponent },
  { path: 'screen/:id', component: ScreenuploadlabelComponent }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UploadlabelRoutingModule { }
