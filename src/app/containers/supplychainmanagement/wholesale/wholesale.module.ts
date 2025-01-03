import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { DatePipe } from '@angular/common';
import { WholesaleRoutingModule } from './wholesale-routing.module';
// import { EditdispatchComponent } from './csd-dispatch/editdispatch/editdispatch.component';
// import { CsdoutsideupregistrationComponent } from './csdoutsideupregistration/csdoutsideupregistration.component';


@NgModule({
  imports: [
    SharedModule,
    WholesaleRoutingModule
  ],
  providers: [DatePipe],
  declarations: []
})
export class WholesaleModule { }
