import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';


import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { OtdeclarationotcontinousprocessComponent } from './otdeclaration-otcontinousprocess.component';
import {OtdeclarationotcontinousprocessRoutingModule} from './otdeclaration-otcontinousprocess-routing.module';



@NgModule({
  declarations: [AddComponent, ViewComponent, OtdeclarationotcontinousprocessComponent],
  imports: [
    CommonModule,
    OtdeclarationotcontinousprocessRoutingModule,
    SharedModule
  ]
})
export class OtdeclarationotcontinousprocessModule { }
