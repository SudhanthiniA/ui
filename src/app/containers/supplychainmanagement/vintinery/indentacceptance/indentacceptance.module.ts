import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { SharedModule } from '@appThemeShared/shared.module';
import {IndentacceptanceRoutingModule} from './indentacceptance-routing.module';

@NgModule({
  declarations: [ ListComponent , ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    IndentacceptanceRoutingModule
  ]
})

export class IndentacceptanceModule { }
