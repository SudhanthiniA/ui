import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { Mf4TpGenerationRoutingModule } from './mf4-tp-generation-routing.module';
import { Mf4TpGenerationComponent } from './mf4-tp-generation.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [Mf4TpGenerationComponent,AddComponent,ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    Mf4TpGenerationRoutingModule
  ]
})
export class Mf4TpGenerationModule { }
