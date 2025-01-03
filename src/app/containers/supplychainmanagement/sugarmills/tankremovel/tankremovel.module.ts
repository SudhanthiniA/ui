import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';


import { TankremovelRoutingModule } from './tankremovel-routing.module';
import { TankremovelComponent } from './tankremovel.component';
import { TankremovelviewComponent } from './tankremovelview/tankremovelview.component';


@NgModule({
  declarations: [TankremovelComponent, TankremovelviewComponent],
  imports: [
    CommonModule,
    TankremovelRoutingModule,SharedModule
  ]
})
export class TankremovelModule { }
