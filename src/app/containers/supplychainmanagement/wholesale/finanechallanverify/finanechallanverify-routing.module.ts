import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinanechallanverifyComponent } from './finanechallanverify.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path: 'list', component: FinanechallanverifyComponent },

  {
    path: 'view',
    component: ViewComponent
  }
]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinanechallanverifyRoutingModule { }
