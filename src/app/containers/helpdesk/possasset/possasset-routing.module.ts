import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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

const routes: Routes = [
  { path: 'list', component: PossassetComponent },
  { path: 'add', component: AddpossassetComponent },
  { path: 'addhelpdeskexe', component: AddposassethelpdeskexeComponent },
  { path: 'posassignfield', component: PosdamagefieldengComponent },
  { path: 'createticket', component: createticketlistComponent },
  { path: 'view', component: ViewpossassetComponent },
  { path: 'deo', component: DeoapprovalComponent },
  { path: 'deostock', component: DeostockavailabilityComponent },
  { path: 'acknowledgement', component: LicenseacknowledgeComponent },
  { path: 'profilelist', component: ProfilelistComponent },
  { path: 'assigntofieldengg', component: AssigntofieldenggComponent },
  { path: 'fieldengglist', component: FieldengglistComponent },
  { path: 'assignticket', component: AssignticketComponent },
  { path: 'deolist', component: DeolistComponent },
  { path: 'deoaddpos', component: DeoaddposassetComponent },
  { path: 'viewassetdetails', component: ViewassetdetailsComponent },
  { path: 'viewpendingrequestfromdeo', component: ViewpendingrequestfromdeoComponent },
  { path: 'addpendingrequest', component: AddpendingrequestComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PossassetRoutingModule { }
