import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { GoodstypemasterRoutingModule } from './goodstypemaster-routing.module';
import { GoodstypemasterComponent } from './goodstypemaster.component';
import { AddgoodstypemasterComponent } from './addgoodstypemaster/addgoodstypemaster.component';
import { ViewgoodstypemasterComponent } from './viewgoodstypemaster/viewgoodstypemaster.component';

@NgModule({
  declarations: [GoodstypemasterComponent, AddgoodstypemasterComponent, ViewgoodstypemasterComponent],
  imports: [
    CommonModule,
    GoodstypemasterRoutingModule,
    SharedModule
  ]
})
export class GoodstypemasterModule { }
