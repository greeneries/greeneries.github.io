import { Component, OnInit } from '@angular/core';
import { Member, MemberService } from './member.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})

export class MemberListComponent implements OnInit {

  members: Member[];   age: number;   name: string;

  constructor(private memberService: MemberService) { }

  ngOnInit() {
    this.memberService.getMembers().then(members => {       this.members = members;     });
    this.setAge("유비"); // 검색어
  }

  setAge(name: string) {
    this.name = name;
    this.memberService.getMember(name).then(member => {       this.age = member.age;     });
  }

}
