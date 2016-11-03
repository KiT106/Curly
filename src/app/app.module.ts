import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';
import { RouterModule }   from '@angular/router';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }        from './app.component';
import { HeroComponent }       from './hero.component';
import { HeroesComponent }     from './heroes.component';
import { HeroService }         from './hero.service';
import { DashboardComponent }  from './dashboard.component';
import { routes }    from './app.routes';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroComponent,
    HeroesComponent
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
