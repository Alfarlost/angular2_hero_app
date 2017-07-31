import { Component, OnInit } from '@angular/core';

import { HeroesService } from './heroes.service';
import { Hero } from './hero'

@Component({
  selector: 'my-dashboard',
  styleUrls: [ './dashboard.component.css' ],
  template: `
    <h3>Top Heroes</h3>
    <div class="grid grid-pad">
      <a *ngFor="let hero of heroes"  [routerLink]="['/details', hero.id]"  class="col-1-4">
        <div class="module hero">
          <h4>{{hero.name}}</h4>
        </div>
      </a>
    </div>
  `
})

export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
    this.heroesService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
    console.log(this.heroesService.getHeroes())
  }
}
