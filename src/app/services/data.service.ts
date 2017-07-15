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

}
