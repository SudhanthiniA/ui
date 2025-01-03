import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentRoutingModule } from './document-routing.module';
import { DocumentComponent } from './document.component';
import { AddeditdocumentComponent } from './addeditdocument/addeditdocument.component';
import { ViewdocumentComponent } from './viewdocument/viewdocument.component';
import { SharedModule } from '@appThemeShared/shared.module';

@NgModule({
  declarations: [
    DocumentComponent, 
    AddeditdocumentComponent, 
    ViewdocumentComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DocumentRoutingModule
  ]
})
export class DocumentModule { }
