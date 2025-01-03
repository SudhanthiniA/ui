import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { MwindentacceptanceRoutingModule } from './mwindentacceptance-routing.module';
import { MwindentacceptanceComponent } from './mwindentacceptance.component';
import { ViewmwindentacceptanceComponent } from './viewmwindentacceptance/viewmwindentacceptance.component';

@NgModule({
  declarations: [MwindentacceptanceComponent, ViewmwindentacceptanceComponent],
  imports: [
    CommonModule,
    SharedModule,
    MwindentacceptanceRoutingModule
  ]
})
export class MwindentacceptanceModule { }
