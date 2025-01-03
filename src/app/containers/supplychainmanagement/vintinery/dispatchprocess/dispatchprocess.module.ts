import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { DatePipe } from '@angular/common';
import { DispatchprocessRoutingModule } from './dispatchprocess-routing.module';

@NgModule({
  providers: [DatePipe],
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    DispatchprocessRoutingModule
  ]
})
export class DispatchprocessModule { }
