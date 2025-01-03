import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { IndentrequestforlabelRoutingModule } from './indentrequestforlabel-routing.module';
import { IndentrequestforlabelComponent } from './indentrequestforlabel.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [IndentrequestforlabelComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    IndentrequestforlabelRoutingModule
  ]
})
export class IndentrequestforlabelModule { }
