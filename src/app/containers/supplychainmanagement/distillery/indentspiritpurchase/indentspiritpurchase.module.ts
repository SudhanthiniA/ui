import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndentspiritpurchaseRoutingModule } from './indentspiritpurchase-routing.module';

import { AddindentspiritpurchaseComponent } from './addindentspiritpurchase/addindentspiritpurchase.component';
import { ViewindentspiritpurchaseComponent } from './viewindentspiritpurchase/viewindentspiritpurchase.component';
import { IndentspiritpurchaseComponent } from './indentspiritpurchase.component';
import { SharedModule } from '@appThemeShared/shared.module';;
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [AddindentspiritpurchaseComponent, ViewindentspiritpurchaseComponent,  IndentspiritpurchaseComponent],
  imports: [
    CommonModule,
    IndentspiritpurchaseRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class IndentspiritpurchaseModule { }
