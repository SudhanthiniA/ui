
import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { GrievancePageRoutingModule } from './grievance-routing.module';



@NgModule({
  imports: [
    SharedModule,
    GrievancePageRoutingModule,
  ],
  declarations: []
})
export class GrievanceModule { }
