import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZerostockviewComponent } from './zerostockview.component';

const routes: Routes = [{ path: 'list', component: ZerostockviewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ZerostockviewRoutingModule { }
