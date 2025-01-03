import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';


import { ModulemasterRoutingModule } from './modulemaster-routing.module';
import { ModulemasterComponent } from './modulemaster.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component'; 

@NgModule({
  declarations: [ModulemasterComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    ModulemasterRoutingModule
  ]
})
export class ModulemasterModule { }
