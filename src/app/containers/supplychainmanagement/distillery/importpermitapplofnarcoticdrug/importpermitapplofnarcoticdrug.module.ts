import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/theme/shared/shared.module';

import {ImportpermitapplofnarcoticdrugRoutingModule} from './importpermitapplofnarcoticdrug-routing.module';
import { ImportpermitapplofnarcoticdrugComponent } from './importpermitapplofnarcoticdrug.component';
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component'



@NgModule({
  declarations: [ImportpermitapplofnarcoticdrugComponent, ViewComponent , AddComponent],
  imports: [
    CommonModule,
    SharedModule,
    ImportpermitapplofnarcoticdrugRoutingModule
  ]
})
export class ImportpermitapplofnarcoticdrugModule { }
