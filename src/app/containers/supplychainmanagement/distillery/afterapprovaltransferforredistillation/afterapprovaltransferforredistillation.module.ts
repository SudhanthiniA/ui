import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { AfterapprovaltransferforredistillationRoutingModule } from './afterapprovaltransferforredistillation-routing.module';
import { AfterapprovaltransferforredistillationComponent } from './afterapprovaltransferforredistillation.component';
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component';

@NgModule({
  declarations: [AfterapprovaltransferforredistillationComponent, ViewComponent, AddComponent],
  imports: [
    CommonModule,
    SharedModule,
    AfterapprovaltransferforredistillationRoutingModule
  ]
})
export class AfterapprovaltransferforredistillationModule { }
