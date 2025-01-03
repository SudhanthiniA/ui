import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { DeclarationofcotnewRoutingModule } from './declarationofcotnew-routing.module';
import { DeclarationofcotnewComponent } from './declarationofcotnew.component';
import { AdddeclarationofcotnewComponent } from './adddeclarationofcotnew/adddeclarationofcotnew.component';
import { ViewdeclarationofcotnewComponent } from './viewdeclarationofcotnew/viewdeclarationofcotnew.component';

@NgModule({
  declarations: [DeclarationofcotnewComponent, AdddeclarationofcotnewComponent, ViewdeclarationofcotnewComponent],
  imports: [
    CommonModule,
    DeclarationofcotnewRoutingModule,
    SharedModule
  ]
})
export class DeclarationofcotnewModule { }
