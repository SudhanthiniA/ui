import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/theme/shared/shared.module';
import { ProductiondeclarationComponent } from './productiondeclaration.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

import {ProductiondeclarationRoutingModule} from './productiondeclaration-routing.module';
import { ApprovalComponent } from './approval/approval.component';

@NgModule({
  declarations: [ProductiondeclarationComponent, AddComponent, ViewComponent, ApprovalComponent],
  imports: [
    CommonModule,
    SharedModule,
    ProductiondeclarationRoutingModule
  ]
})
export class ProductiondeclarationModule { }
