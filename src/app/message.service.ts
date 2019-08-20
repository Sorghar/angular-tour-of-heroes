import { Injectable } from '@angular/core';

/** A service that stores messages. */
@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];

  /** Adds a new message to the service storage. */
  add(message: string) {
    this.messages.push(new Date().toLocaleTimeString() + ' | ' + message);
  }

  /** Clears all stored messages. */
  clear() {
    this.messages = [];
  }
}
