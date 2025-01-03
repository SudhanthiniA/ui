import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StageRoutingModule } from './stage-routing.module';
import { StageComponent } from './stage.component';
import { AddeditstageComponent } from './addeditstage/addeditstage.component';
import { ViewstageComponent } from './viewstage/viewstage.component';
import { SharedModule } from '@appThemeShared/shared.module';

@NgModule({
  declarations: [
    StageComponent,
    AddeditstageComponent,
    ViewstageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    StageRoutingModule
  ]
})
export class StageModule { }
