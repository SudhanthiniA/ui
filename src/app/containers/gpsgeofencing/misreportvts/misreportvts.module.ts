import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { MisreportvtsComponent } from './misreportvts.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { MisreportvtsRoutingModule } from './misreportvts-routing.module';


@NgModule({
  declarations: [MisreportvtsComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    MisreportvtsRoutingModule
  ]
})
export class MisreportvtsModule { }
