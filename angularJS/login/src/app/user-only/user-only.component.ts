import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-only',
  templateUrl: './user-only.component.html',
  styleUrls: ['./user-only.component.css']
})
export class UserOnlyComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  logout() {
    sessionStorage.removeItem('currentUser');
    // this.router.navigate(['login'], { queryParams: { returnUrl: state.url }});
    this.router.navigate(['login']);
  }

}
