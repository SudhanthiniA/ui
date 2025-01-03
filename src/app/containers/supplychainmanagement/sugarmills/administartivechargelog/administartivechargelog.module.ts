import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministartivechargelogRoutingModule } from './administartivechargelog-routing.module';
import { AdministartivechargelogComponent } from './administartivechargelog.component';
import { SharedModule } from '@appThemeShared/shared.module';

@NgModule({
  declarations: [
    AdministartivechargelogComponent
  ],
  imports: [
    CommonModule,
    AdministartivechargelogRoutingModule,
    SharedModule
  ]
})
export class AdministartivechargelogModule { }
