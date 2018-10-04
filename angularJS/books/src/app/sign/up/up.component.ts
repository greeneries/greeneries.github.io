import { Component, OnInit } from '@angular/core';
import { SignupService } from '../../services/signup.service'


@Component({
  selector: 'app-up',
  templateUrl: './up.component.html',
  styleUrls: ['./up.component.css']
})
export class UpComponent implements OnInit {
  user = { id : '', name : '', pwd: '', email: '', gender: '' };

  idErrorMessage = "ID가 중복됩니다."; // ID 중복 체크
  pwdErrorMessage = "패스워드 불일치"; // password 불일치
  emailErrorMessage = "이메일 주소가 양식에 맞지 않습니다."; // email validation 체크

  constructor(private signupService : SignupService) { }

  ngOnInit() {
    console.log('Up Component 초기화 ');
  }

  signUp(){
    this.signupService.signUp(this.user).then(data =>{
      console.log('UpComponent:'+ data);
    });
  }

}
