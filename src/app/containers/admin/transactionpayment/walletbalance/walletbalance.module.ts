import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { WalletbalanceRoutingModule } from './walletbalance-routing.module';
import { WalletbalanceComponent } from './walletbalance.component';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [WalletbalanceComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    WalletbalanceRoutingModule
  ]
})
export class WalletbalanceModule { }
