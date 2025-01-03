import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { Id14aRoutingModule } from './id14a-routing.module';
import { Viewid14aComponent } from './viewid14a/viewid14a.component';
import { Id14aComponent } from './id14a.component';

@NgModule({
  declarations: [Id14aComponent, Viewid14aComponent],
  imports: [
    CommonModule,
    SharedModule,
    Id14aRoutingModule
  ]
})
export class Id14aModule { }