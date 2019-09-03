import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable, of } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { HeroesState } from '../state/heroes.state';
import { getSelectedHero } from '../state/heroes.selectors';
import * as HeroesAction from '../state/heroes.actions';
import { take, skip, filter, tap, catchError } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

    selectedHero$: Observable<Hero>;
    fcHeroName = new FormControl('');
    fcHeroID = new FormControl('');

    constructor(
        private route: ActivatedRoute,
        private location: Location,
        private store: Store<HeroesState>
    ) { }

    ngOnInit() {
        this.selectedHero$ = this.store.pipe(select(getSelectedHero));
        this.getHero();
        this.selectedHero$.pipe(
            filter(x => x != null) // initial state is null
        ).subscribe(hero => {
            this.fcHeroName.setValue(hero.name);
            this.fcHeroID.setValue(hero.id);
        });
    }

    getHero(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        this.store.dispatch(new HeroesAction.SelectHero(id));
    }

    goBack(): void {
        this.location.back();
    }

    save(): void {
        this.store.dispatch(new HeroesAction.UpdateHero({ id: this.fcHeroID.value, name: this.fcHeroName.value } as Hero));
        this.goBack();
    }
}
