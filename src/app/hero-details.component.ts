import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Hero } from './hero';
import { HeroesService } from "./heroes.service"

@Component({
  selector: 'hero-details',
  template: `
    <div *ngIf="hero">
      <h2>{{hero.name}} details!</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="hero.name" placeholder="name"/>
      </div>
      <button (click)="goBack()">Back</button>
      <button (click)="updateHero()">Save</button>
    </div>
  `
})

export class HeroDetailsComponent implements OnInit {
  constructor(
    private heroesService: HeroesService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.heroesService.getHero(+params.get('id')))
      .subscribe(hero => this.hero = hero);
  }

  updateHero(): void {
    this.heroesService.updateHero(this.hero.id, this.hero.name)
  }

  goBack(): void {
    this.location.back();
  }

  @Input() hero: Hero;
}
