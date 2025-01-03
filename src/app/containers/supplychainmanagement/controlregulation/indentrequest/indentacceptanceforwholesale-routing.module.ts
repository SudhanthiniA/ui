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
    path:'acceptedindent',
    component: ViewindentacceptanceComponent
  },
  {
    path:'newindents',
    component: ViewindentacceptancenewComponent
  },
  {
    path:'deliveredindent',
    component: ViewdeliveredindentComponent
  },
  {
    path:'partdeliveredindent',
    component: PartdeliveredindentComponent
  },
  {
    path : 'list',
    component : IndentacceptanceforwholesaleComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndentacceptanceforwholesaleRoutingModule { }
