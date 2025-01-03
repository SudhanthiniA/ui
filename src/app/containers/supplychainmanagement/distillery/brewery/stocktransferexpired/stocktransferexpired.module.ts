import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { StocktransferexpiredRoutingModule} from './stocktransferexpired-routing.module';
import { StocktransferexpiredComponent } from './stocktransferexpired.component';
import { ViewstocktransferexpiredComponent } from './viewstocktransferexpired/viewstocktransferexpired.component';
import { AddstocktransferexpiredComponent } from './addstocktransferexpired/addstocktransferexpired.component';

@NgModule({
  declarations: [StocktransferexpiredComponent, ViewstocktransferexpiredComponent, AddstocktransferexpiredComponent],
  imports: [
    CommonModule,
    StocktransferexpiredRoutingModule,
    SharedModule
  ]
})
export class StocktransferexpiredModule { }
