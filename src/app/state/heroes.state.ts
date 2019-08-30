import { Hero } from '../hero';


export interface HeroesState {
    heroes: Hero[];
    topHeroes: Hero[];
    selectedHero: Hero;
}

export const initialState: HeroesState = {
    heroes: [],
    topHeroes: [],
    selectedHero: null
};
