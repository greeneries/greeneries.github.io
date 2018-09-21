import { Component, OnInit } from '@angular/core';
import { Heros } from '../model/heros';
import { HeroService } from '../common/hero.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  heros : Heros[];
  constructor(private _heroService: HeroService) {}

  ngOnInit() {
    this.heros = this._heroService.getHeros();
  }

}
