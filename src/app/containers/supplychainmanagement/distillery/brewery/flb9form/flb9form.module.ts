import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';


import { Flb9formRoutingModule} from './flb9form-routing.module';
import { Flb9formComponent } from './flb9form.component';
import { Addflb9formComponent } from './addflb9form/addflb9form.component';
import { Viewflb9formComponent } from './viewflb9form/viewflb9form.component';



@NgModule({
  declarations: [Flb9formComponent, Addflb9formComponent, Viewflb9formComponent],
  imports: [
    CommonModule,
    Flb9formRoutingModule,
    SharedModule
  ]
})
export class Flb9formModule { }
