import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { ParentunitRoutingModule } from './parentunit-routing.module';
import { ViewComponent } from './view/view.component';
import { ParentunitComponent } from './parentunit.component';


@NgModule({
  declarations: [ViewComponent, ParentunitComponent],
  imports: [
    CommonModule,
    SharedModule,
    ParentunitRoutingModule
  ]
})
export class ParentunitModule { }
