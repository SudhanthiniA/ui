import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { OtprocessRoutingModule } from './otprocess-routing.module';
import { OtprocessComponent } from './otprocess.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [
    OtprocessComponent,
    AddComponent,
    ViewComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    OtprocessRoutingModule
  ]
})
export class OtprocessModule { }
