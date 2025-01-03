import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { DigitallocksRoutingModule } from './digitallocks-routing.module';
import { DigitallocksComponent } from './digitallocks.component';
import { AddeditdigitallocksComponent } from './addeditdigitallocks/addeditdigitallocks.component';
import { ViewdigitallocksComponent } from './viewdigitallocks/viewdigitallocks.component';

@NgModule({
  declarations: [
    DigitallocksComponent,
    AddeditdigitallocksComponent,
    ViewdigitallocksComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DigitallocksRoutingModule
  ]
})
export class DigitallocksModule { }
