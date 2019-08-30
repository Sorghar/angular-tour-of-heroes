import { initialState, HeroesState } from './heroes.state';
import { HeroesActions, HeroesActionTypes } from './heroes.actions';


export function reducer(state = initialState, action: HeroesActions): HeroesState {
    switch (action.type) {
        case HeroesActionTypes.LoadHeroesSuccess:
            return {
                ...state,
                heroes: action.payload,
            };

        case HeroesActionTypes.LoadHeroesFailed:
            return {
                ...state,
                heroes: []
            };

        case HeroesActionTypes.LoadTopHeroesSuccess:
            return {
                ...state,
                topHeroes: action.payload
            };

        case HeroesActionTypes.LoadTopHeroesFailed:
            return {
                ...state,
                topHeroes: []
            };

        case HeroesActionTypes.SelectHeroSuccess:
            return {
                ...state,
                selectedHero: action.payload
            };

        case HeroesActionTypes.SelectHeroFailed:
            return {
                ...state,
                selectedHero: null
            };

        case HeroesActionTypes.AddHeroSuccess:
            return {
                ...state,
                heroes: [...state.heroes, action.payload],
            };

        case HeroesActionTypes.AddHeroFailed:
            return {
                ...state
            };

        case HeroesActionTypes.DeleteHeroSuccess:
            return {
                ...state,
                heroes: [...state.heroes].filter(h => h !== action.payload),
            };

        case HeroesActionTypes.UpdateHeroSuccess:
            const newHeroes = [...state.heroes];
            const heroIndex = newHeroes.findIndex(h => h.id === action.payload.id);
            newHeroes[heroIndex] = action.payload;

            return {
                ...state,
                heroes: newHeroes,
                selectedHero: action.payload
            };

        default:
            return state;
    }
}
