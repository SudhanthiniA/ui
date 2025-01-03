import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { BoxingprocessRoutingModule } from './boxingprocess-routing.module';
import { BoxingprocessComponent } from './boxingprocess.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [BoxingprocessComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,   
    SharedModule,
    NgbModule,
    BoxingprocessRoutingModule
  ]
})
export class BoxingprocessModule { }
