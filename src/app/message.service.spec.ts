import { TestBed } from '@angular/core/testing';

import { MessageService } from './message.service';

describe('MessageService', () => {
    let svc: MessageService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        svc = TestBed.get(MessageService);
    });

    it('should be created', () => {
        expect(svc).toBeTruthy();
    });

    it('should add message', () => {
        svc.add('test message');
        expect(svc.messages.length).toBe(1);
    });

    it('should clear messages', () => {
        svc.add('test message');
        svc.clear();
        expect(svc.messages.length).toBe(0);
    });
});
