import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { HomeComponent } from './home/home.component';
import { AboutComponent  } from './about/about.component';


import { BuiltInPipeComponent } from './built-in-pipe/built-in-pipe.component';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { CustomDirective2Component } from './custom-directive2/custom-directive2.component';
import { CustomEventDirectiveComponent } from './custom-event-directive/custom-event-directive.component';

const routes: Routes = [   { path: '', redirectTo: '/home', pathMatch: 'full' },
                            { path: 'home', component: HomeComponent },
                            { path: 'builtin', component: BuiltInPipeComponent },
                            { path: 'custom', component: CustomPipeComponent },
                            { path: 'custom-directive', component: CustomDirectiveComponent },
                            { path: 'custom-directive2', component: CustomDirective2Component },
                            { path: 'custom-event-directive', component: CustomEventDirectiveComponent },
                            { path: 'about', component: AboutComponent },
                            { path: '**', component: HomeComponent }
                        ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
