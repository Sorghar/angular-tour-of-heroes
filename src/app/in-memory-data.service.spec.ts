import { TestBed } from '@angular/core/testing';

import { InMemoryDataService } from './in-memory-data.service';

describe('InMemoryDataService', () => {
    let svc: InMemoryDataService;

    const heroes = [
        { id: 11, name: 'Dr Nice' },
        { id: 12, name: 'Narco' },
        { id: 13, name: 'Bombasto' },
        { id: 14, name: 'Celeritas' },
        { id: 15, name: 'Magneta' },
        { id: 16, name: 'RubberMan' },
        { id: 17, name: 'Dynama' },
        { id: 18, name: 'Dr IQ' },
        { id: 19, name: 'Magma' },
        { id: 20, name: 'Tornado' }
    ];

    beforeEach(() => {
        TestBed.configureTestingModule({});
        svc = TestBed.get(InMemoryDataService);
    });

    it('should be created', () => {
        expect(svc).toBeTruthy();
    });

    it('should return default heroes list', () => {
        expect(svc.createDb()).toEqual({ heroes });
    });

    it('should generate initial ID for empty collection', () => {
        expect(svc.genId([])).toBe(11);
    });

    it('should generate new ID for filled collection', () => {
        const testHeroes = [
            { id: 23, name: 'Hero 1'},
            { id: 24, name: 'Hero 2'}
        ];
        expect(svc.genId(testHeroes)).toBe(25);
    });
});
