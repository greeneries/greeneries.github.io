import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (sessionStorage.getItem('currentUser')) {
      // this.authService.isLogin = true;
      this.authService.isLogin = true;
      return true;
    }

    this.router.navigate(['signIn'], { queryParams: { returnUrl: state.url }});

    this.authService.isLogin = false;
    return false;
  }
}
