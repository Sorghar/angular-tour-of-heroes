import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
    selector: 'app-profile-editor',
    templateUrl: './profile-editor.component.html',
    styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {

    constructor(private formBuilder: FormBuilder) { }

    get aliases(): FormArray {
        return this.profileForm.get('aliases') as FormArray;
    }

    profileForm = this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: [''],
        address: this.formBuilder.group({
            street: [''],
            city: [''],
            state: [''],
            zip: ['']
        }),
        aliases: this.formBuilder.array([this.formBuilder.control('')])
    });

    ngOnInit() {

    }

    onSubmit() {
        // TODO: Use EventEmitter with form value
        console.warn(this.profileForm.value);
        this.profileForm.reset();
    }

    updateProfile() {
        this.profileForm.patchValue({
            firstName: 'Nancy',
            address: {
                street: '123 Drew Street'
            }
        });
    }

    addAlias() {
        this.aliases.push(this.formBuilder.control(''));
    }
}
