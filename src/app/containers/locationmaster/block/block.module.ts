import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { BlockRoutingModule } from './block-routing.module';
import { BlockComponent } from './block.component';
import { AddBlockComponent } from './add-block/add-block.component';
import { ViewBlockComponent } from './view-block/view-block.component';
import { DataTablesModule } from 'angular-datatables';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@NgModule({
  declarations: [
    BlockComponent,
    AddBlockComponent,
    ViewBlockComponent
  ],
  imports: [
    CommonModule,
    BlockRoutingModule,
    SharedModule,
    DataTablesModule,
    NgMultiSelectDropDownModule.forRoot()
  ]
})
export class BlockModule { }
