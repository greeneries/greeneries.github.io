import { Injectable } from '@angular/core';
import { Heros } from '../model/heros';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heros: Heros[]=[
    {id:1, name:'hong gil dong'},
    {id:2, name:'lee sun sin'}
  ];

  constructor() { }

  getHeros() : Heros[] {
    return this.heros;
  };
}
