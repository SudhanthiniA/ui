import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { ViewComponent } from './view/view.component';
import { Id3jun22Component } from './id3jun22.component';
import { Id3jun22RoutingModule } from './id3jun22-routing.module';


@NgModule({
  declarations: [ Id3jun22Component ,ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    Id3jun22RoutingModule
  ]
})
export class Id3jun22Module { }
