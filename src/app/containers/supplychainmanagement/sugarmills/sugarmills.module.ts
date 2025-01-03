import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { DatePipe } from '@angular/common';
import { SugarmillsRoutingModule } from './sugarmills-routing.module';




@NgModule({
  imports: [
    SharedModule,
    SugarmillsRoutingModule
  ],
  providers: [DatePipe],
  declarations: []
})
export class SugarmillsModule { }
