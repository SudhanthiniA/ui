import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InspectingofficerComponent } from './inspectingofficer.component';
import { AddinspectingofficerComponent } from './addinspectingofficer/addinspectingofficer.component';
import { ViewinspectingofficerComponent } from './viewinspectingofficer/viewinspectingofficer.component';

import { ResolvedComponent } from './resolved/resolved.component';
import { NewpendingComponent } from './newpending/newpending.component';


const routes: Routes = [
  { path: 'list', 
  component : InspectingofficerComponent 
  },
  { path: 'add', 
  component : AddinspectingofficerComponent 
  },
  { path: 'view', 
  component: ViewinspectingofficerComponent 
  },
  { path: 'resolved', 
  component: ResolvedComponent 
  },
  { path: 'newpending', 
  component: NewpendingComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InspectingofficerRoutingModule { }
