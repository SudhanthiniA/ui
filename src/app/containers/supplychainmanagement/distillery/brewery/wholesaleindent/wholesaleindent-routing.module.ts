
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WholesaleindentComponent } from './wholesaleindent.component';
import { ViewwholesaleindentComponent } from './viewwholesaleindent/viewwholesaleindent.component';

const routes: Routes = [
  {
    path : 'view',
    component : ViewwholesaleindentComponent
  },
  {
    path : 'list',
    component : WholesaleindentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WholesaleindentRoutingModule { }
