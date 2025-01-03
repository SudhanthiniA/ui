import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { UploadlabelRoutingModule } from './uploadlabel-routing.module';
import { UploadlabelComponent } from './uploadlabel.component';
import { ScreenuploadlabelComponent } from './screenuploadlabel/screenuploadlabel.component';
import { ViewuploadlabelComponent } from './viewuploadlabel/viewuploadlabel.component';



@NgModule({
  declarations: [UploadlabelComponent, ScreenuploadlabelComponent, ViewuploadlabelComponent],
  imports: [
    CommonModule,
    SharedModule,
    UploadlabelRoutingModule
  ]
})
export class UploadlabelModule { }
