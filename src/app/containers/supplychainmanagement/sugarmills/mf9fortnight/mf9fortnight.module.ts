import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Mf9fortnightRoutingModule } from './mf9fortnight-routing.module';
import { Mf9fortnightComponent } from './mf9fortnight.component';
import { Addeditmf9fortnightComponent } from './addeditmf9fortnight/addeditmf9fortnight.component';
import { Viewmf9fortnightComponent } from './viewmf9fortnight/viewmf9fortnight.component';
import { Previewmf9fortnightComponent } from './previewmf9fortnight/previewmf9fortnight.component';
import { SharedModule } from '@app/theme/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [Mf9fortnightComponent, Addeditmf9fortnightComponent, Viewmf9fortnightComponent, Previewmf9fortnightComponent],
  imports: [
    CommonModule,
    Mf9fortnightRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class Mf9fortnightModule { }
