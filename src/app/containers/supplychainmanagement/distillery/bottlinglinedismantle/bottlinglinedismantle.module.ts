import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';


import { BottlinglinedismantleRoutingModule } from './bottlinglinedismantle-routing.module';
import { BottlinglinedismantleComponent } from './bottlinglinedismantle.component';
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component';

@NgModule({
  declarations: [BottlinglinedismantleComponent, ViewComponent, AddComponent],
  imports: [
    CommonModule,
    SharedModule,
    BottlinglinedismantleRoutingModule
  ]
})
export class BottlinglinedismantleModule { }
