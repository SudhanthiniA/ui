import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpiritTypeRoutingModule } from './spirit-type-routing.module';
import { SpiritTypeComponent } from './spirit-type.component';
import { SharedModule } from '@app/theme/shared/shared.module';
import { AddeditSpiritComponent } from './addedit-spirit/addedit-spirit.component';
import { ViewSpiritComponent } from './view-spirit/view-spirit.component';

@NgModule({
  declarations: [
    SpiritTypeComponent,
    AddeditSpiritComponent,
    ViewSpiritComponent
  ],
  imports: [
    CommonModule,
    SpiritTypeRoutingModule,
    SharedModule
  ]
})
export class SpiritTypeModule { }
