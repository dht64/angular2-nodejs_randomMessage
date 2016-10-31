import { Component } from '@angular/core';
import { Message } from './message.model';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.template.html'
})
export class AppComponent {
    messages: Message[] = [
    ];

    onAddMessage() {
    	const rnd = Math.ceil(Math.random() * 100);
    	const message = new Message(rnd + ' is an awesome number!');
    	this.messages.push(message);
    }
}