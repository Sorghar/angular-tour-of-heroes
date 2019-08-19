import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

/**
 * Displays a list of heroes
 */
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  /**
   * A collection of available heroes
   */
  heroes: Hero[];

  /**
   * Currently displayed hero detail
   */
  selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  /**
   * Component initialization
   */
  ngOnInit() {
      // fill the heroes collection
      this.getHeroes();
   }

  /**
   * Handles the event of clicking on a hero in the heroes list and sets the currently selected hero to the hero clicked
   * @param hero A hero that was clicked and thus becomes selected
   */
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  /**
   * Initializes the heroes collection - fetches the available heroes and stores them
   */
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(fetchedHeroes => this.heroes = fetchedHeroes,
                                           err => console.log('Error during emission: ' + err),
                                           () => console.log('All values emitted.'));
  }
}
