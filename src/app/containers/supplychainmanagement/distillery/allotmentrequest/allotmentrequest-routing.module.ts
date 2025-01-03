import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllotmentrequestComponent } from './allotmentrequest.component';
import { AddeditallotmentrequestComponent } from './addeditallotmentrequest/addeditallotmentrequest.component';
import { ViewallotmentrequestComponent } from './viewallotmentrequest/viewallotmentrequest.component';
import { PreviewallotmentComponent } from './previewallotment/previewallotment.component';

const routes: Routes = [
  {
    path : 'list',
    component: AllotmentrequestComponent
  },
  {
    path: 'add',
    component: AddeditallotmentrequestComponent
  },
  {
    path: 'edit/:Id',
    component: AddeditallotmentrequestComponent
  },
  {
    path: 'view',
    component: ViewallotmentrequestComponent
  },
  {
    path: 'preview',
    component: PreviewallotmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllotmentrequestRoutingModule { }
