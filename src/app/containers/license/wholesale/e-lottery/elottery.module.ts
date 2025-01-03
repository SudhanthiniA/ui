import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view/view.component';
import { SharedModule } from '@appThemeShared/shared.module';
import { ElotteryRoutingModule } from './elottery-routing.module';
import { AddComponent } from './add/add.component';
import { ElotteryComponent } from './elottery.component';


@NgModule({
  declarations: [ViewComponent, AddComponent,ElotteryComponent],
  imports: [
    CommonModule,
    SharedModule,
    ElotteryRoutingModule
  ]
})
export class ElotteryModule { }
