import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndentforclosureComponent } from './indentforclosure.component';
import { AddindentforclosureComponent } from './addindentforclosure/addindentforclosure.component';
import { ViewindentforclosureComponent } from './viewindentforclosure/viewindentforclosure.component';

const routes: Routes = [
  {
    path : 'list',
    component : IndentforclosureComponent
  },
  {
    path: 'add',
    component : AddindentforclosureComponent
  },
  {
    path: 'view',
    component : ViewindentforclosureComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndentforclosureRoutingModule { }
