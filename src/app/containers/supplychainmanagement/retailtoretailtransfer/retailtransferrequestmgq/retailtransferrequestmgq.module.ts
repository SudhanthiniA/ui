import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { RetailtransferrequestmgqRoutingModule } from './retailtransferrequestmgq-routing.module';
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component';



@NgModule({
  declarations: [ListComponent, ViewComponent, AddComponent],
  imports: [
    CommonModule,
    SharedModule,
    RetailtransferrequestmgqRoutingModule
  ]
})
export class RetailtransferrequestmgqModule { }
