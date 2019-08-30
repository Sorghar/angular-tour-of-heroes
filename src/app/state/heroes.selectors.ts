import { createSelector, createFeatureSelector } from '@ngrx/store';
import { HeroesState } from './heroes.state';

const getHeroesFeatureState = createFeatureSelector<HeroesState>('heroes');

export const getAllHeroes = createSelector(getHeroesFeatureState, (state) => state.heroes);
export const getTopHeroes = createSelector(getHeroesFeatureState, (state) => state.topHeroes);
export const getSelectedHero = createSelector(getHeroesFeatureState, (state) => state.selectedHero);
