import { NgModule } from '@angular/core';
import { UomRoutingModule } from './uom-routing.module';
import { UomComponent } from './uom.component';
import { AdduomComponent } from './adduom/adduom.component';
import { ViewuomComponent } from './viewuom/viewuom.component';
import { SharedModule } from '@appThemeShared/shared.module';

@NgModule({
  declarations: [
    UomComponent,
    AdduomComponent,
    ViewuomComponent
  ],
  imports: [
    UomRoutingModule,
    SharedModule
  ]
})
export class UomModule { }
