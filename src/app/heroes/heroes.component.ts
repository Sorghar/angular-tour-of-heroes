import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit 
{
  // collection of available heroes
  heroes = HEROES;

  // currently displayed hero detail
  selectedHero: Hero;
  
  constructor() { }

  ngOnInit() { }

  onSelect(hero: Hero): void 
  {
    this.selectedHero = hero;
  }

}
