import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { TransferfromstoragetobottlingComponent } from './transferfromstoragetobottling.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import {TransferfromstoragetobottlingRoutingModule} from './transferfromstoragetobottling-routing.module';



@NgModule({
  declarations: [TransferfromstoragetobottlingComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    TransferfromstoragetobottlingRoutingModule,
    SharedModule
  ]
})
export class TransferfromstoragetobottlingModule { }
