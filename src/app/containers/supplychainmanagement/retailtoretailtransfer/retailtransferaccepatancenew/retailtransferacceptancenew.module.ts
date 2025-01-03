import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { CommonModule } from '@angular/common';
import { RetailtransferacceptancenewRoutingModule } from './retailtransferacceptancenew-routing.module';
import { RetailtransferaccepatancenewComponent } from './retailtransferaccepatancenew.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [RetailtransferaccepatancenewComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    RetailtransferacceptancenewRoutingModule
  ]
})
export class RetailtransferacceptancenewModule { }
