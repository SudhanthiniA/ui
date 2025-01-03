import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { CommonModule } from '@angular/common';

import { PossassetRoutingModule } from './possasset-routing.module';
import { PossassetComponent } from './possasset.component';
import { AddpossassetComponent } from './addpossasset/addpossasset.component';
import { ViewpossassetComponent } from './viewpossasset/viewpossasset.component';
import { DeoapprovalComponent } from './deoapproval/deoapproval.component';
import { DeostockavailabilityComponent } from './deostockavailability/deostockavailability.component';
import { LicenseacknowledgeComponent } from './licenseacknowledge/licenseacknowledge.component';
import { ProfilelistComponent } from './profilelist/profilelist.component';
import { AddposassethelpdeskexeComponent } from './addposassethelpdeskexe/addposassethelpdeskexe.component';
import { AssigntofieldenggComponent } from './assigntofieldengg/assigntofieldengg.component';
import { FieldengglistComponent } from './fieldengglist/fieldengglist.component';
import { AssignticketComponent } from './assignticket/assignticket.component';
import { DeolistComponent } from './deolist/deolist.component';
import { DeoaddposassetComponent } from './deoaddposasset/deoaddposasset.component';
import { ViewassetdetailsComponent } from './viewassetdetails/viewassetdetails.component';
import { ViewpendingrequestfromdeoComponent } from './viewpendingrequestfromdeo/viewpendingrequestfromdeo.component';
import { AddpendingrequestComponent } from './addpendingrequest/addpendingrequest.component';
import { PosdamagefieldengComponent } from './posdamagefieldeng/posdamagefieldeng.component';
import { createticketlistComponent } from './createticketlist/fieldengglist.component';



@NgModule({
  declarations: [createticketlistComponent,PosdamagefieldengComponent,PossassetComponent, AddpossassetComponent, ViewpossassetComponent, DeoapprovalComponent, DeostockavailabilityComponent, LicenseacknowledgeComponent, ProfilelistComponent, AddposassethelpdeskexeComponent, AssigntofieldenggComponent, FieldengglistComponent, AssignticketComponent, DeolistComponent, DeoaddposassetComponent, ViewassetdetailsComponent, ViewpendingrequestfromdeoComponent, AddpendingrequestComponent],
  imports: [
    CommonModule,
    SharedModule,
    PossassetRoutingModule
  ]
})
export class PossassetModule { }
