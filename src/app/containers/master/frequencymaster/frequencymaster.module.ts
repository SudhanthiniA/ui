import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';


import { FrequencymasterRoutingModule } from './frequencymaster-routing.module';
import { FrequencymasterComponent } from './frequencymaster.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [FrequencymasterComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    FrequencymasterRoutingModule
  ]
})
export class FrequencymasterModule { }
