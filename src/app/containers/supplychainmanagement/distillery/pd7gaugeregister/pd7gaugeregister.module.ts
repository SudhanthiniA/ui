import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { Pd7gaugeregisterRoutingModule } from './pd7gaugeregister-routing.module';
import { Pd7gaugeregisterComponent } from './pd7gaugeregister.component';
import { Addpd7gaugeregisterComponent } from './addpd7gaugeregister/addpd7gaugeregister.component';
import { Viewpd7gaugeregisterComponent } from './viewpd7gaugeregister/viewpd7gaugeregister.component';



@NgModule({
  declarations: [Pd7gaugeregisterComponent, Addpd7gaugeregisterComponent, Viewpd7gaugeregisterComponent],
  imports: [
    CommonModule,
    Pd7gaugeregisterRoutingModule,
    SharedModule
  ]
})
export class Pd7gaugeregisterModule { }
