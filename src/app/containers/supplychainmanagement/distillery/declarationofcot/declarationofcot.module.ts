import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { DeclarationofcotRoutingModule } from './declarationofcot-routing.module';
import { DeclarationofcotComponent } from './declarationofcot.component';
import { AdddeclarationofcotComponent } from './adddeclarationofcot/adddeclarationofcot.component';
import { ViewdeclarationofcotComponent } from './viewdeclarationofcot/viewdeclarationofcot.component';


@NgModule({
  declarations: [DeclarationofcotComponent, AdddeclarationofcotComponent, ViewdeclarationofcotComponent],
  imports: [
    CommonModule,
    SharedModule,
    DeclarationofcotRoutingModule
  ]
})
export class DeclarationofcotModule { }
