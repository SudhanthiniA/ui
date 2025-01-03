import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { SpiritimportorderforeclosureRoutingModule } from './spiritimportorderforeclosure-routing.module';
import { SpiritimportorderforeclosureComponent } from './spiritimportorderforeclosure.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [ SpiritimportorderforeclosureComponent,
   AddComponent,
   ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    SpiritimportorderforeclosureRoutingModule
  ]
})
export class SpiritimportorderforeclosureModule { }
