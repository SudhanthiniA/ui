import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { DeclarationofplanRoutingModule } from './declarationofplan-routing.module';
import { DeclarationofplanComponent } from './declarationofplan.component';
import { AdddeclarationofplanComponent } from './adddeclarationofplan/adddeclarationofplan.component';
import { ViewdeclarationofplanComponent } from './viewdeclarationofplan/viewdeclarationofplan.component';
import { MappedComponent } from './mapped/mapped.component';



@NgModule({
  declarations: [DeclarationofplanComponent, AdddeclarationofplanComponent, ViewdeclarationofplanComponent, MappedComponent],
  imports: [
    CommonModule,
    SharedModule,
    DeclarationofplanRoutingModule
  ]
})
export class DeclarationofplanModule { }
