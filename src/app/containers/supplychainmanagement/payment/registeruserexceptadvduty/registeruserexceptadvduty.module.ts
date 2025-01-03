import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';


import { RegisteruserexceptadvdutyRoutingModule } from './registeruserexceptadvduty-routing.module';
import { RegisteruserexceptadvdutyComponent } from './registeruserexceptadvduty.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [RegisteruserexceptadvdutyComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    RegisteruserexceptadvdutyRoutingModule,
    SharedModule
  ]
})
export class RegisteruserexceptadvdutyModule { }
