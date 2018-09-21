import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Kpop } from './kpop.model';

// toPromise 기능을 사용하기 위해서 폴리형 코드를 기동시킨다.
//import 'rxjs/add/operator/toPromise';

@Injectable()
export class KpopHttpService {

  constructor(private http: Http) { }

  getIdols(): Promise<Kpop[]> {
    // get 함수가 리턴하는 Observerble 객체를
    // toPromise 함수에서 Promise 객체로 변경합니다.
    // res.json()은 데이터 추출
    return this.http.get('./assets/server/kpop.json').toPromise()
            .then(res =>  {
              console.log(res); return res.json().info.idols;
            });
    }

}
