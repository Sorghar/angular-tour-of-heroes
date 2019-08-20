import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

/** Displays a list of heroes */
@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

    /** A collection of available heroes */
    heroes: Hero[];

    constructor(
        private heroService: HeroService,
        private messageService: MessageService) { }

    /** Component initialization */
    ngOnInit() {
        // fill the heroes collection
        this.getHeroes();
    }

    /** Initializes the heroes collection - fetches the available heroes and stores them */
    getHeroes() {
        this.heroService.getHeroes().subscribe(fetchedHeroes => this.heroes = fetchedHeroes,
            err => this.messageService.add('Heroes: Error during emission: ' + err),
            () => this.messageService.add('Heroes: All values emitted.'));
    }

    /** Adds a new Hero */
    add(name: string) {
        name = name.trim();
        if (!name) { return; }

        this.heroService.addHero({ name } as Hero).subscribe(hero => this.heroes.push(hero));
    }

    /** Deletes the provided Hero */
    delete(hero: Hero) {
        this.heroService.deleteHero(hero).subscribe(() => this.heroes = this.heroes.filter(h => h !== hero));
    }
}
