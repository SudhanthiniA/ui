import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';


import { TestproductRoutingModule } from './testproduct-routing.module';
import { TestproductComponent } from './testproduct.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [TestproductComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    TestproductRoutingModule,
    SharedModule
  ]
})
export class TestproductModule { }
