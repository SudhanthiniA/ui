import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { EalbottlingplanComponent } from './ealbottlingplan.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

import {EalbottlingplanRoutingModule} from './ealbottlingplan-routing.module';

@NgModule({
  declarations: [EalbottlingplanComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    EalbottlingplanRoutingModule

  ]
})
export class EalbottlingplanModule { }
