import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';


import { B16formRoutingModule} from './b16form-routing.module';
import { B16formComponent } from './b16form.component';
import { Addb16formComponent } from './addb16form/addb16form.component';
import { Viewb16formComponent } from './viewb16form/viewb16form.component';


@NgModule({
  declarations: [B16formComponent, Addb16formComponent, Viewb16formComponent],
  imports: [
    CommonModule,
    B16formRoutingModule,
    SharedModule
  ]
})
export class B16formModule { }
