import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImportrequestComponent } from './importrequest.component';
import { AddeditimportrequestComponent } from './addeditimportrequest/addeditimportrequest.component';
import { ViewimportrequestComponent } from './viewimportrequest/viewimportrequest.component';


const routes: Routes = [
  {
    path : 'list',
    component : ImportrequestComponent
  },
  {
    path: 'view/:id',
    component : ViewimportrequestComponent
  },
  {
    path: 'preview',
    component : ViewimportrequestComponent
  },
  {
    path : 'add',
    component : AddeditimportrequestComponent
  },
  {
    path : 'edit/:id',
    component : AddeditimportrequestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImportrequestRoutingModule { }
