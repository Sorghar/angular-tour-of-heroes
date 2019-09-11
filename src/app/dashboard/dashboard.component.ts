import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { Todo } from '../todo';
import { Store, select } from '@ngrx/store';
import { HeroesState } from '../state/heroes.state';
import * as HeroesAction from '../state/heroes.actions';
import { getTopHeroes } from '../state/heroes.selectors';
import { Observable } from 'rxjs';
import { TodoService } from '../todo.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    public heroes$: Observable<Hero[]>;
    public todos$: Observable<Todo[]>;

    constructor(
        private store: Store<HeroesState>,
        private todoService: TodoService) { }

    ngOnInit() {
        this.heroes$ = this.store.pipe(select(getTopHeroes));
        this.store.dispatch(new HeroesAction.LoadTopHeroes());
        this.todos$ = this.todoService.getTodos();
    }
}
