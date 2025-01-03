import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { ChallandoubleverifyRoutingModule } from './challandoubleverify-routing.module';
import { ChallandoubleverifyComponent } from './challandoubleverify.component';


@NgModule({
  declarations: [ChallandoubleverifyComponent],
  imports: [
    CommonModule,
    SharedModule,
    ChallandoubleverifyRoutingModule
  ]
})
export class ChallandoubleverifyModule { }
