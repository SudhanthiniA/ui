import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { Bio1aComponent } from './bio1a.component';
import { Bio1aRoutingModule } from './bio1a-routing.module';

import { Addbio1aComponent } from './addbio1a/addbio1a.component'
import { Viewbio1aComponent } from './viewbio1a/viewbio1a.component';

@NgModule({
  declarations: [Bio1aComponent, Addbio1aComponent, Viewbio1aComponent],
  imports: [
    CommonModule,
    Bio1aRoutingModule,
    SharedModule
  ]
})
export class Bio1aModule { }
