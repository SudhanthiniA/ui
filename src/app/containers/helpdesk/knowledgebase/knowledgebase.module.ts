import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { CommonModule } from '@angular/common';


import { KnowledgebaseRoutingModule } from './knowledgebase-routing.module';
import { KnowledgebaseComponent } from './knowledgebase.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [KnowledgebaseComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    KnowledgebaseRoutingModule,
    SharedModule
  ]
})
export class KnowledgebaseModule { }
