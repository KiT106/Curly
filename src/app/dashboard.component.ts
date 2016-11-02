import { Component, OnInit } from '@angular/core';

import { Hero }        from './hero';
import { HeroService } from './hero.service';

@Component({
  moduleId: 'dashboard', // TODO moduleId: module.id,
  selector: 'curly-dashboard',
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  public heroes: Array<Hero> = [];

  constructor(private heroService: HeroService) {
  }

  public ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }

  public gotoDetail(hero: Hero): void {
    /* not implemented yet */
  }
}
