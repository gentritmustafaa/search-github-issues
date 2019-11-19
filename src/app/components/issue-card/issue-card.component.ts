import {Component, Input, OnInit} from '@angular/core';
import distance from 'date-fns/formatDistance';

@Component({
  selector: 'app-issue-card',
  templateUrl: './issue-card.component.html',
  styleUrls: ['./issue-card.component.scss']
})
export class IssueCardComponent implements OnInit {

  @Input() issue: any;

  constructor() {
  }

  ngOnInit() {
  }

  showDate(date) {
    return distance(
      new Date(date),
      new Date()
    );
  }

}
