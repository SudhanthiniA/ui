import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LicenseSharedModule } from '@appLicMgnt/license-shared.module';

import { BwfparentunitnewRoutingModule } from './bwfparentunitnew-routing.module';
import { AddbwfparentunitregistrationComponent } from './addbwfparentunitregistration/addbwfparentunitregistration.component';
import { ViewbwfparentunitregistrationComponent } from './viewbwfparentunitregistration/viewbwfparentunitregistration.component';
import { AddbwfparentunitadditionalComponent } from './addbwfparentunitadditional/addbwfparentunitadditional.component';
import { ViewbwfparentunitadditionalComponent } from './viewbwfparentunitadditional/viewbwfparentunitadditional.component';



@NgModule({
  declarations: [AddbwfparentunitregistrationComponent, ViewbwfparentunitregistrationComponent, AddbwfparentunitadditionalComponent, ViewbwfparentunitadditionalComponent],
  imports: [
    CommonModule,
    LicenseSharedModule,
    BwfparentunitnewRoutingModule
  ]
})
export class BwfparentunitnewModule { }
