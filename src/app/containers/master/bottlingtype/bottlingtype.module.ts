import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BottlingtypeComponent } from './bottlingtype.component';
import { AddbottlingtypeComponent } from './addbottlingtype/addbottlingtype.component';
import { ViewbottlingtypeComponent } from './viewbottlingtype/viewbottlingtype.component';
import { BottlingtypeRoutingModule } from './bottlingtype-routing.module';
import { SharedModule } from '@appThemeShared/shared.module';


@NgModule({
  declarations: [BottlingtypeComponent, AddbottlingtypeComponent, ViewbottlingtypeComponent],
  imports: [
    CommonModule,
    SharedModule,
    BottlingtypeRoutingModule
  ]
})
export class BottlingtypeModule { }
