



import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { IntimationforbrewplanRoutingModule } from './intimationforbrewplan-routing.module';
import { IntimationforbrewplanComponent } from './intimationforbrewplan.component';
// import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [IntimationforbrewplanComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    IntimationforbrewplanRoutingModule
  ]
})
export class IntimationforbrewplanModule { }
