import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/theme/shared/shared.module';

import { DailyabstractRoutingModule } from './dailyabstract-routing.module';
import { DailyabstractComponent } from './dailyabstract.component';
import { ViewabstractComponent } from './viewabstract/viewabstract.component';
import { AddabstractComponent } from './addabstract/addabstract.component';


@NgModule({
  declarations: [DailyabstractComponent, ViewabstractComponent, AddabstractComponent],
  imports: [
    CommonModule,
    SharedModule,
    DailyabstractRoutingModule
  ]
})
export class DailyabstractModule { }
