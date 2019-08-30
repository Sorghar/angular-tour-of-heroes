import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { HeroesState } from '../state/heroes.state';
import { getSelectedHero } from '../state/heroes.selectors';
import * as HeroesAction from '../state/heroes.actions';
import { take } from 'rxjs/operators';

@Component({
    selector: 'app-hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

    hero$: Observable<Hero>;

    constructor(
        private route: ActivatedRoute,
        private location: Location,
        private store: Store<HeroesState>
    ) { }

    ngOnInit() {
        this.hero$ = this.store.pipe(select(getSelectedHero));
        this.getHero();
    }

    getHero(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        this.store.dispatch(new HeroesAction.SelectHero(id));
    }

    goBack(): void {
        this.location.back();
    }

    save(): void {
        this.hero$.pipe(
            take(1)
            ).subscribe(hero => {
                this.store.dispatch(new HeroesAction.UpdateHero(hero));
                this.goBack();
            }).unsubscribe();
    }
}
