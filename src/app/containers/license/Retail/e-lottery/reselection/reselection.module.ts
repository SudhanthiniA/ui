import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReselectionComponent } from './reselection.component';
import { ReselectionRoutingModule } from './reselection-routing.module';
import { SharedModule } from '@app/theme/shared/shared.module';
import { AddComponent } from './add/add.component';



@NgModule({
  declarations: [ReselectionComponent,AddComponent],
  imports: [
    CommonModule,
    ReselectionRoutingModule,
    SharedModule
  ]
})
export class ReselectionModule { }
