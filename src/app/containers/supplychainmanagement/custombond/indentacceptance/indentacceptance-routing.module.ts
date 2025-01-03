import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndentacceptanceComponent } from './indentacceptance.component';
import { ViewindentacceptanceComponent } from './viewindentacceptance/viewindentacceptance.component';
import { PartdeliveredComponent } from './partdelivered/partdelivered.component';
import { ViewnewindentComponent } from './viewnewindent/viewnewindent.component';
import { ViewindentsdispatchedComponent } from './viewindentsdispatched/viewindentsdispatched.component';


const routes: Routes = [ 
  {
    path : 'list',
    component : IndentacceptanceComponent
  },
  {
    path : 'newindent',
    component : ViewnewindentComponent
  },
  {
    path : 'indentdispatched',
    component : ViewindentsdispatchedComponent
  },
  {
    path : 'indentacceptance',
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
