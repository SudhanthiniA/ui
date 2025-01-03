import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndentacceptanceforwholesaleComponent } from './indentacceptanceforwholesale.component';
import { ViewindentacceptanceComponent } from './viewindentacceptance/viewindentacceptance.component';
import { ViewindentacceptancenewComponent } from './viewindentacceptancenew/viewindentacceptancenew.component';
import { PartdeliveredindentComponent } from './partdeliveredindent/partdeliveredindent.component';
import { ViewdeliveredindentComponent } from './viewdeliveredindent/viewdeliveredindent.component';

const routes: Routes = [ 
  {
    path : 'list',
    component : IndentacceptanceforwholesaleComponent
  },
  {
    path:'acceptedindent/:id',
    component: ViewindentacceptanceComponent
  },
  {
    path:'newindents/:id',
    component: ViewindentacceptancenewComponent
  },
  {
    path:'deliveredindent/:id',
    component: ViewdeliveredindentComponent
  },
  {
    path:'partdeliveredindent/:id',
    component: PartdeliveredindentComponent
  },
  {
    path : 'list/:status',
    component : IndentacceptanceforwholesaleComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndentacceptanceforwholesaleRoutingModule { }
