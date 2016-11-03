import { Routes }               from '@angular/router';
import { DashboardComponent }   from './dashboard.component';
import { HeroesComponent }      from './heroes.component';
import { HeroComponent }        from './hero.component';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'heroes/:id', component: HeroComponent },
  { path: 'heroes',     component: HeroesComponent }
];
