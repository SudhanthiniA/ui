import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { WsstockinnewRoutingModule } from './wsstockinnew-routing.module';
import { WsstockinnewComponent } from './wsstockinnew.component';
import { AddwsstockinnewComponent } from './addwsstockinnew/addwsstockinnew.component';
import { ViewwsstockinnewComponent } from './viewwsstockinnew/viewwsstockinnew.component';
import { QrscanwsstockinnewComponent } from './qrscanwsstockinnew/qrscanwsstockinnew.component';
import { PreviewdamagemissingComponent } from './previewdamagemissing/previewdamagemissing.component';


@NgModule({
  declarations: [WsstockinnewComponent, AddwsstockinnewComponent, ViewwsstockinnewComponent, QrscanwsstockinnewComponent, PreviewdamagemissingComponent],
  imports: [
    CommonModule,
    SharedModule,
    WsstockinnewRoutingModule,
    NgbModule
  ]
})
export class WsstockinnewModule { }
