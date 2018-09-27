import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { XComponent } from './x/x.component';
import { YComponent } from './y/y.component';

const routes: Routes = [
  { path: '', component: XComponent },
  { path: 'y', component: YComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeavyRoutingModule { }
