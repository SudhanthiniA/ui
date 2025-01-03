import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { SurveyformComponent } from './surveyform.component';
import { SurveyformRoutingModule } from './surveyform-routing.module';

@NgModule({
  declarations: [SurveyformComponent],
  imports: [
    CommonModule,
    SharedModule,
    SurveyformRoutingModule
  ]
})
export class SurveyformModule { }
