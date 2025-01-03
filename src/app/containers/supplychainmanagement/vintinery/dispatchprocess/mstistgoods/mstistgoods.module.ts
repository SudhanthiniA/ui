import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { MstistgoodsRoutingModule} from './mstistgoods-routing.module';
import { SharedModule } from '@appThemeShared/shared.module';

@NgModule({
  declarations: [ListComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    MstistgoodsRoutingModule
  ]
})
export class MstistgoodsModule { }
