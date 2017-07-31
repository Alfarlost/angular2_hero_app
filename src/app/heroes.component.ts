import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Hero } from "./hero";
import { HeroesService } from './heroes.service';

@Component({
  selector: "my-heroes",
  styleUrls: [ "./heroes.component.css" ],
  template: `
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="let hero of heroes"
        [class.selected]="hero === selectedHero"
        (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
    <div *ngIf="selectedHero">
      <h2>
        {{selectedHero.name | uppercase}} is my hero
      </h2>
      <button (click)="gotoDetail()">View Details</button>
    </div>
  `
})

export class HeroesComponent implements OnInit {
  constructor(
    private heroesService: HeroesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  heroes = []

  selectedHero = new Hero;

  onSelect(hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/details', this.selectedHero.id]);
  }

  getHeroes(): void {
    this.heroesService.getHeroes().then((heroes) => { this.heroes = heroes });
  };

}
