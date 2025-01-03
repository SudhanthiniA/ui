import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';

import { LabeldesignRoutingModule } from './labeldesign-routing.module';
import { LabeldesignComponent } from './labeldesign.component';
import { AddlabeldesignComponent } from './addlabeldesign/addlabeldesign.component';

@NgModule({
  declarations: [
    LabeldesignComponent,
    AddlabeldesignComponent
  ],
  imports: [
    LabeldesignRoutingModule,
    SharedModule
  ]
})
export class LabeldesignModule { }
