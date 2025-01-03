import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';


import { AnswertypeRoutingModule } from './answertype-routing.module';
import { AnswertypeComponent } from './answertype.component';

@NgModule({
  declarations: [AnswertypeComponent],
  imports: [
    CommonModule,
    AnswertypeRoutingModule,
    SharedModule
  ]
})
export class AnswertypeModule { }
