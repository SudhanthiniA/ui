import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { MwqrcodeuploadRoutingModule } from './mwqrcodeupload-routing.module';
import { MwqrcodeuploadComponent } from './mwqrcodeupload.component';

@NgModule({
  declarations: [MwqrcodeuploadComponent],
  imports: [
    CommonModule,
    SharedModule,
    MwqrcodeuploadRoutingModule
  ]
})
export class MwqrcodeuploadModule { }
