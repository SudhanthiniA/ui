import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Fl1aindentComponent } from './fl1aindent.component';
import { Addfl1aindentComponent } from './addfl1aindent/addfl1aindent.component';
import { Viewfl1aindentComponent } from './viewfl1aindent/viewfl1aindent.component';
import { Approvalfl1aindentComponent } from './approvalfl1aindent/approvalfl1aindent.component';

const routes: Routes = [
  {
    path : 'list',
    component : Fl1aindentComponent
  },
  {
    path: 'add',
    component : Addfl1aindentComponent
  },
  {
    path: 'view',
    component : Viewfl1aindentComponent
  },
  {
    path: 'approval',
    component : Approvalfl1aindentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Fl1aindentRoutingModule { }
