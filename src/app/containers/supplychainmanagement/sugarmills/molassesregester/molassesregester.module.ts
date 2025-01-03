import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MolassesregesterRoutingModule } from './molassesregester-routing.module';
import { MolassesregesterComponent } from './molassesregester.component';
import { SharedModule } from '@appThemeShared/shared.module';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddregesterComponent } from './addregester/addregester.component';
import { EditregesterComponent } from './editregester/editregester.component';


@NgModule({
  declarations: [MolassesregesterComponent, AddregesterComponent, EditregesterComponent],
  imports: [
    CommonModule,
    MolassesregesterRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class MolassesregesterModule { }
