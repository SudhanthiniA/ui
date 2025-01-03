import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';


import { B3formRoutingModule} from './b3form-routing.module';
import { B3formComponent } from './b3form.component';
import { Addb3formComponent } from './addb3form/addb3form.component';
import { Viewb3formComponent } from './viewb3form/viewb3form.component';


@NgModule({
  declarations: [B3formComponent, Addb3formComponent, Viewb3formComponent],
  imports: [
    CommonModule,
    B3formRoutingModule,
    SharedModule
  ]
})
export class B3formModule { }
