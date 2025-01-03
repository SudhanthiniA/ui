import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';


import { B11formRoutingModule} from './b11form-routing.module';
import { B11formComponent } from './b11form.component';
import { Addb11formComponent } from './addb11form/addb11form.component';
import { Viewb11formComponent } from './viewb11form/viewb11form.component';


@NgModule({
  declarations: [B11formComponent, Addb11formComponent, Viewb11formComponent],
  imports: [
    CommonModule,
    B11formRoutingModule,
    SharedModule
  ]
})
export class B11formModule { }
