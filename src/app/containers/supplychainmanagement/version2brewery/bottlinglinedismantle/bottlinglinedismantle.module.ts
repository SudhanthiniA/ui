import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { BottlinglinedismantleRoutingModule } from './bottlinglinedismantle-routing.module';
import { BottlinglinedismantleComponent } from './bottlinglinedismantle.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [BottlinglinedismantleComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    BottlinglinedismantleRoutingModule
  ]
})
export class BottlinglinedismantleModule { }
