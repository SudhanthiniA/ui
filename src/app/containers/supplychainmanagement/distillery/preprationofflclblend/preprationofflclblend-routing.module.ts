import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreprationofflclblendComponent } from './preprationofflclblend.component';
import { AddpreprationofflclblendComponent } from './addpreprationofflclblend/addpreprationofflclblend.component';
import { ViewpreprationofflclblendComponent } from './viewpreprationofflclblend/viewpreprationofflclblend.component';


const routes: Routes = [
  {
    path : 'list',
    component : PreprationofflclblendComponent
  },
  {
    path: 'add',
    component : AddpreprationofflclblendComponent
  },
  {
    path : 'view',
    component : ViewpreprationofflclblendComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreprationofflclblendRoutingModule { }
