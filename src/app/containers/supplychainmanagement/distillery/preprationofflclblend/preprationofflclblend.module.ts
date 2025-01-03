import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { PreprationofflclblendRoutingModule } from './preprationofflclblend-routing.module';
import { PreprationofflclblendComponent } from './preprationofflclblend.component';
import { AddpreprationofflclblendComponent } from './addpreprationofflclblend/addpreprationofflclblend.component';
import { ViewpreprationofflclblendComponent } from './viewpreprationofflclblend/viewpreprationofflclblend.component';


@NgModule({
  declarations: [PreprationofflclblendComponent, AddpreprationofflclblendComponent, ViewpreprationofflclblendComponent],
  imports: [
    CommonModule,
    SharedModule,
    PreprationofflclblendRoutingModule
  ]
})
export class PreprationofflclblendModule { }
