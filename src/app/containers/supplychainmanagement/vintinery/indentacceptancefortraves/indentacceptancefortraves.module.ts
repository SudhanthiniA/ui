import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { IndentacceptancefortravesComponent } from './indentacceptancefortraves.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';
import {IndentacceptancefortravesRoutingModule} from './indentacceptancefortraves-routing.module';



@NgModule({
  declarations: [IndentacceptancefortravesComponent, EditComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    IndentacceptancefortravesRoutingModule
  ]
})
export class IndentacceptancefortravesModule { }
