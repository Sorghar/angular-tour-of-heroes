import { TestBed } from '@angular/core/testing';

import { TodoService } from './todo.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { Todo } from './todo';
import { of } from 'rxjs';

describe('TodoService', () => {
    let httpClientSpy: any;

    beforeEach(() => {
        httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);

        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
            ],
            providers: [
                TodoService,
                { provide: HttpClient, useValue: httpClientSpy }
            ]
        });
    });

    it('should be created', () => {
        const service: TodoService = TestBed.get(TodoService);
        expect(service).toBeTruthy();
    });

    it('should return todos from a spy', () => {
        const todos: Todo[] = [
            new Todo(),
            new Todo()
        ];
        const service: TodoService = TestBed.get(TodoService);
        httpClientSpy.get.and.returnValue(of(todos));

        service.getTodos().subscribe(t => expect(t).toEqual(todos));
    });
});
