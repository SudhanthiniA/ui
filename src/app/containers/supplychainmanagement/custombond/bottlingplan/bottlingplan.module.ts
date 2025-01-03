import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { BottlingplanRoutingModule } from './bottlingplan-routing.module';
import { BottlingplanComponent } from './bottlingplan.component';
import { AddbottlingplanComponent } from './addbottlingplan/addbottlingplan.component';
import { ViewbottlingplanComponent } from './viewbottlingplan/viewbottlingplan.component';

@NgModule({
  declarations: [BottlingplanComponent, AddbottlingplanComponent, ViewbottlingplanComponent],
  imports: [
    CommonModule,
    SharedModule,
    BottlingplanRoutingModule
  ]
})
export class BottlingplanModule { }
