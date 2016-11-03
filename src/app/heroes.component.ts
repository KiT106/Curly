import { Component, OnInit } from '@angular/core';
import { HeroService } from './hero.service';
import { Hero } from './hero';
import { Router } from '@angular/router';

@Component({
  selector: 'curly-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: ['heroes.component.css'],
  providers: [HeroService]
})
export class HeroesComponent implements OnInit {
  public heroes: Array<Hero>;
  public selectedHero: Hero;

  constructor(
    private heroService: HeroService,
    private router: Router
  ) { }

  public ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes);
  }

  public onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  public gotoDetail(): void {
    this.router.navigate(['/heroes', this.selectedHero.id]);
  }

  public add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.create(name)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      });
  }

  public delete(hero: Hero): void {
    this.heroService
      .delete(hero.id)
      .then(() => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero) { this.selectedHero = null; }
      });
  }
}
