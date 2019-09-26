import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HeroSearchComponent } from '../hero-search/hero-search.component';
import { StoreModule } from '@ngrx/store';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { reducer } from '../state/heroes.reducer';
import { EffectsModule } from '@ngrx/effects';
import { HeroEffects } from '../state/heroes.effetcs';

describe('DashboardComponent', () => {
    let component: DashboardComponent;
    let fixture: ComponentFixture<DashboardComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                ReactiveFormsModule,
                RouterTestingModule,
                StoreModule.forRoot({}),
                StoreModule.forFeature('heroes', reducer),
                EffectsModule.forRoot([]),
                EffectsModule.forFeature([HeroEffects]),
                HttpClientTestingModule
            ],
            declarations: [
                DashboardComponent,
                HeroSearchComponent
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DashboardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
