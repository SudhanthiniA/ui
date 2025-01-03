import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { CommonModule } from '@angular/common';

import { KnowledgebaseRoutingModule } from './knowledgebase-routing.module';
import { KnowledgebaseComponent } from './knowledgebase.component';
import { AddknowledgebaseComponent } from './addknowledgebase/addknowledgebase.component';
import { ViewknowledgebaseComponent } from './viewknowledgebase/viewknowledgebase.component';



@NgModule({
  declarations: [KnowledgebaseComponent, AddknowledgebaseComponent, ViewknowledgebaseComponent],
  imports: [
    CommonModule,
    SharedModule,
    KnowledgebaseRoutingModule
  ]
})
export class KnowledgebaseModule { }
