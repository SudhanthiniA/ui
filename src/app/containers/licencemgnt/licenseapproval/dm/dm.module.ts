import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { DmComponent } from './dm.component';
import { DmRoutingModule } from './dm-routing.module';
import { EditdmComponent } from './editdm/editdm.component';




@NgModule({
  declarations: [ DmComponent, EditdmComponent ],
  imports: [
    CommonModule,
    DmRoutingModule,
    SharedModule
  ]
})
export class DmModule { }
