import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { ExcisecommissionerRoutingModule } from './excisecommissioner-routing.module';
import { ExcisecommissionerComponent } from './excisecommissioner.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [ViewComponent, ExcisecommissionerComponent],
  imports: [
    CommonModule,
    SharedModule,
    ExcisecommissionerRoutingModule
  ]
})
export class ExcisecommissionerModule { }
