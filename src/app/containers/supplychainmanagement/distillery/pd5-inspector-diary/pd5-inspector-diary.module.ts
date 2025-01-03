import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Pd5InspectorDiaryRoutingModule } from './pd5-inspector-diary-routing.module';
import { Pd5InspectorDiaryComponent } from './pd5-inspector-diary.component';
import { Pd5AddeditComponent } from './pd5-addedit/pd5-addedit.component';
import { Pd5ViewComponent } from './pd5-view/pd5-view.component';
import { SharedModule } from '@app/theme/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [Pd5InspectorDiaryComponent, Pd5AddeditComponent, Pd5ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    NgbModule,
    Pd5InspectorDiaryRoutingModule
  ]
})
export class Pd5InspectorDiaryModule { }
