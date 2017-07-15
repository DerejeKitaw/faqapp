import { Component, OnInit, Input } from '@angular/core';
import { Question} from '../../models/Question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input('question') question:Question; //notice we had to add Input to import above!
  constructor() { }

  ngOnInit() {
  }

}
