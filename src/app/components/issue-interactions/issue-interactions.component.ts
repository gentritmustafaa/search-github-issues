import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-issue-interactions',
  templateUrl: './issue-interactions.component.html',
  styleUrls: ['./issue-interactions.component.scss']
})
export class IssueInteractionsComponent implements OnInit {

  @Input() item: any;
  @Input() showForm: string;
  @Input() title: string;

  constructor() {
  }

  ngOnInit() {
  }

}
