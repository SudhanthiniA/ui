import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlendingproductionplanRoutingModule } from './blendingproductionplan-routing.module';

import { AddblendingproductionplanComponent } from './addblendingproductionplan/addblendingproductionplan.component';
import { ViewblendingproductionplanComponent } from './viewblendingproductionplan/viewblendingproductionplan.component';
import { BlendingproductionplanComponent } from './blendingproductionplan.component';
import { SharedModule } from '@appThemeShared/shared.module';;
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [AddblendingproductionplanComponent, ViewblendingproductionplanComponent,  BlendingproductionplanComponent],
  imports: [
    CommonModule,
    BlendingproductionplanRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class BlendingproductionplanModule { }
