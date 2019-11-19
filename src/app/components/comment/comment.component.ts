import {Component, OnInit, Input} from '@angular/core';

import distance from 'date-fns/formatDistance';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  @Input() comment: any;

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
