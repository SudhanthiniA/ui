import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { TesttypeRoutingModule } from './testtype-routing.module';
import { TesttypeComponent } from './testtype.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [TesttypeComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    TesttypeRoutingModule
  ]
})
export class TesttypeModule { }
