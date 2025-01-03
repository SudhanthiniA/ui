import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';


import { DeclarationforyearRoutingModule} from './declarationforyear-routing.module';
import { DeclarationforyearComponent } from './declarationforyear.component';
import { AdddeclarationforyearComponent } from './adddeclarationforyear/adddeclarationforyear.component';
import { ViewdeclarationforyearComponent } from './viewdeclarationforyear/viewdeclarationforyear.component';



@NgModule({
  declarations: [DeclarationforyearComponent, AdddeclarationforyearComponent, ViewdeclarationforyearComponent],
  imports: [
    CommonModule,
    DeclarationforyearRoutingModule,
    SharedModule
  ]
})
export class DeclarationforyearModule { }
