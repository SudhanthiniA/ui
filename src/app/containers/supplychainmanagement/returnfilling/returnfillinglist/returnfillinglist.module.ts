import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { ReturnfillinglistRoutingModule } from './returnfillinglist-routing.module';
import { ReturnfillinglistComponent } from './returnfillinglist.component';
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component';
import { ViewapprovaldeoComponent } from './viewapprovaldeo/viewapprovaldeo.component';


@NgModule({
  declarations: [ReturnfillinglistComponent , ViewComponent , AddComponent , ViewapprovaldeoComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReturnfillinglistRoutingModule
  ]
})
export class ReturnfillinglistModule { }
