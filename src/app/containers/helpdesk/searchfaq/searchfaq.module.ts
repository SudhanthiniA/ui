import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { CommonModule } from '@angular/common';
import { SearchfaqRoutingModule } from './searchfaq-routing.module';
import { SearchfaqComponent } from './searchfaq.component';


@NgModule({
  declarations: [SearchfaqComponent],
  imports: [
    CommonModule,
    SearchfaqRoutingModule,
    SharedModule
  ]
})
export class SearchfaqModule { }
