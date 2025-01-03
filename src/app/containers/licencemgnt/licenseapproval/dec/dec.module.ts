import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { DecComponent } from './dec.component';
import { DecRoutingModule } from './dec-routing.module';
import { EditdecComponent } from './editdec/editdec.component';




@NgModule({
  declarations: [ DecComponent, EditdecComponent ],
  imports: [
    CommonModule,
    DecRoutingModule,
    SharedModule
  ]
})
export class DecModule { }
