import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { CommonModule } from '@angular/common';

import { NoanswerorcalldisconnectedRoutingModule } from './noanswerorcalldisconnected-routing.module';
import { NoanswerorcalldisconnectedComponent } from './noanswerorcalldisconnected.component';

@NgModule({
  declarations: [NoanswerorcalldisconnectedComponent],
  imports: [
    CommonModule,
    NoanswerorcalldisconnectedRoutingModule,
    SharedModule
  ]
})
export class NoanswerorcalldisconnectedModule { }
