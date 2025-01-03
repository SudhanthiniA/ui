import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { DeoComponent } from './deo.component';
import { DeoRoutingModule } from './deo-routing.module';
import { EditdeoComponent } from './editdeo/editdeo.component';




@NgModule({
  declarations: [ DeoComponent, EditdeoComponent ],
  imports: [
    CommonModule,
    DeoRoutingModule,
    SharedModule
  ]
})
export class DeoModule { }
