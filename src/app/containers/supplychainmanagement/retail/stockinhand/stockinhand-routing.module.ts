import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StockinhandComponent } from './stockinhand.component';

const routes: Routes = [{ path: '', component: StockinhandComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockinhandRoutingModule { }
