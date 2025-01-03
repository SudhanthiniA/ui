import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { B13formRoutingModule} from './b13form-routing.module';
import { B13formComponent } from './b13form.component';
import { Addb13formComponent } from './addb13form/addb13form.component';
import { Viewb13formComponent } from './viewb13form/viewb13form.component';

@NgModule({
  declarations: [
    B13formComponent,
    Addb13formComponent,
    Viewb13formComponent
  ],
  imports: [
    CommonModule,
    B13formRoutingModule,
    SharedModule
  ]
})
export class B13formModule { }
