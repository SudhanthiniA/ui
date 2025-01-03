import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/theme/shared/shared.module';
import { SubLiquortypeComponent } from './sub-liquortype.component';
import { SubLiquortypeRoutingModule } from './sub-liquortype-routing.module';
import { AddsubliquortypeComponent } from './addsubliquortype/addsubliquortype.component';
import { ViewsubliquortypeComponent } from './viewsubliquortype/viewsubliquortype.component';

@NgModule({
  declarations: [SubLiquortypeComponent, AddsubliquortypeComponent, ViewsubliquortypeComponent],
  imports: [
    CommonModule,
    SharedModule,
    SubLiquortypeRoutingModule
  ]
})
export class SubLiquortypeModule { }
