import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { ExcisecommissionerComponent } from './excisecommissioner.component';
import { ExcisecommissionerRoutingModule } from './excisecommissioner-routing.module';
import { EditexcisecommissionerComponent } from './editexcisecommissioner/editexcisecommissioner.component';




@NgModule({
  declarations: [ ExcisecommissionerComponent, EditexcisecommissionerComponent ],
  imports: [
    CommonModule,
    ExcisecommissionerRoutingModule,
    SharedModule
  ]
})
export class ExcisecommissionerModule { }
