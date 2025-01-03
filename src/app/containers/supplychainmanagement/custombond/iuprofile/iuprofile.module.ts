import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { IuprofileComponent } from './iuprofile.component';
import { ViewiuprofileComponent } from './viewiuprofile/viewiuprofile.component';
import { IuprofileRoutingModule } from './iuprofile-routing.module';

@NgModule({
  declarations: [IuprofileComponent, ViewiuprofileComponent],
  imports: [
    CommonModule,
    SharedModule,
    IuprofileRoutingModule
  ]
})
export class IuprofileModule { }
