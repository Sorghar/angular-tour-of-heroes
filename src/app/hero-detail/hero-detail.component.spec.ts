import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDetailComponent } from './hero-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducer } from '../state/heroes.reducer';
import { HeroEffects } from '../state/heroes.effetcs';

describe('HeroDetailComponent', () => {
    let component: HeroDetailComponent;
    let fixture: ComponentFixture<HeroDetailComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                ReactiveFormsModule,
                RouterTestingModule,
                HttpClientTestingModule,
                StoreModule.forRoot({}),
                StoreModule.forFeature('heroes', reducer),
                EffectsModule.forRoot([]),
                EffectsModule.forFeature([HeroEffects]),
            ],
            declarations: [
                HeroDetailComponent
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HeroDetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
