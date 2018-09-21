import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Memo } from './memo.model';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemoHttpService {
  private memosUrl: string = "http://localhost:3000/data";

  private headers = new Headers({
    'Content-Type': 'application/json; charset=utf-8' });

  date = new Date();
  constructor(
    private http: Http,
    private httpClient: HttpClient) { }

  getMemos(): Observable<Array<any>> {
      return this.http.get(this.memosUrl)
        .pipe(
          map(response => {
            console.log(response);
            return response.json();
          })
        );
    }

    addMemo(id: number, writer: string, content: string, date: string): Observable<Memo> {
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      let memo = { "id": 0, "writer": writer, "content": content , date: "20180101"};


      return this.http.post(this.memosUrl, JSON.stringify(memo), options)
        .pipe(
          map(response => {
            console.log('>>>')
            console.log(response);
            return response.json(); // 필요한 데이터만 추출한다.
          })
        );
    }


    removeMemo(memo): Observable<boolean> {
      const url = `${this.memosUrl}/${memo.id}`;
      return this.http.delete(url, { headers: this.headers })
        // .map(this.extractData).catch(this.handleError);
        .pipe(
          map(response => {
            console.log('***')
            console.log(response);
            return true;
          })
        );
    }


}
