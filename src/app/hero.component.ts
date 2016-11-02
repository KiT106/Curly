import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                   from '@angular/common';

import { Hero }        from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'curly-hero',
  templateUrl: 'hero.component.html'
})
export class HeroComponent implements OnInit {
  @Input()
  public hero: Hero;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  public ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = parseInt(params['id'], 10);
      this.heroService.getHero(id)
        .then(hero => this.hero = hero);
    });
  }

  public goBack(): void {
    this.location.back();
  }
}
