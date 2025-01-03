import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';


import { DeclarationofbatchRoutingModule} from './declarationofbatch-routing.module';
import { DeclarationofbatchComponent } from './declarationofbatch.component';
import { AdddeclarationofbatchComponent } from './adddeclarationofbatch/adddeclarationofbatch.component';
import { ViewdeclarationofbatchComponent } from './viewdeclarationofbatch/viewdeclarationofbatch.component';



@NgModule({
  declarations: [DeclarationofbatchComponent, AdddeclarationofbatchComponent, ViewdeclarationofbatchComponent],
  imports: [
    CommonModule,
    DeclarationofbatchRoutingModule,
    SharedModule
  ]
})
export class DeclarationofbatchModule { }
