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
         // TODO: send the message _after_ fetching the hero
        this.msgService.add('HeroService: Fetching all heroes.');
        return of(HEROES);
    }

    /**
     * Returns an observable that emits a single value: a hero matching the provided id.
     */
    getHero(id: number): Observable<Hero> {
         // TODO: send the message _after_ fetching the hero
        this.msgService.add(`HeroService: Fetching hero id=${id}.`);
        return of(HEROES.find(h => h.id === id));
    }
}
