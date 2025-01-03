import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { AddedlabelsRoutingModule } from './addedlabels-routing.module';
import { AddedlabelsComponent } from './addedlabels.component';


@NgModule({
  declarations: [AddedlabelsComponent],
  imports: [
    CommonModule,
    SharedModule,
    AddedlabelsRoutingModule
  ]
})
export class AddedlabelsModule { }
