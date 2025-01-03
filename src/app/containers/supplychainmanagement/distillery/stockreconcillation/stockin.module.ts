import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { StockreconcillationRoutingModule } from './stockin-routing.module';
import { StockinComponent } from './stockin.component';
import { AddComponent } from './add/add.component';
import { ViewComponent  } from './view/view.component';

@NgModule({
  declarations: [
    StockinComponent, 
    AddComponent, 
    ViewComponent, 
   
  ],
  imports: [
    SharedModule,
    StockreconcillationRoutingModule,
    NgbModule
  ]
})
export class StockreconcillationModule { }
