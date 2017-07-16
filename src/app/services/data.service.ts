import { Injectable } from '@angular/core';
import {Question} from '../models/Question';

@Injectable()
export class DataService {
  questions:Question[];

  constructor() {
    this.questions = [
      {
        text: 'What is your name?',
        answer: 'My name is Michael',
        hide:true
      },
      {
        text: 'What is your favorite color?',
        answer: 'Red',
        hide:true
      }
    ];

   }
   getQuestions(){
     return this.questions;
   }
   addQuestion(question:Question){
      this.questions.unshift(question);
    }
   removeQuestion(question:Question){
     console.log("removing " + question.text);
     for(let i=0;i < this.questions.length;i++)
      {
          if(question.text ==  this.questions[i].text)
            {
              console.log("found match" + this.questions[i].text + " " + i);
              
              this.questions.splice(i,1);
            }
      }
   }
}
