import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { CasesizeRoutingModule } from './casesize-routing.module';
import { CasesizeComponent } from './casesize.component';
import { AddcasesizeComponent } from './addcasesize/addcasesize.component';
import { ViewcasesizeComponent } from './viewcasesize/viewcasesize.component';

@NgModule({
  declarations: [CasesizeComponent, AddcasesizeComponent, ViewcasesizeComponent],
  imports: [
    CommonModule,
    SharedModule,
    CasesizeRoutingModule
  ]
})
export class CasesizeModule { }
