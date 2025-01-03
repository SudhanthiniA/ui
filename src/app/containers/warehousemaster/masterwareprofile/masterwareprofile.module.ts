import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { MasterwareprofileRoutingModule } from './masterwareprofile-routing.module';
import { MasterwareprofileComponent } from './masterwareprofile.component';
import { ViewmasterwareprofileComponent } from './viewmasterwareprofile/viewmasterwareprofile.component';


@NgModule({
  declarations: [MasterwareprofileComponent, ViewmasterwareprofileComponent],
  imports: [
    CommonModule,
    SharedModule,
    MasterwareprofileRoutingModule
  ]
})
export class MasterwareprofileModule { }
