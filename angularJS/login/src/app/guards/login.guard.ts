// import { Injectable } from '@angular/core';
// import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
// import { Observable } from 'rxjs';
//
// @Injectable({
//   providedIn: 'root'
// })
// export class LoginGuard implements CanActivate {
//   canActivate(
//     next: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
//     return true;
//   }
// }



import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';


// https://www.zerocho.com/category/HTML/post/5918515b1ed39f00182d3048

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log('localStorage.getItem(currentUser) : ', sessionStorage.getItem('currentUser'));
    //localStorage.removeItem('currentUser');

    //console.log('this.router.navigate([login]) : ', this.router.navigate(['login']));

    /*
    LocalStroage : 브라우저가 제공하는 내장 저장소/ angular 기술이 아님, 예약어
    브라우저에 따라 2MB ~ 5MB 정도 크기의 데이터를 저장 할 수 있습니다.
    도메인에 따라 접근이 결정됩니다.
    if (localStorage.getItem('currentUser')) {
      return true;
    }
     */
    /*
      sessionStorage: 브라우저가 제공하는 내장 저장소
      브라우저가 종료되면 보관하던 데이터가 파괴합니다.

     */
    if (sessionStorage.getItem('currentUser')) {
      return true;
    }


    // url을 개발자가 직접 코드적으로 변경합니다.
    this.router.navigate(['login'], { queryParams: { returnUrl: state.url }});
    return false;
  }
}
