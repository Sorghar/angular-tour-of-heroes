import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css']
})
export class NameEditorComponent {
    // class property with a new instance of the form control class - basic building block of reactive forms
    name = new FormControl(''); // initial value is an empty string

    updateName() {
        this.name.setValue('Test');
    }
}
