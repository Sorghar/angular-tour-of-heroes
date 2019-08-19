import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private msgService: MessageService) { }

  /**
   * Returns an observable that emits a single value: a collection of available heroes.
   */
  getHeroes(): Observable<Hero[]> {
      this.msgService.add('HeroService: before fetching heroes.');
      return of(HEROES);
  }
}
