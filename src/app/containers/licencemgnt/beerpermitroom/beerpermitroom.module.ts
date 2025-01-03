import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { BeerpermitroomRoutingModule } from './beerpermitroom-routing.module';

import { BeerpermitroomComponent } from './beerpermitroom.component';
import { AddbeerpermitroomComponent } from './addbeerpermitroom/addbeerpermitroom.component'
import { ViewbeerpermitroomComponent } from './viewbeerpermitroom/viewbeerpermitroom.component';

@NgModule({
  declarations: [BeerpermitroomComponent, AddbeerpermitroomComponent, ViewbeerpermitroomComponent],
  imports: [
    CommonModule,
    BeerpermitroomRoutingModule,
    SharedModule
  ]
})
export class BeerpermitroomModule { }
