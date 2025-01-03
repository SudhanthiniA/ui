import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { DatePipe } from '@angular/common';
import { DistilleryRoutingModule } from './distillery-routing.module';

@NgModule({
  imports: [
    SharedModule,
    DistilleryRoutingModule
  ],
  providers: [DatePipe],
  declarations: [] 
})
export class DistilleryModule { }
