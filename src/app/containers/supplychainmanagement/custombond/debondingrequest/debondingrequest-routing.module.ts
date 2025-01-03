import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { DebondingrequestComponent } from './debondingrequest.component';
import { AdddebondingrequestComponent } from './adddebondingrequest/adddebondingrequest.component';
import { ViewdebondingrequestComponent } from './viewdebondingrequest/viewdebondingrequest.component';

const routes: Routes = [ 
  {
    path : 'list',
    component : DebondingrequestComponent
  },
  {
    path : 'add',
    component : AdddebondingrequestComponent
  },
  {
    path : 'view',
    component : ViewdebondingrequestComponent
  }
];  

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DebondingrequestRoutingModule { }
