import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';


import { DispatchtotraverwithindentComponent } from './dispatchtotraverwithindent.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import {DispatchtotraverwithindentRoutingModule} from './dispatchtotraverwithindent-routing.module';


@NgModule({
  declarations: [DispatchtotraverwithindentComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    DispatchtotraverwithindentRoutingModule 
  ]
})
export class DispatchtotraverwithindentModule { }
