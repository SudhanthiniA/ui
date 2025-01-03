import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { CommonModule } from '@angular/common';


import { CreateticketRoutingModule } from './createticket-routing.module';
import { CreateticketComponent } from './createticket.component';


@NgModule({
  declarations: [CreateticketComponent],
  imports: [
    CommonModule,
    CreateticketRoutingModule,
    SharedModule
  ]
})
export class CreateticketModule { }
