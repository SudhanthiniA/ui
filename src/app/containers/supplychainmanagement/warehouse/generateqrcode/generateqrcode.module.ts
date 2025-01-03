import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { GenerateqrcodeRoutingModule } from './generateqrcode-routing.module';
import { GenerateqrcodeComponent } from './generateqrcode.component';
import { AddgenerateqrcodeComponent } from './addgenerateqrcode/addgenerateqrcode.component';
import { ViewgenerateqrcodeComponent } from './viewgenerateqrcode/viewgenerateqrcode.component';

@NgModule({
  declarations: [GenerateqrcodeComponent, AddgenerateqrcodeComponent, ViewgenerateqrcodeComponent],
  imports: [
    CommonModule,
    SharedModule,
    GenerateqrcodeRoutingModule
  ]
})
export class GenerateqrcodeModule { }
