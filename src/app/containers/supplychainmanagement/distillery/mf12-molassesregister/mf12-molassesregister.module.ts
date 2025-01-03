import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Mf12MolassesregisterRoutingModule } from './mf12-molassesregister-routing.module';
import { Mf12MolassesregisterComponent } from './mf12-molassesregister.component';
import { SharedModule } from '@appThemeShared/shared.module';
import { AddeditMf12molassesregisterComponent } from './addedit-mf12molassesregister/addedit-mf12molassesregister.component';
import { ViewMf12molassesregisterComponent } from './view-mf12molassesregister/view-mf12molassesregister.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [Mf12MolassesregisterComponent, AddeditMf12molassesregisterComponent,  ViewMf12molassesregisterComponent],
  imports: [
    CommonModule,
    Mf12MolassesregisterRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class Mf12MolassesregisterModule { }
