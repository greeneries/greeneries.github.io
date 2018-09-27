import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreTestComponent, HelloComponent, IntroComponent } from './component/index';

const routes: Routes = [
   { path: '', redirectTo: '/intro', pathMatch: 'full' },
   { path: 'intro', component: IntroComponent },
   { path: 'hello', component: HelloComponent },
   { path: 'core-test', component: CoreTestComponent },
   { path: 'lazy', loadChildren: '../app/player/player.module#PlayerModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// intro - 루트
// hello - 루트
// core-test -
//
// { path : URL 문자열, loadChildren: ../app/player/player.module#PlayerModule }
// 모듈을 Lazy (필요할 때 처리) 로딩방식으로 사용하는 방법
