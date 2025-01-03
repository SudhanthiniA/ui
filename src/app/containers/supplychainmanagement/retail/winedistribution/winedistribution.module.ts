import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/theme/shared/shared.module';

import { WinedistributionRoutingModule } from './winedistribution-routing.module';
import { WinedistributionComponent } from './winedistribution.component';
import { AddwinedistributionComponent } from './addwinedistribution/addwinedistribution.component';
import { ViewwinedistributionComponent } from './viewwinedistribution/viewwinedistribution.component';


@NgModule({
  declarations: [WinedistributionComponent, AddwinedistributionComponent, ViewwinedistributionComponent],
  imports: [
    CommonModule,
    SharedModule,
    WinedistributionRoutingModule
  ]
})
export class WinedistributionModule { }
