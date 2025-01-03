import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { DatePipe } from '@angular/common';
import { Version2breweryRoutingModule } from './version2brewery-routing.module';



@NgModule({
  
  imports: [
    SharedModule,
    Version2breweryRoutingModule
  ],
  providers: [DatePipe],
  declarations: [],
  // declarations: [],
})
export class Version2breweryModule { }
