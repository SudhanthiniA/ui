import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { RetailtransferacceptancemgrRoutingModule } from './retailtransferacceptancemgr-routing.module';
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component';



@NgModule({
  declarations: [ListComponent, ViewComponent, AddComponent],
  imports: [
    CommonModule,
    SharedModule,
    RetailtransferacceptancemgrRoutingModule
  ]
})
export class RetailtransferacceptancemgrModule { }
