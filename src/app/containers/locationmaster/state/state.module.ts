import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { StateRoutingModule } from './state-routing.module';
import { StateComponent } from './state.component';
import { AddStateComponent } from './add-state/add-state.component';
import { ViewStateComponent } from './view-state/view-state.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@NgModule({
  imports: [
    StateRoutingModule,
    SharedModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  declarations: [
    StateComponent,
    AddStateComponent,
    ViewStateComponent
  ]
})
export class StateModule { }
