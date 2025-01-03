
import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { HelpDeskMasterPageRoutingModule } from './helpdesk-routing.module';


@NgModule({
  imports: [
    SharedModule,
    HelpDeskMasterPageRoutingModule,
  ],
  declarations: []
})
export class HelpDeskMastersModule { }
