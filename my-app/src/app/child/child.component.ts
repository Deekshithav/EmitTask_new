import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <div class="notification is-primary">
    <h1> child </h1>
  
  Message sent from parent from @Input: {{inputMessage}}
   
    <button (click)="sendMessage()" class="button">Send Message</button>
    </div>
  `,
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {

  @Input() inputMessage: string;

  message:string = "Hello from Child to parent on click"

  @Output() messageEvent =  new EventEmitter<string>();

  constructor() { } 

  sendMessage(){
    this.messageEvent.emit(this.message); 
  }

}
