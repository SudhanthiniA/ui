import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { IstnewRoutingModule } from './istnew-routing.module';
import { AddComponent } from './add/add.component';



@NgModule({
  declarations: [AddComponent],
  imports: [
    CommonModule,
    SharedModule,
    IstnewRoutingModule
  ]
})
export class IstnewModule { }
