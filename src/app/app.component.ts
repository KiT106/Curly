import {Component, OnInit} from '@angular/core';
import {HeroService} from './hero.service';
import {Hero} from './hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})
export class AppComponent implements OnInit {
  title: string = 'Tour of Heroes';
  heroes: Array<Hero>;
  selectedHero: Hero;

  constructor(private heroService: HeroService) {
  }

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
