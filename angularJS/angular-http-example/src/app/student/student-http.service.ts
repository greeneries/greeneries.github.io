import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Student } from './student/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentHttpService {

  constructor(private http: Http) { }

  getStudents(): Promise<Student[]>{
    return this.http.get('./assets/server/student.json').
            toPromise().then(res => {
              console.log(res);
              return res.json().students;
            });
  }
}
