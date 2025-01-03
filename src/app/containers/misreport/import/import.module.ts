import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';


import { ImportRoutingModule } from './import-routing.module';
import { RptbwflimportpermitComponent } from './rptbwflimportpermit/rptbwflimportpermit.component';
import { BwflmasterbondComponent } from './bwflmasterbond/bwflmasterbond.component';
import { Rptfl2dcbwimportpermitComponent } from './rptfl2dcbwimportpermit/rptfl2dcbwimportpermit.component';


@NgModule({
  declarations: [RptbwflimportpermitComponent, BwflmasterbondComponent, Rptfl2dcbwimportpermitComponent],
  imports: [
    CommonModule,
    SharedModule,
    ImportRoutingModule
  ]
})
export class ImportModule { }
