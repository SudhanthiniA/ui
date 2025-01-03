import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { ReturnfillingapplicationRoutingModule } from './returnfillingapplication-routing.module';
import { ReturnfillingapplicationComponent } from './returnfillingapplication.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { AcknowledgementComponent } from './acknowledgement/acknowledgement.component';
import { DeolistComponent } from './deolist/deolist.component';
import { DeoviewComponent } from './deoview/deoview.component';

@NgModule({
  declarations: [ReturnfillingapplicationComponent, AddComponent, ViewComponent, AcknowledgementComponent, DeolistComponent, DeoviewComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReturnfillingapplicationRoutingModule
  ]
})
export class ReturnfillingapplicationModule { }
