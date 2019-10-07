import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { HeroService } from './hero.service';
import { HttpClient } from '@angular/common/http';
import { Hero } from './hero';
import { of } from 'rxjs';

describe('HeroService', () => {
    const httpClientSpy: any = jasmine.createSpyObj('HttpClient', ['get', 'put', 'post', 'delete']);

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
            ],
            providers: [
                HeroService,
                { provide: HttpClient, useValue: httpClientSpy }
            ]
        });
    });

    it('should be created', () => {
        const service: HeroService = TestBed.get(HeroService);
        expect(service).toBeTruthy();
    });

    it('should return all heroes from a spy', () => {
        const heroes: Hero[] = [
            { id: 1, name: 'Hero 1' },
            { id: 2, name: 'Hero 2' }
        ];
        const service: HeroService = TestBed.get(HeroService);
        httpClientSpy.get.and.returnValue(of(heroes));

        service.getHeroes().subscribe(h => expect(h).toEqual(heroes));
    });

    it('should return a hero from a spy', () => {
        const heroes: Hero[] = [
            { id: 1, name: 'Hero 1' },
            { id: 2, name: 'Hero 2' }
        ];
        const service: HeroService = TestBed.get(HeroService);
        httpClientSpy.get.withArgs('https://localhost:5001/api/heroes/1').and.returnValue(of(heroes[0]))
            .withArgs('https://localhost:5001/api/heroes/2').and.returnValue(of(heroes[1]));

        service.getHero(1).subscribe(h => expect(h).toEqual(heroes[0]));
        service.getHero(2).subscribe(h => expect(h).toEqual(heroes[1]));
    });

    it('should return null on hero update', () => {
        const service: HeroService = TestBed.get(HeroService);
        httpClientSpy.put.and.returnValue(of(null));

        service.updateHero({ id: 1, name: 'Hero 1' } as Hero).subscribe(x => expect(x).toBe(null));
    });

    it('should add a new hero and return it', () => {
        const service: HeroService = TestBed.get(HeroService);
        const hero: Hero = { id: 42, name: 'Test Hero' };
        httpClientSpy.post.and.returnValue(of(hero));

        service.addHero('Test Hero').subscribe(h => expect(h).toEqual(hero));
    });

    it('should delete a hero and return it', () => {
        const service: HeroService = TestBed.get(HeroService);
        const hero: Hero = { id: 42, name: 'Test Hero' };
        httpClientSpy.delete.and.returnValue(of(hero));

        service.deleteHero(hero).subscribe(h => expect(h).toEqual(hero));
    });

    it('should return heroes search results', () => {
        const service: HeroService = TestBed.get(HeroService);
        const heroes: Hero[] = [
            { id: 1, name: 'Hero 1' },
            { id: 2, name: 'Hero 2' }
        ];
        httpClientSpy.get.and.returnValue(of(heroes));

        service.searchHeroes('Hero').subscribe(h => expect(h).toEqual(heroes));
    });
});
