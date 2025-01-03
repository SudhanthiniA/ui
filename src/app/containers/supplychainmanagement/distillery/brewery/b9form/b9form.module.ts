import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';


import { B9formRoutingModule} from './b9form-routing.module';
import { B9formComponent } from './b9form.component';
import { Addb9formComponent } from './addb9form/addb9form.component';
import { Viewb9formComponent } from './viewb9form/viewb9form.component';


@NgModule({
  declarations: [B9formComponent, Addb9formComponent, Viewb9formComponent],
  imports: [
    CommonModule,
    B9formRoutingModule,
    SharedModule
  ]
})
export class B9formModule { }
