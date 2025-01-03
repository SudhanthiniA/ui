import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BeerpermitroomComponent } from './beerpermitroom.component';
import { AddbeerpermitroomComponent } from './addbeerpermitroom/addbeerpermitroom.component'
import { ViewbeerpermitroomComponent } from './viewbeerpermitroom/viewbeerpermitroom.component';

const routes: Routes = [
  {
    path : 'list',
    component : BeerpermitroomComponent
  },
  {
    path : 'add',
    component : AddbeerpermitroomComponent
  },
 
  {
    path: 'view',
    component: ViewbeerpermitroomComponent
  },
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeerpermitroomRoutingModule { }
