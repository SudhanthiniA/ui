import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';


import { BottlinglineoverviewRoutingModule } from './bottlinglineoverview-routing.module';
import { BottlinglineoverviewComponent } from './bottlinglineoverview.component';
import { ViewComponent } from './view/view.component';
import { AddbottlingplanComponent } from './add/addbottlingplan.component';

@NgModule({
  declarations: [BottlinglineoverviewComponent, ViewComponent , AddbottlingplanComponent],
  imports: [
    CommonModule,
    SharedModule,
    BottlinglineoverviewRoutingModule
  ]
})
export class BottlinglineoverviewModule { }
