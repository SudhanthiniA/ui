import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndentacceptanceComponent } from './indentacceptance.component';
import { ViewindentacceptanceComponent } from './viewindentacceptance/viewindentacceptance.component';
import { PartdeliveredComponent } from './partdelivered/partdelivered.component';

const routes: Routes = [ 
  {
    path : 'list',
    component : IndentacceptanceComponent
  },
  {
    path : 'view',
    component : ViewindentacceptanceComponent
  },
  {
    path : 'partdelivered',
    component : PartdeliveredComponent
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndentacceptanceRoutingModule { }
