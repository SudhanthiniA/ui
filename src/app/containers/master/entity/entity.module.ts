import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import { EntityRoutingModule } from './entity-routing.module';
import { EntityComponent } from './entity.component';
import { AddEntityComponent } from './add-entity/add-entity.component';
import { ViewEntityComponent } from './view-entity/view-entity.component';
import { MastersModule } from '../masters.module';

@NgModule({
  declarations: [EntityComponent, AddEntityComponent, ViewEntityComponent],
  imports: [
    CommonModule,
    EntityRoutingModule,
    SharedModule,
    DataTablesModule,
    MastersModule
  ]
})
export class EntityModule {
  constructor() {}
}
