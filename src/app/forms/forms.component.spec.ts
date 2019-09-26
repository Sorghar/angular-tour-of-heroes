import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsComponent } from './forms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NameEditorComponent } from '../name-editor/name-editor.component';
import { ProfileEditorComponent } from '../profile-editor/profile-editor.component';

describe('FormsComponent', () => {
    let component: FormsComponent;
    let fixture: ComponentFixture<FormsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                ReactiveFormsModule
            ],
            declarations: [
                FormsComponent,
                NameEditorComponent,
                ProfileEditorComponent
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FormsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
