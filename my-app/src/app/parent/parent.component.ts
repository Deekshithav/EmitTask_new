import { Component} from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
  <h1> Parent </h1>
  Message from child using emit function: {{message}}
    <app-child (messageEvent)="recieveMessage($event)" [inputMessage]="parentMessage"></app-child>
    
   
    
  `,
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent{
  
  parentMessage = "message from parent to child"
  
  constructor() { }
  message:string;
  recieveMessage($event){

    this.message=$event;
    //console.log("recieveMessage");
  }
}