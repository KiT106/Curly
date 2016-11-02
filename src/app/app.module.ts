import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { AppComponent }        from './app.component';
import { HeroComponent }       from './hero.component';
import { HeroesComponent }     from './heroes.component';
import { HeroService }         from './hero.service';
import { DashboardComponent }  from './dashboard.component';

let route = RouterModule.forRoot([
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
    path: 'heroes/:id',
    component: HeroComponent
  }
]);

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    route
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroComponent,
    HeroesComponent
  ],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
