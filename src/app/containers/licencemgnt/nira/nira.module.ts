import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { NiraComponent } from './nira.component';
import { NiraRoutingModule } from './nira-routing.module';
// import { NiraSt1Component } from './nira-st1/nira-st1.component';
// import { NiraLicenseFormComponent } from './nira-license-form/nira-license-form.component';

@NgModule({
  declarations: [ NiraComponent,  ],
  imports: [
    CommonModule,
    NiraRoutingModule,
    SharedModule
  ]
})
export class NiraModule { }
