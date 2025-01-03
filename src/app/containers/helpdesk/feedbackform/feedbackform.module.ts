import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { FeedbackformComponent } from './feedbackform.component';
import { FeedbackformRoutingModule } from './feedbackform-routing.module';

@NgModule({
  declarations: [FeedbackformComponent],
  imports: [
    CommonModule,
    SharedModule,
    FeedbackformRoutingModule
  ]
})
export class FeedbackformModule { }
