import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { ItrRoutingModule } from './itr-routing.module';
import { ItrComponent } from './itr.component';
import { ViewitrComponent } from './viewitr/viewitr.component';



@NgModule({
  declarations: [ItrComponent, ViewitrComponent,],
  imports: [
    CommonModule,
    SharedModule,
    ItrRoutingModule
  ]
})
export class ItrModule { }
