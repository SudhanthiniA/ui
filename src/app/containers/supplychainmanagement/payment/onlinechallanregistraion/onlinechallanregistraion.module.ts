import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component';
import { SharedModule } from '@appThemeShared/shared.module';
import { OnlinechallanregistrationRoutingModule} from './onlinechallanregistration-routing.module'


@NgModule({
  declarations: [ListComponent, ViewComponent, AddComponent],
  imports: [
    CommonModule,
    SharedModule,
    OnlinechallanregistrationRoutingModule
  ]
})
export class OnlinechallanregistraionModule { }
