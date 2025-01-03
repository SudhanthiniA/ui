import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { QuotaRoutingModule } from './quota-routing.module';
import { QuotaComponent } from './quota.component';
import { ViewquotaComponent } from './viewquota/viewquota.component';



@NgModule({
  declarations: [QuotaComponent, ViewquotaComponent,],
  imports: [
    CommonModule,
    SharedModule,
    QuotaRoutingModule
  ]
})
export class QuotaModule { }
