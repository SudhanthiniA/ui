import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';


import { B7formRoutingModule} from './b7form-routing.module';
import { B7formComponent } from './b7form.component';
import { Addb7formComponent } from './addb7form/addb7form.component';
import { Viewb7formComponent } from './viewb7form/viewb7form.component';


@NgModule({
  declarations: [B7formComponent, Addb7formComponent, Viewb7formComponent],
  imports: [
    CommonModule,
    B7formRoutingModule,
    SharedModule
  ]
})
export class B7formModule { }
