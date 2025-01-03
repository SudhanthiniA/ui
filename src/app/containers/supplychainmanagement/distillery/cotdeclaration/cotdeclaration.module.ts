import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';


import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { CotdeclarationComponent } from './cotdeclaration.component';
import {CotdeclarationRoutingModule} from './cotdeclaration-routing.module';



@NgModule({
  declarations: [AddComponent, ViewComponent, CotdeclarationComponent],
  imports: [
    CommonModule,
    CotdeclarationRoutingModule,
    SharedModule
  ]
})
export class CotdeclarationModule { }
