import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { ImportliquorComponent } from './importliquor.component';
import { ImportliquorRoutingModule } from './importliquor-routing.module';


@NgModule({
  declarations: [ImportliquorComponent],
  imports: [
    CommonModule,
    ImportliquorRoutingModule,
    SharedModule
  ]
})
export class ImportliquorModule { }
