import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdvancedutyregisterComponent } from './advancedutyregister.component';

const routes: Routes = [{ path: 'list', component: AdvancedutyregisterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvancedutyregisterRoutingModule { }
