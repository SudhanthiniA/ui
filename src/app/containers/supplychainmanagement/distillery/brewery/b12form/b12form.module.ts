import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';


import { B12formRoutingModule} from './b12form-routing.module';
import { B12formComponent } from './b12form.component';
import { Addb12formComponent } from './addb12form/addb12form.component';
import { Viewb12formComponent } from './viewb12form/viewb12form.component';
import { DraftfinallistComponent } from './draftfinallist/draftfinallist.component';


@NgModule({
  declarations: [B12formComponent, Addb12formComponent, Viewb12formComponent, DraftfinallistComponent],
  imports: [
    CommonModule,
    B12formRoutingModule,
    SharedModule
  ]
})
export class B12formModule { }
