import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { DatePipe } from '@angular/common';

import { CustombondRoutingModule } from './custombond-routing.module';

// import { Clb5declarationComponent } from './clb5declaration/clb5declaration.component';
// import { ExportpermitTpAckComponent } from './exportpermit-tp-ack/exportpermit-tp-ack.component';


@NgModule({
  imports: [
    SharedModule,
    CustombondRoutingModule
  ],
  providers: [DatePipe],
  declarations: []

})
export class CustombondModule { }
