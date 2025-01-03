import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { NewvtsRoutingModule } from './newvts-routing.module';
import { NewvtsComponent } from './newvts.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { FinishedgoodviewComponent } from './finishedgoodview/finishedgoodview.component';
import { MolassesviewComponent } from './molassesview/molassesview.component';
import { SpiritviewComponent } from './spiritview/spiritview.component';


@NgModule({
  declarations: [SpiritviewComponent,MolassesviewComponent,NewvtsComponent, AddComponent, ViewComponent,FinishedgoodviewComponent],
  imports: [
    CommonModule,
    SharedModule,
    NewvtsRoutingModule
  ]
})
export class NewvtsModule { }
