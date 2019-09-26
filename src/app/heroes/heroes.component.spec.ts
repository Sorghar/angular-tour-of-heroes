import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesComponent } from './heroes.component';
import { StoreModule } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';
import { EffectsModule } from '@ngrx/effects';
import { HeroEffects } from '../state/heroes.effetcs';
import { reducer } from '../state/heroes.reducer';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('HeroesComponent', () => {
    let component: HeroesComponent;
    let fixture: ComponentFixture<HeroesComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                StoreModule.forRoot({}),
                StoreModule.forFeature('heroes', reducer),
                EffectsModule.forRoot([]),
                EffectsModule.forFeature([HeroEffects]),
                HttpClientTestingModule
            ],
            declarations: [
                HeroesComponent
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HeroesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
