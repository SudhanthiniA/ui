import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { CaseforblacklistedvehicleRoutingModule } from './caseforblacklistedvehicle-routing.module';
import { CaseforblacklistedvehicleComponent } from './caseforblacklistedvehicle.component';
import { AddcaseforblacklistedvehicleComponent } from './addcaseforblacklistedvehicle/addcaseforblacklistedvehicle.component';
import { ViewcaseforblacklistedvehicleComponent } from './viewcaseforblacklistedvehicle/viewcaseforblacklistedvehicle.component';


@NgModule({
  declarations: [CaseforblacklistedvehicleComponent,AddcaseforblacklistedvehicleComponent,
    ViewcaseforblacklistedvehicleComponent],
  imports: [
    CommonModule,
    SharedModule,
    CaseforblacklistedvehicleRoutingModule
  ]
})
export class CaseforblacklistedvehicleModule { }
