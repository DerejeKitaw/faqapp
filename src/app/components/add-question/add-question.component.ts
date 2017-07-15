import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Question } from '../../models/Question';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  //remember to update app.module.ts with import for FormsModule
  @Output() questionAdded = new EventEmitter<Question>(); //added note Output,EventEmitter addedto imports above
  text:string;
  answer:string;
  constructor() { }

  ngOnInit() {

  }

  addQuestion(){
      this.questionAdded.emit({text:this.text,answer:this.answer,hide:true});
  }

}
