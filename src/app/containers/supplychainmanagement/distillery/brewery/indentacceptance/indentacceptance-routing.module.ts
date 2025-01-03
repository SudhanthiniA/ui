import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndentacceptanceComponent } from './indentacceptance.component';
import { ViewindentacceptanceComponent } from './viewindentacceptance/viewindentacceptance.component';

const routes: Routes = [
  {
    path: 'list',
    component: IndentacceptanceComponent
  },
  {
    path: 'view',
    component: ViewindentacceptanceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndentacceptanceRoutingModule { }
