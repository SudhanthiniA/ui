import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@appThemeShared/shared.module';
import { NewlineregistrationRoutingModule } from './newlineregistration-routing.module';
import { NewlineregistrationComponent } from './newlineregistration.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [NewlineregistrationComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
SharedModule,
NewlineregistrationRoutingModule

  ]
})
export class NewlineregistrationModule { }
