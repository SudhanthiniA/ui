import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiquortypeRoutingModule } from './liquortype-routing.module';
import { LiquortypeComponent } from './liquortype.component';
import { AddeditliquortypeComponent } from './addeditliquortype/addeditliquortype.component';
import { ViewliquortypeComponent } from './viewliquortype/viewliquortype.component';
import { SharedModule } from '@app/theme/shared/shared.module';

@NgModule({
  declarations: [LiquortypeComponent, AddeditliquortypeComponent, ViewliquortypeComponent],
  imports: [
    CommonModule,
    SharedModule,
    LiquortypeRoutingModule
  ]
})
export class LiquortypeModule { }
