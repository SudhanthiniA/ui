import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { DeclarationofproplanofbeerRoutingModule } from './declarationofproplanofbeer-routing.module';

import { DeclarationofproplanofbeerComponent } from './declarationofproplanofbeer.component';
import { AdddeclarationofproplanofbeerComponent } from './adddeclarationofproplanofbeer/adddeclarationofproplanofbeer.component';
import { ViewdeclarationofproplanofbeerComponent } from './viewdeclarationofproplanofbeer/viewdeclarationofproplanofbeer.component';

@NgModule({
  declarations: [DeclarationofproplanofbeerComponent, AdddeclarationofproplanofbeerComponent, ViewdeclarationofproplanofbeerComponent],
  imports: [
    CommonModule,
    SharedModule,
    DeclarationofproplanofbeerRoutingModule
  ]
})
export class DeclarationofproplanofbeerModule { }
