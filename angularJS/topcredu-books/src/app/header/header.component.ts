import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
//import { Observable } from 'rxjs';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  message: string ="Password is required";
  user = {id:'purple',
          name:'',
          pwd:'test',
          email:'',
          gender: ''};

   // isLogin: Observable<boolean>;
  isLogin = false;

  ngOnInit() {
      this.isLogin = this.authService.isLogin;
      console.log('ngOnInit');
  }

  ngAfterContentChecked(){
    this.isLogin = this.authService.isLogin;
    console.log('ngAfterContentChecked');
  }

  signOut(){
    this.authService.signOut();
    this.router.navigate(['signInForm']);
  }

}
