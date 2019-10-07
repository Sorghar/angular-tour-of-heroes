import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class HeroService {

    constructor(
        private msgService: MessageService,
        private http: HttpClient) { }

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    /**
     * Returns an observable that emits a single value: a collection of available heroes.
     */
    getHeroes(): Observable<Hero[]> {
        this.log('Fetching all heroes.');
        return this.http.get<Hero[]>(this.createApiUrl('heroes')).pipe(
            tap(() => this.log('Fetched all heroes.')),
            catchError(this.handleError<Hero[]>('getHeroes', [])));
    }

    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            this.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

    /** Returns an observable that emits a single value: a hero matching the provided id. */
    getHero(id: number): Observable<Hero> {
        const url = `${this.createApiUrl('heroes')}/${id}`;
        this.log(`Fetching hero id=${id}.`);
        return this.http.get<Hero>(url).pipe(
            tap(() => this.log(`Fetched hero id=${id}`)),
            catchError(this.handleError<Hero>(`getHero id=${id}`)));
    }

    /** PUT: update an existing hero on the server */
    updateHero(hero: Hero): Observable<any> {
        const url = `${this.createApiUrl('heroes')}/${hero.id}`;
        return this.http.put(url, hero, this.httpOptions).pipe(
            tap(() => this.log(`updated hero id=${hero.id}`)),
            catchError(this.handleError<any>('updateHero')));
    }

    /** POST: add a new hero to the server */
    addHero(heroName: string): Observable<Hero> {
        return this.http.post<Hero>(this.createApiUrl('heroes'), {name: heroName} as Hero, this.httpOptions).pipe(
            tap((newHero: Hero) => this.log(`added hero with id=${newHero.id}`)),
            catchError(this.handleError<Hero>('addHero')));
    }

    /** DELETE: delete the specified hero from the server */
    deleteHero(hero: Hero): Observable<Hero> {
        const id = typeof hero === 'number' ? hero : hero.id;
        const url = `${this.createApiUrl('heroes')}/${id}`;

        return this.http.delete<Hero>(url, this.httpOptions).pipe(
            tap(_ => this.log(`deleted hero id=${id}`)),
            catchError(this.handleError<Hero>('deleteHero'))
        );
    }

    /* GET heroes whose name contains search term */
    searchHeroes(term: string): Observable<Hero[]> {
        if (!term.trim()) {
            // if the search term is empty/whitespace, return empty hero array.
            return of([]);
        }

        return this.http.get<Hero[]>(`${this.createApiUrl('heroes')}/?name=${term}`).pipe(
            tap(_ => this.log(`found heroes matching "${term}"`)),
            catchError(this.handleError<Hero[]>('searchHeroes', []))
        );
    }

    /** Log a HeroService message with the MessageService */
    private log(message: string) {
        this.msgService.add(`HeroService: ${message}`);
    }

    private createApiUrl(controllerName: string, methodAndParameters?: string): string {
        const apiUrl = `${environment.apiUrl}/api/${controllerName}`;
        if (methodAndParameters) {
            return `${apiUrl}/${methodAndParameters}`;
        }
        return apiUrl;
    }
}
