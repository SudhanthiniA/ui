import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { PrintqrcodeComponent } from './printqrcode.component';
import { AddprintqrcodeComponent } from './addprintqrcode/addprintqrcode.component';
import { ViewprintqrcodeComponent } from './viewprintqrcode/viewprintqrcode.component'; 
import { PrintqrcodeRoutingModule } from './printqrcode-routing.module';

@NgModule({
  declarations: [PrintqrcodeComponent, AddprintqrcodeComponent, ViewprintqrcodeComponent],
  imports: [
    CommonModule,
    SharedModule,
    PrintqrcodeRoutingModule
  ]
})
export class PrintqrcodeModule { }
