import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import {ColdstoragetransferRoutingModule} from './coldstoragetransfer-routing.module';
import { ColdstoragetransferComponent } from './coldstoragetransfer.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';



@NgModule({
  declarations: [ColdstoragetransferComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    ColdstoragetransferRoutingModule
  ]
})
export class ColdstoragetransferModule { }
