import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view/view.component';
import { SharedModule } from '@appThemeShared/shared.module';
import { RenewalRoutingModule } from './renewal-routing.module';
import { RenewalComponent } from './renewal.component';


@NgModule({
  declarations: [ViewComponent,RenewalComponent],
  imports: [
    CommonModule,
    SharedModule,
    RenewalRoutingModule
  ]
})
export class RenewalModule { }
