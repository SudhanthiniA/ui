import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddallotmentforeclosureComponent } from './addallotmentforeclosure/addallotmentforeclosure.component';
import { ViewallotmentforeclosureComponent } from './viewallotmentforeclosure/viewallotmentforeclosure.component';
import { AllotmentforeclosureComponent } from './allotmentforeclosure.component';

const routes: Routes = [
  { path: 'list', component: AllotmentforeclosureComponent},
  {path: 'add', component: AddallotmentforeclosureComponent},
  {path: 'view', component: ViewallotmentforeclosureComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllotmentforeclosureRoutingModule { }
