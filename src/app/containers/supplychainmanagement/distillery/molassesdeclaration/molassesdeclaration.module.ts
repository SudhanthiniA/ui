import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { MolassesdeclarationRoutingModule } from './molassesdeclaration-routing.module';
import { MolassesdeclarationComponent } from './molassesdeclaration.component';
import { AddmolassesdeclarationComponent } from './addmolassesdeclaration/addmolassesdeclaration.component';
import { ViewmolassesdeclarationComponent } from './viewmolassesdeclaration/viewmolassesdeclaration.component';

@NgModule({
  declarations: [MolassesdeclarationComponent, AddmolassesdeclarationComponent, ViewmolassesdeclarationComponent],
  imports: [
    CommonModule,
    SharedModule,
    MolassesdeclarationRoutingModule
  ]
})
export class MolassesdeclarationModule { }
