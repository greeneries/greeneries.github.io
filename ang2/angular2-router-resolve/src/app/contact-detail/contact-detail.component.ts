import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ContactService } from '../service/contact.service';
import { Contact } from '../interface/contact';

@Component({
  selector: 'contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  contact;

  constructor(private contactsService: ContactService, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log("this.route.snapshot.params = " + JSON.stringify(this.route.snapshot.params));
    let id = this.route.snapshot.params['id'];

    // URL 문자열이 일부를 정보를 구하는 키 값으로 사용합니다.
    // 서비스의 함수에게 키 값을
    // 3초 후에 응답한 값이 contact이다.
    this.contactsService.getContact(id).subscribe(contact => {
      this.contact = contact;
      console.log("this.contact = " + JSON.stringify(this.contact));
    });
  }

}
