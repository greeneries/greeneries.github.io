import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JoinService {
  URL : string = "http://localhost:3000/users/";
  constructor() { }
}
