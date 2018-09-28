import { Component, OnInit, HostListener } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {
    id:'',
    pw:''
  };
  errorMessage = '';
  returnUrl: string;

  constructor(
    private loginService: LoginService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    this.errorMessage = '';
    alert(JSON.stringify(this.user));

    // 사용자가 존재하므로 로그인 처리를 했음을 브라우저가 지원하는 저장소에 기록합니다.
    this.loginService.auth(this.user)
      .then(data => {
        console.log('--------2-------');
        console.log('data.id : ', data.id);
        console.log(this.returnUrl);
        console.log(this.router);

        // localStorage 자료형은 String 하나밖에 없으므로 JSON.tringify을 이용해서
        // String으로 변경합니다.
        //sessionStorage.setItem('currentUser', JSON.stringify(this.user));
        sessionStorage.setItem('currentUser', data.id);
        this.router.navigate([this.returnUrl]);
      })
      .catch(error => {
        // this.alertService.error(error);
        console.log('--------3-------');
        this.errorMessage = 'id 또는 pw 가 일치하지 않습니다.';
      });
  }

  @HostListener('mousedown') onMouseMove() {
    //this.el.style.backgroundColor = "blue";
  //  this.el.style.color = "white";
    console.log('mouse down');
  }


}
