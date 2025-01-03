import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';


import { WholesaleindentRoutingModule } from './wholesaleindent-routing.module';
import { UnitwisependindentComponent } from './unitwisependindent/unitwisependindent.component';
import { UpexsdeptdiswisependindComponent } from './upexsdeptdiswisependind/upexsdeptdiswisependind.component';
import { UnitwisependingindrptComponent } from './unitwisependingindrpt/unitwisependingindrpt.component';
import { IndentstatusrptComponent } from './indentstatusrpt/indentstatusrpt.component';


@NgModule({
  declarations: [UnitwisependindentComponent, UpexsdeptdiswisependindComponent, UnitwisependingindrptComponent, IndentstatusrptComponent],
  imports: [
    CommonModule,
    SharedModule,
    WholesaleindentRoutingModule
  ]
})
export class WholesaleindentModule { }
