import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { ProcessedbeertransfertobbtRoutingModule } from './processedbeertransfertobbt-routing.module';
import { ProcessedbeertransfertobbtComponent } from './processedbeertransfertobbt.component';
import { AddprocessedbeertransfertobbtComponent } from './addprocessedbeertransfertobbt/addprocessedbeertransfertobbt.component';
import { ViewprocessedbeertransfertobbtComponent } from './viewprocessedbeertransfertobbt/viewprocessedbeertransfertobbt.component';



@NgModule({
  declarations: [ProcessedbeertransfertobbtComponent, AddprocessedbeertransfertobbtComponent, ViewprocessedbeertransfertobbtComponent],
  imports: [
    CommonModule,
    ProcessedbeertransfertobbtRoutingModule,
    SharedModule
  ]
})
export class ProcessedbeertransfertobbtModule { }
