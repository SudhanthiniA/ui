import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/theme/shared/shared.module';

import { RelationConfigurationRoutingModule } from './relation-configuration-routing.module';
import { RelationConfigurationComponent } from './relation-configuration.component';
import { AddRelationComponent } from './add-relation/add-relation.component';
import { ViewRelationComponent } from './view-relation/view-relation.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';


@NgModule({
  declarations: [RelationConfigurationComponent, AddRelationComponent, ViewRelationComponent],
  imports: [
    CommonModule,
    RelationConfigurationRoutingModule,
    SharedModule,
    NgMultiSelectDropDownModule.forRoot()
  ]
})
export class RelationConfigurationModule { }
