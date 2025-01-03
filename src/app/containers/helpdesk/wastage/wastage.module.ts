import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicantlistComponent } from './applicantlist/applicantlist.component';
import { SharedModule } from '@appThemeShared/shared.module';
import { WastageRoutingModule } from './wastage-routing.module';
import { ApplicantAddComponent } from './applicant-add/applicant-add.component';
import { ApplicantViewComponent } from './applicant-view/applicant-view.component';
import { OfficerListComponent } from './officer-list/officer-list.component';
import { OfficerAddComponent } from './officer-add/officer-add.component';
import { OfficerViewComponent } from './officer-view/officer-view.component';
import { ApplicantAddNewComponent } from './applicant-add-new/applicant-add-new.component';
import { ApplicantViewNewComponent } from './applicant-view-new/applicant-view-new.component';

@NgModule({
  declarations: [ApplicantlistComponent, ApplicantAddComponent, ApplicantViewComponent, OfficerListComponent, OfficerAddComponent, OfficerViewComponent, ApplicantAddNewComponent,ApplicantViewNewComponent],
  imports: [
    CommonModule,
    SharedModule,
    WastageRoutingModule
  ]
})
export class WastageModule { }
