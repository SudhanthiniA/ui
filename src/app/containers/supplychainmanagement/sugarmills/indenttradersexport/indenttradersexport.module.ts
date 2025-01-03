import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndenttradersexportRoutingModule } from './indenttradersexport-routing.module';
import { IndenttradersexportComponent } from './indenttradersexport.component';
import { SharedModule } from '@appThemeShared/shared.module';
import { ViewindenttradersexportComponent } from './viewindenttradersexport/viewindenttradersexport.component';

@NgModule({
  declarations: [
    IndenttradersexportComponent,
    ViewindenttradersexportComponent
  ],
  imports: [
    CommonModule,
    IndenttradersexportRoutingModule,
    SharedModule
  ]
})
export class IndenttradersexportModule { }
