import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/theme/shared/shared.module';

import { SearchforcaseRoutingModule } from './searchforcase-routing.module';
import { SearchforcaseComponent } from './searchforcase.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [SearchforcaseComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    SearchforcaseRoutingModule
  ]
})
export class SearchforcaseModule { }
