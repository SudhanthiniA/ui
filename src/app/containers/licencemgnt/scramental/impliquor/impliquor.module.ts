import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { ImpliquorRoutingModule } from './impliquor-routing.module';
import { ViewimpliquorComponent } from './viewimpliquor/viewimpliquor.component';
import { ImpliquorComponent } from './impliquor.component';



@NgModule({
  declarations: [ViewimpliquorComponent, ImpliquorComponent],
  imports: [
    CommonModule,
    SharedModule,
    ImpliquorRoutingModule
  ]
})
export class ImpliquorModule { }
