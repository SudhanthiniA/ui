import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GenerateqrcodeComponent } from './generateqrcode.component';
import { AddgenerateqrcodeComponent } from './addgenerateqrcode/addgenerateqrcode.component';
import { ViewgenerateqrcodeComponent } from './viewgenerateqrcode/viewgenerateqrcode.component';

const routes: Routes = [
  { path: 'list', component: GenerateqrcodeComponent },
  { path: 'add', component: AddgenerateqrcodeComponent },
  { path: 'view', component: ViewgenerateqrcodeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenerateqrcodeRoutingModule { }
