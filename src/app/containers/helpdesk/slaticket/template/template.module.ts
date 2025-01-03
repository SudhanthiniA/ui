import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';
import { TemplateComponent } from './template.component';

import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [TemplateComponent, AddComponent, ViewComponent, DashboardComponent],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    SharedModule
    
  ]
})
export class TemplateModule { }
