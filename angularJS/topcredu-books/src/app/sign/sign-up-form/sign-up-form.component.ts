import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {

  emailRegex = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  signUpForm: FormGroup = new FormGroup({
        id: new FormControl('', Validators.compose([Validators.required,
                                    Validators.minLength(3),
                                    Validators.maxLength(10)])),
        name: new FormControl('', Validators.compose([Validators.required,
                                      Validators.minLength(3),
                                      Validators.maxLength(10)])),
        pwd: new FormControl('', Validators.compose([Validators.required,
                                     Validators.minLength(3),
                                     Validators.maxLength(10)])),
        email: new FormControl('', [Validators.required, Validators.pattern(this.emailRegex)]),
        gender: new FormControl('male',Validators.required),
        confirmPassword: new FormControl('', Validators.compose([Validators.required,
                                      Validators.minLength(3),
                                      Validators.maxLength(10)])),
      });

// /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  profile = { id : '', name : '', pwd: '', email: '', gender: '' };

  idErrorMessage = "ID is required or invalid"; // ID 중복 체크
  nameErrorMessage = "Name is required or invalid"; // ID 중복 체크
  pwdErrorMessage = "Password is required or invalid"; // password 불일치
  emailErrorMessage = "Email is required or invalid"; // email validation 체크

  constructor(private _profileService : ProfileService, private _formBuilder: FormBuilder) { }

  ngOnInit() {
    console.log('Up Component 초기화 ');
  }

    signUp(){

      this.profile.id = this.signUpForm.controls.id.value;
      this.profile.name = this.signUpForm.controls.name.value;
      this.profile.pwd = this.signUpForm.controls.pwd.value;
      this.profile.email = this.signUpForm.controls.email.value;
      this.profile.gender = this.signUpForm.controls.gender.value;

      this._profileService.signUp(this.profile).then(data =>{
        console.log('SignUpFormComponent:'+ data);
      });
    }
}
