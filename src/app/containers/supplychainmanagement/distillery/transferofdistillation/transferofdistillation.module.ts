import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { TransferofdistillationRoutingModule } from './transferofdistillation-routing.module';
import { TransferofdistillationComponent } from './transferofdistillation.component';
import { AddedittransferofdistillationComponent } from './addedittransferofdistillation/addedittransferofdistillation.component';
import { ViewtransferofdistillationComponent } from './viewtransferofdistillation/viewtransferofdistillation.component';


@NgModule({
  declarations: [ TransferofdistillationComponent, AddedittransferofdistillationComponent, ViewtransferofdistillationComponent],
  imports: [
    CommonModule,
    SharedModule,
    TransferofdistillationRoutingModule,
    NgbModule
  ]
})
export class TransferofdistillationModule { }
