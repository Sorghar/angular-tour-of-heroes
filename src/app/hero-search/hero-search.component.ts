import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
    selector: 'app-hero-search',
    templateUrl: './hero-search.component.html',
    styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {

    /** heroes found as a search result */
    heroes$: Observable<Hero[]>;
    /** Subject is a special Observable allowing multicasting emitted values to multiple observers.
     * A Subject is both a source of observable values and an Observable itself.
     */
    private searchTerms = new Subject<string>();

    constructor(private heroService: HeroService) { }

    ngOnInit() {
         this.heroes$ = this.searchTerms.pipe(
            debounceTime(300), // wait 300ms after each keystroke before considering the term
            distinctUntilChanged(), // ignore new term if same as previous term
            switchMap((term: string) => this.heroService.searchHeroes(term)) // switch to new search observable each time the term changes
        );
    }

    search(term: string) {
         this.searchTerms.next(term); // emit a value into the observable stream
    }

}
