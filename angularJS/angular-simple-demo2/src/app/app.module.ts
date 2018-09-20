import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ExperimentsComponent } from './experiments/experiments.component';
import { ExperimentDetailComponent } from './experiments/experiment-detail/experiment-detail.component';
import { HomeComponent } from './home/home.component';

import { StateService } from './common/state.service';
import { ExperimentsService } from './common/experiments.service';
import { HeroComponent } from './hero/hero.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'experiments', component: ExperimentsComponent },
  { path: 'hero', component: HeroComponent },
  // ''의 의미는 '/'와 동일함
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // '**' 의미는 위에서 아무도 처리하지 않으면 기동한다. (error page)
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ExperimentsComponent,
    ExperimentDetailComponent,
    HomeComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule, CommonModule, HttpModule,FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [StateService,ExperimentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
