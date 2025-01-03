import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { ViewingmonitoringverificationRoutingModule } from './viewingmonitoringverification-routing.module';
import { ViewingmonitoringverificationComponent } from './viewingmonitoringverification.component';
import { AddviewingmonitoringverificationComponent } from './addviewingmonitoringverification/addviewingmonitoringverification.component';
import { ViewviewingmonitoringverificationComponent } from './viewviewingmonitoringverification/viewviewingmonitoringverification.component';



@NgModule({
  declarations: [ViewingmonitoringverificationComponent, AddviewingmonitoringverificationComponent, ViewviewingmonitoringverificationComponent],
  imports: [
    CommonModule,
    SharedModule,
    ViewingmonitoringverificationRoutingModule
  ]
})
export class ViewingmonitoringverificationModule { }
