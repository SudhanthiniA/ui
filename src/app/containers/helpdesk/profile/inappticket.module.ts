import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { CommonModule } from '@angular/common';
import { InappticketRoutingModule } from './inappticket-routing.module';
import { InappticketComponent } from './inappticket.component';

@NgModule({
  declarations: [InappticketComponent,],
  imports: [
    CommonModule,
    InappticketRoutingModule,
    SharedModule
  ]
})
export class InappticketModule { }
