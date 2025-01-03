import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/theme/shared/shared.module';

import { BottlingproplannewRoutingModule } from './bottlingproplannew-routing.module';
import { BottlingproplannewComponent } from './bottlingproplannew.component';
import { AddbottlingproplannewComponent } from './addbottlingproplannew/addbottlingproplannew.component';
import { ViewbottlingproplannewComponent } from './viewbottlingproplannew/viewbottlingproplannew.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

@NgModule({
  declarations: [BottlingproplannewComponent, AddbottlingproplannewComponent, ViewbottlingproplannewComponent],
  imports: [
    CommonModule,
    BottlingproplannewRoutingModule,
    SharedModule,OwlDateTimeModule,OwlNativeDateTimeModule
  ]
})
export class BottlingproplannewModule { }
