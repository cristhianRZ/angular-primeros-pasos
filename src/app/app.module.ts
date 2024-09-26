import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CounterModule } from './counter/counter.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroModele } from './heroes/components/hero.module';
import { ListModule } from './heroes/components/list.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModule,
    ListModule,
    HeroModele
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
