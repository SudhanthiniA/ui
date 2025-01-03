import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { RoutemapRoutingModule } from './routemap-routing.module';
import { RoutemapComponent } from './routemap.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [ RoutemapComponent,
    AddComponent,
    ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    RoutemapRoutingModule
  ]
})
export class RoutemapModule { }
