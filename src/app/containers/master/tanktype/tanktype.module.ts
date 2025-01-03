import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TanktypeRoutingModule } from './tanktype-routing.module';
import { TanktypeComponent } from './tanktype.component';
import { AddedittanktypeComponent } from './addedittanktype/addedittanktype.component';
import { ViewtanktypeComponent } from './viewtanktype/viewtanktype.component';
import { SharedModule } from '@appThemeShared/shared.module';

@NgModule({
  declarations: [
    TanktypeComponent,
    AddedittanktypeComponent,
    ViewtanktypeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TanktypeRoutingModule
  ]
})
export class TanktypeModule { }
