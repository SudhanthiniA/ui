import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndentrequestComponent } from './indentrequest.component';
import { ViewindentrequestComponent } from './viewindentrequest/viewindentrequest.component';
import { AddeditindentrequestComponent } from './addeditindentrequest/addeditindentrequest.component';


const routes: Routes = [
  {
    path : 'list',
    component : IndentrequestComponent
  },
  {
    path: 'view',
    component : ViewindentrequestComponent
  },
  {
    path: 'preview',
    component : ViewindentrequestComponent
  },
  {
    path : 'add',
    component : AddeditindentrequestComponent
  },
  {
    path : 'edit/:id',
    component : AddeditindentrequestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndentrequestRoutingModule { }
