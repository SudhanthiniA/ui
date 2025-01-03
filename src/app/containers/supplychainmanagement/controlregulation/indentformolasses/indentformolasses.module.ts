import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';


import { IndentformolassesRoutingModule } from './indentformolasses-routing.module';
import { IndentformolassesComponent } from './indentformolasses.component';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [IndentformolassesComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    IndentformolassesRoutingModule
  ]
})
export class IndentformolassesModule { }
