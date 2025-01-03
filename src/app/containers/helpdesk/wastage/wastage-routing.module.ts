import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicantlistComponent } from './applicantlist/applicantlist.component';
import { Routes, RouterModule } from '@angular/router';
import { ApplicantAddComponent } from './applicant-add/applicant-add.component';
import { ApplicantViewComponent } from './applicant-view/applicant-view.component';
import { OfficerListComponent } from './officer-list/officer-list.component';
import { OfficerAddComponent } from './officer-add/officer-add.component';
import { OfficerViewComponent } from './officer-view/officer-view.component';
import { ApplicantAddNewComponent } from './applicant-add-new/applicant-add-new.component';
import { ApplicantViewNewComponent } from './applicant-view-new/applicant-view-new.component';

const routes: Routes = [
  { path: 'list', component: ApplicantlistComponent },
  { path: 'add', component: ApplicantAddComponent },
  { path: 'addnew', component: ApplicantAddNewComponent },
  { path: 'view', component: ApplicantViewComponent },
  { path: 'viewnew', component: ApplicantViewNewComponent },
  { path: 'officer-list', component: OfficerListComponent },
  { path: 'officer-add', component: OfficerAddComponent },
  { path: 'officer-view', component: OfficerViewComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WastageRoutingModule { }
