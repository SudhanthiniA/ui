import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InspectingofficerComponent } from './inspectingofficer.component';
import { AddinspectingofficerComponent } from './addinspectingofficer/addinspectingofficer.component';
import { ViewinspectingofficerComponent } from './viewinspectingofficer/viewinspectingofficer.component';



const routes: Routes = [
  { path: 'list', 
  component : InspectingofficerComponent 
  },
  { path: 'add', 
  component : AddinspectingofficerComponent 
  },
  { path: 'view', 
  component: ViewinspectingofficerComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InspectingofficerRoutingModule { }
