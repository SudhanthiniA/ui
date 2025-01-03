import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { IndentmetallurgyRoutingModule } from './indentmetallurgy-routing.module';
import { IndentmetallurgyComponent } from './indentmetallurgy.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [IndentmetallurgyComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    IndentmetallurgyRoutingModule,
    SharedModule
  ]
})
export class IndentmetallurgyModule { }
