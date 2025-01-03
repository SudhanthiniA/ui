import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndentrequestComponent } from './indentrequest.component';
import { AddeditindentrequestComponent } from './addeditindentrequest/addeditindentrequest.component';
import { ViewindentrequestComponent } from './viewindentrequest/viewindentrequest.component';


const routes: Routes = [
  {
    path : 'list',
    component : IndentrequestComponent
  },
  {
    path : 'add',
    component : AddeditindentrequestComponent
  },
  {
    path : 'view/:Id',
    component : ViewindentrequestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndentrequestRoutingModule { }
