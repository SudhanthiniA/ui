import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { SamplereceiptackRoutingModule } from './samplereceiptack-routing.module';
import { SamplereceiptackComponent } from './samplereceiptack.component';
import { ViewComponent } from './view/view.component';



@NgModule({
  declarations: [SamplereceiptackComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    SamplereceiptackRoutingModule

  ]
})
export class SamplereceiptackModule { }
