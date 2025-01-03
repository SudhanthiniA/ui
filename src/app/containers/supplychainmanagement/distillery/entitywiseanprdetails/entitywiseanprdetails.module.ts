import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/theme/shared/shared.module';

import { EntitywiseanprdetailsComponent } from './entitywiseanprdetails.component';
import {EntitywiseanprdetailsRoutingModule} from './entitywiseanprdetails-routing.module';



@NgModule({
  declarations: [EntitywiseanprdetailsComponent],
  imports: [
    CommonModule,
    SharedModule,
    EntitywiseanprdetailsRoutingModule
  ]
})
export class EntitywiseanprdetailsModule { }
