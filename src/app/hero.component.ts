import { Component, Input } from '@angular/core';

import { Hero } from './hero';

@Component({
  selector: 'curly-hero',
  templateUrl: 'hero.component.html'
})
export class HeroComponent {
  @Input()
  public hero: Hero;
}
