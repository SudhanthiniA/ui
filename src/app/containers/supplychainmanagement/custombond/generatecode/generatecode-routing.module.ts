import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneratecodeComponent } from './generatecode.component';
import { AddgeneratecodeComponent } from './addgeneratecode/addgeneratecode.component';
import { ViewgeneratecodeComponent } from './viewgeneratecode/viewgeneratecode.component';

const routes: Routes = [
  { path: 'list', component: GeneratecodeComponent },
  { path: 'add', component: AddgeneratecodeComponent },
  { path: 'view', component: ViewgeneratecodeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class GeneratecodeRoutingModule { }

