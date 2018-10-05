import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {

  profile = { id : '', name : '', pwd: '', email: '', gender: '' };

  idErrorMessage = "ID가 중복됩니다."; // ID 중복 체크
  pwdErrorMessage = "패스워드 불일치"; // password 불일치
  emailErrorMessage = "이메일 주소가 양식에 맞지 않습니다."; // email validation 체크

  constructor(private _profileService : ProfileService, private _formBuilder: FormBuilder) { }

  ngOnInit() {
    console.log('Up Component 초기화 ');
  }

    signUp(){
      this._profileService.signUp(this.profile).then(data =>{
        console.log('UpComponent:'+ data);
      });
    }
}
