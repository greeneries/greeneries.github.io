import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookComponent } from './book/book.component';
//import { ViewChildComponent } from './view-child/view-child.component';
import { CounterComponent } from './counter/counter.component';

const routes: Routes = [
    { path: '', redirectTo: '/book', pathMatch: 'full' },
    { path: 'book', component: BookComponent},
  //  { path: 'view-child', component: ViewChildComponent},
    { path: 'counter', component: CounterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
