import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { RetailmonocartonindentrequestRoutingModule} from './retailmonocartonindentrequest-routing.module';
import { RetailmonocartonindentrequestComponent } from './retailmonocartonindentrequest.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [
    RetailmonocartonindentrequestComponent,
    AddComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RetailmonocartonindentrequestRoutingModule
  ]
})
export class RetailmonocartonindentrequestModule { }
