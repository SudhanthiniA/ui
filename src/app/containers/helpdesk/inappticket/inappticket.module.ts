import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { CommonModule } from '@angular/common';
import { InappticketRoutingModule } from './inappticket-routing.module';
import { InappticketComponent } from './inappticket.component';
import { AddinappticketComponent } from './addinappticket/addinappticket.component';
import { ViewinappticketComponent } from './viewinappticket/viewinappticket.component';

@NgModule({
  declarations: [InappticketComponent, AddinappticketComponent, ViewinappticketComponent],
  imports: [
    CommonModule,
    InappticketRoutingModule,
    SharedModule
  ]
})
export class InappticketModule { }
