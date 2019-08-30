import { Action } from '@ngrx/store';
import { Hero } from '../hero';


export enum HeroesActionTypes {
    LoadHeroes = '[Heroes] Load all heroes',
    LoadHeroesSuccess = '[Heroes] Load all heroes Success',
    LoadHeroesFailed = '[Heroes] Load all heroes Failed',
    LoadTopHeroes = '[Heroes] Load top heroes',
    LoadTopHeroesSuccess = '[Heroes] Load top heroes Success',
    LoadTopHeroesFailed = '[Heroes] Load top heroes Failed',
    SelectHero = '[Heroes] Select hero detail',
    SelectHeroSuccess = '[Heroes] Select hero detail Success',
    SelectHeroFailed = '[Heroes] Select hero detail Failed',
    AddHero = '[Heroes] Add hero',
    AddHeroSuccess = '[Heroes] Add hero Success',
    AddHeroFailed = '[Heroes] Add hero Failed',
    DeleteHero = '[Heroes] Delete hero',
    DeleteHeroSuccess = '[Heroes] Delete hero Success',
    DeleteHeroFailed = '[Heroes] Delete hero Failed',
    UpdateHero = '[Heroes] Update hero',
    UpdateHeroSuccess = '[Heroes] Update hero Success',
    UpdateHeroFailed = '[Heroes] Update hero Failed'
}

export class LoadHeroes implements Action {
    readonly type = HeroesActionTypes.LoadHeroes;
}

export class LoadHeroesSuccess implements Action {
    readonly type = HeroesActionTypes.LoadHeroesSuccess;
    constructor(public payload: Hero[]) { }
}

export class LoadHeroesFailed implements Action {
    readonly type = HeroesActionTypes.LoadHeroesFailed;
    constructor(public payload: string) { }
}

export class LoadTopHeroes implements Action {
    readonly type = HeroesActionTypes.LoadTopHeroes;
}

export class LoadTopHeroesSuccess implements Action {
    readonly type = HeroesActionTypes.LoadTopHeroesSuccess;
    constructor(public payload: Hero[]) { }
}

export class LoadTopHeroesFailed implements Action {
    readonly type = HeroesActionTypes.LoadTopHeroesFailed;
    constructor(public payload: string) { }
}

export class SelectHero implements Action {
    readonly type = HeroesActionTypes.SelectHero;
    constructor(public payload: number) { }
}

export class SelectHeroSuccess implements Action {
    readonly type = HeroesActionTypes.SelectHeroSuccess;
    constructor(public payload: Hero) { }
}

export class SelectHeroFailed implements Action {
    readonly type = HeroesActionTypes.SelectHeroFailed;
    constructor(public payload: string) { }
}

export class AddHero implements Action {
    readonly type = HeroesActionTypes.AddHero;
    constructor(public payload: string) { }
}

export class AddHeroSuccess implements Action {
    readonly type = HeroesActionTypes.AddHeroSuccess;
    constructor(public payload: Hero) { }
}

export class AddHeroFailed implements Action {
    readonly type = HeroesActionTypes.AddHeroFailed;
    constructor(public payload: string) { }
}

export class DeleteHero implements Action {
    readonly type = HeroesActionTypes.DeleteHero;
    constructor(public payload: Hero) { }
}

export class DeleteHeroSuccess implements Action {
    readonly type = HeroesActionTypes.DeleteHeroSuccess;
    constructor(public payload: Hero) { }
}

export class DeleteHeroFailed implements Action {
    readonly type = HeroesActionTypes.DeleteHeroFailed;
    constructor(public payload: string) { }
}

export class UpdateHero implements Action {
    readonly type = HeroesActionTypes.UpdateHero;
    constructor(public payload: Hero) { }
}

export class UpdateHeroSuccess implements Action {
    readonly type = HeroesActionTypes.UpdateHeroSuccess;
    constructor(public payload: Hero) { }
}

export class UpdateHeroFailed implements Action {
    readonly type = HeroesActionTypes.UpdateHeroFailed;
    constructor(public payload: string) { }
}

export type HeroesActions =
    | LoadHeroes
    | LoadHeroesSuccess
    | LoadHeroesFailed
    | LoadTopHeroes
    | LoadTopHeroesSuccess
    | LoadTopHeroesFailed
    | SelectHero
    | SelectHeroSuccess
    | SelectHeroFailed
    | AddHero
    | AddHeroSuccess
    | AddHeroFailed
    | DeleteHero
    | DeleteHeroSuccess
    | DeleteHeroFailed
    | UpdateHero
    | UpdateHeroSuccess
    | UpdateHeroFailed;
