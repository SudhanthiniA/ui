import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { CotOtdeclarationOtContinuationProcessComponent } from './cot-otdeclaration-ot-continuation-process.component';
import {CotDeclarationOtContinuationProcessRoutingModule} from './cot-declaration-ot-continuation-process-routing.module';



@NgModule({
  declarations: [AddComponent, ViewComponent, CotOtdeclarationOtContinuationProcessComponent],
  imports: [
    CommonModule,
    CotDeclarationOtContinuationProcessRoutingModule,
    SharedModule
  ]
})
export class CotDeclarationOtContinuationProcessModule { }
