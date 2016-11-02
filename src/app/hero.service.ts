import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './heroes.mock';

@Injectable()
export class HeroService {
  public getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  public getHero(id: number): Promise<Hero> {
    return this.getHeroes()
      .then(heroes => heroes.find(hero => hero.id === id));
  }
}
