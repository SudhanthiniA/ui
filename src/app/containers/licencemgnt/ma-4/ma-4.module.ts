import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { AddComponent } from './add/add.component';
import { Ma4RoutingModule} from './ma-4-routing.module';
import { ViewComponent } from './view/view.component'

@NgModule({
  declarations: [AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    Ma4RoutingModule
  ]
})
export class Ma4Module { }
