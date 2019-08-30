import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { HeroesState } from '../state/heroes.state';
import * as HeroesAction from '../state/heroes.actions';
import { getAllHeroes } from '../state/heroes.selectors';

/** Displays a list of heroes */
@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

    /** A collection of available heroes */
    heroes$: Observable<Hero[]>;

    constructor(
        private store: Store<HeroesState>) { }

    /** Component initialization */
    ngOnInit() {
        this.heroes$ = this.store.pipe(select(getAllHeroes));
        this.store.dispatch(new HeroesAction.LoadHeroes());
    }

    /** Adds a new Hero */
    add(name: string) {
        name = name.trim();
        if (!name) { return; }
        this.store.dispatch(new HeroesAction.AddHero(name));
    }

    /** Deletes the provided Hero */
    delete(hero: Hero) {
        this.store.dispatch(new HeroesAction.DeleteHero(hero));
    }
}
