import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/theme/shared/shared.module';

import {ExportpermitapplofnarcoticdrugRoutingModule} from './exportpermitapplofnarcoticdrug-routing.module';
import { ExportpermitapplofnarcoticdrugComponent } from './exportpermitapplofnarcoticdrug.component';
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component'



@NgModule({
  declarations: [ExportpermitapplofnarcoticdrugComponent, ViewComponent , AddComponent],
  imports: [
    CommonModule,
    SharedModule,
    ExportpermitapplofnarcoticdrugRoutingModule
  ]
})
export class ExportpermitapplofnarcoticdrugModule { }
