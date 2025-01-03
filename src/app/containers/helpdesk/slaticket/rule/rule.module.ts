import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { CommonModule } from '@angular/common';

import { RuleRoutingModule } from './rule-routing.module';
import { RuleComponent } from './rule.component';

import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [AddComponent, ViewComponent, RuleComponent],
  imports: [
    CommonModule,
    RuleRoutingModule,
    SharedModule
    
  ]
})
export class RuleModule { }
