import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-profile-editor',
    templateUrl: './profile-editor.component.html',
    styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent {

    constructor(private formBuilder: FormBuilder) { }

    profileForm = this.formBuilder.group({
        firstName: '',
        lastName: '',
        address: this.formBuilder.group({
            street: '',
            city: '',
            state: '',
            zip: ''
        })
    });

    onSubmit() {
        // TODO: Use EventEmitter with form value
        console.warn(this.profileForm.value);
    }
}
