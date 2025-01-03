import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';


import { B15formRoutingModule} from './b15form-routing.module';
import { B15formComponent } from './b15form.component';
import { Addb15formComponent } from './addb15form/addb15form.component';
import { Viewb15formComponent } from './viewb15form/viewb15form.component';


@NgModule({
  declarations: [B15formComponent, Addb15formComponent, Viewb15formComponent],
  imports: [
    CommonModule,
    B15formRoutingModule,
    SharedModule
  ]
})
export class B15formModule { }
