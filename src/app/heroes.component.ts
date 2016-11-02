import { Component, OnInit } from '@angular/core';
import { HeroService } from './hero.service';
import { Hero } from './hero';

@Component({
  selector: 'curly-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: ['heroes.component.css'],
  providers: [HeroService]
})
export class HeroesComponent implements OnInit {
  public heroes: Array<Hero>;
  public selectedHero: Hero;

  constructor(private heroService: HeroService) {
  }

  public ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes);
  }

  public onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
