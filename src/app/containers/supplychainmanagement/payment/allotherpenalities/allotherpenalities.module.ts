import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';


import { AllotherpenalitiesRoutingModule } from './allotherpenalities-routing.module';
import { AllotherpenalitiesComponent } from './allotherpenalities.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [AllotherpenalitiesComponent, AddComponent, EditComponent, ViewComponent],
  imports: [
    CommonModule,
    AllotherpenalitiesRoutingModule,
    SharedModule
  ]
})
export class AllotherpenalitiesModule { }
