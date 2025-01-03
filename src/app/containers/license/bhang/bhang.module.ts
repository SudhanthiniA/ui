import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { CommonModule } from '@angular/common';
import { BhangRoutingModule } from './bhang-routing.module';
import { BhangComponent } from './bhang.component';

@NgModule({
  declarations: [BhangComponent ],
  imports: [
    BhangRoutingModule,
    CommonModule,
    SharedModule,
    
  ]
})
export class BhangModule { }
