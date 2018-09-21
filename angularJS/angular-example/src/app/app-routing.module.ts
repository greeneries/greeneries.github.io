import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

import { InterpolitationComponent } from './interpolitation/interpolitation.component';
import { OnewayComponent } from './binding/oneway/oneway.component';

import { OnewayStatementComponent } from './binding/oneway-statement/oneway-statement.component';
import { TwowayComponent } from './binding/twoway/twoway.component';

import { NgclassComponent } from './binding/ngclass/ngclass.component';
import { NgstyleComponent } from './binding/ngstyle/ngstyle.component';
import { NgifComponent } from './binding/ngif/ngif.component';
import { NgswitchComponent } from './binding/ngswitch/ngswitch.component';
import { NgforComponent } from './binding/ngfor/ngfor.component';
import { RefComponent } from './binding/ref/ref.component';

const routes: Routes = [
      { path: 'home', component: HomeComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'interpolation', component: InterpolitationComponent },
      { path: 'oneway', component: OnewayComponent },
      { path: 'oneway-statement', component: OnewayStatementComponent },
      { path: 'twoway', component: TwowayComponent},
      { path: 'ngclass', component: NgclassComponent},
      { path: 'ngstyle', component: NgstyleComponent},
      { path: 'ngif', component: NgifComponent},
      { path: 'ngswitch', component: NgswitchComponent},
      { path: 'ngfor', component: NgforComponent},
      { path: 'ref', component: RefComponent},
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
