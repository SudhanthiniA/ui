import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { RetailtransferacceotancemgqRoutingModule } from './retailtransferacceotancemgq-routing.module';
import { ViewComponent } from './view/view.component';



@NgModule({
  declarations: [ListComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    RetailtransferacceotancemgqRoutingModule
  ]
})
export class RetailtransferacceptancemgqModule { }
