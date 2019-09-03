import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import * as heroActions from './heroes.actions';
import { mergeMap, map, catchError, take, skip, switchMap } from 'rxjs/operators';
import { HeroService } from '../hero.service';


@Injectable()
export class HeroEffects {
    constructor(
        private actions$: Actions,
        private heroService: HeroService) { }

    @Effect()
    loadHeroes$: Observable<Action> = this.actions$.pipe(
        ofType(heroActions.HeroesActionTypes.LoadHeroes),
        mergeMap(action => this.heroService.getHeroes().pipe(
            map(heroes => (new heroActions.LoadHeroesSuccess(heroes))),
            catchError((err: string) => of(new heroActions.LoadHeroesFailed(err)))
        ))
    );

    @Effect()
    loadTopHeroes$: Observable<Action> = this.actions$.pipe(
        ofType(heroActions.HeroesActionTypes.LoadTopHeroes),
        mergeMap(action => this.heroService.getHeroes().pipe(
            map(heroes => (new heroActions.LoadTopHeroesSuccess(heroes.slice(1, 5)))),
            catchError((err: string) => of(new heroActions.LoadTopHeroesFailed(err)))
        ))
    );

    @Effect()
    addHero$: Observable<Action> = this.actions$.pipe(
        ofType(heroActions.HeroesActionTypes.AddHero),
        mergeMap((action: heroActions.AddHero) => this.heroService.addHero(action.payload).pipe(
            map(hero => (new heroActions.AddHeroSuccess(hero))),
            catchError((err: string) => of(new heroActions.AddHeroFailed(err)))
        ))
    );

    @Effect()
    deleteHero$: Observable<Action> = this.actions$.pipe(
        ofType(heroActions.HeroesActionTypes.DeleteHero),
        mergeMap((action: heroActions.DeleteHero) => this.heroService.deleteHero(action.payload).pipe(
            map(_ => (new heroActions.DeleteHeroSuccess(action.payload))),
            catchError((err: string) => of(new heroActions.DeleteHeroFailed(err)))
        ))
    );

    @Effect()
    selectHero$: Observable<Action> = this.actions$.pipe(
        ofType(heroActions.HeroesActionTypes.SelectHero),
        switchMap((action: heroActions.SelectHero) => this.heroService.getHero(action.payload).pipe(
            map(hero => (new heroActions.SelectHeroSuccess(hero))),
            catchError((err: string) => of(new heroActions.SelectHeroFailed(err)))
        ))
    );

    @Effect()
    updateHero$: Observable<Action> = this.actions$.pipe(
        ofType(heroActions.HeroesActionTypes.UpdateHero),
        mergeMap((action: heroActions.UpdateHero) => this.heroService.updateHero(action.payload).pipe(
            map(_ => (new heroActions.UpdateHeroSuccess(action.payload))),
            catchError((err: string) => of(new heroActions.UpdateHeroFailed(err)))
        ))
    );
}
