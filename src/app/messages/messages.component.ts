import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
    selector: 'app-messages',
    templateUrl: './messages.component.html',
    styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

    // messageService must be public, binding only works on public properties
    constructor(public messageService: MessageService) { }

    messagesVisible: boolean;
    visibilityCaption: string;

    ngOnInit() {
        this.messagesVisible = true;
        this.visibilityCaption = 'Hide messages';
    }

    toggleVisibility() {
        this.messagesVisible = !this.messagesVisible;
        this.visibilityCaption = this.visibilityCaption === 'Hide messages' ? 'Show messages' : 'Hide messages';
    }

}
