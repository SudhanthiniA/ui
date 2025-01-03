import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';


import { B8formRoutingModule} from './b8form-routing.module';
import { B8formComponent } from './b8form.component';
import { Addb8formComponent } from './addb8form/addb8form.component';
import { Viewb8formComponent } from './viewb8form/viewb8form.component';


@NgModule({
  declarations: [B8formComponent, Addb8formComponent, Viewb8formComponent],
  imports: [
    CommonModule,
    B8formRoutingModule,
    SharedModule
  ]
})
export class B8formModule { }
