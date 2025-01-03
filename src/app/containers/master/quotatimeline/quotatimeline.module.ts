import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { QuotatimelineRoutingModule } from './quotatimeline-routing.module';
import { QuotatimelineComponent } from './quotatimeline.component';
import { AddquotatimelineComponent } from './addquotatimeline/addquotatimeline.component';
import { ViewquotatimelineComponent } from './viewquotatimeline/viewquotatimeline.component';

@NgModule({
  declarations: [
    QuotatimelineComponent,
    AddquotatimelineComponent,
    ViewquotatimelineComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    QuotatimelineRoutingModule
  ]
})
export class QuotatimelineModule { }
