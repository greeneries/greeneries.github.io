import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberRoutingModule } from './member-routing.module';
//import { MemberDirective } from '../member.directive';
import { HighlightDirective } from './highlight.directive';
import { MemberService } from './member.service';
import { FormsModule } from '@angular/forms';

import { MemberListComponent } from './member-list.component';
import { ShareModule } from '../share/share.module';


@NgModule({
  imports: [
    CommonModule,
    MemberRoutingModule,
    FormsModule,
    ShareModule
  ],
  declarations: [HighlightDirective, MemberListComponent],
  providers : [MemberService]
})

export class MemberModule {
 constructor(){
   console.log('MemberModule # constructor() called.');
 }
}
// MemberModule에 이미 HighlightDirective가 존재하는데
// ShareModule에도 같은 이름의 HighlightDirective가 존재한다.
// 이 경우, 모듈 자신의 디렉티브가 사용된다.
