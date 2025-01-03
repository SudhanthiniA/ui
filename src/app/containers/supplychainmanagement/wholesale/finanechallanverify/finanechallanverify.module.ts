import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { FinanechallanverifyRoutingModule } from './finanechallanverify-routing.module';
import { FinanechallanverifyComponent } from './finanechallanverify.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [FinanechallanverifyComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    FinanechallanverifyRoutingModule 
  ]
})
export class FinanechallanverifyModule { }
