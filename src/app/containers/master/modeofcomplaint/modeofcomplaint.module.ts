import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModeofcomplaintRoutingModule } from './modeofcomplaint-routing.module';
import { ModeofcomplaintComponent } from './modeofcomplaint.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { SharedModule } from '@appThemeShared/shared.module';

@NgModule({
  declarations: [
    ModeofcomplaintComponent,
    AddComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ModeofcomplaintRoutingModule
  ]
})
export class ModeofcomplaintModule { }
