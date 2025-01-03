import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { DrafttransportpassRoutingModule } from './drafttransportpass-routing.module';
import { DrafttransportpassComponent } from './drafttransportpass.component';
import { AdddrafttransportpassComponent } from './adddrafttransportpass/adddrafttransportpass.component';
import { ViewdrafttransportpassComponent } from './viewdrafttransportpass/viewdrafttransportpass.component';


@NgModule({
  declarations: [DrafttransportpassComponent, AdddrafttransportpassComponent, ViewdrafttransportpassComponent],
  imports: [
    CommonModule,
    SharedModule,
    DrafttransportpassRoutingModule
  ]
})
export class DrafttransportpassModule { }
