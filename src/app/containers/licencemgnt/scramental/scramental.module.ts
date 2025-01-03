import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { ScramentalComponent } from './scramental.component';
import { ScramentalRoutingModule } from './scramental-routing.module';







@NgModule({
  declarations: [ScramentalComponent],
  imports: [
    CommonModule,
    ScramentalRoutingModule,
    SharedModule
  ]
})
export class ScramentalModule { }
