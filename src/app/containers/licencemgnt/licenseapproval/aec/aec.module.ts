import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { AecComponent } from './aec.component';
import { AecRoutingModule } from './aec-routing.module';
import { EditaecComponent } from './editaec/editaec.component';




@NgModule({
  declarations: [ AecComponent, EditaecComponent ],
  imports: [
    CommonModule,
    AecRoutingModule,
    SharedModule
  ]
})
export class AecModule { }
