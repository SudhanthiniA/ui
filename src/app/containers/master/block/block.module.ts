import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module'; 

import { BlockRoutingModule } from './block-routing.module';
import { BlockComponent } from './block.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [BlockComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    BlockRoutingModule
  ]
})
export class BlockModule { }
