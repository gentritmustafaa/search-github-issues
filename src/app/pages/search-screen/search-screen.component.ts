import {Component, OnInit} from '@angular/core';
import {Apollo} from 'apollo-angular';
import {Observable} from 'rxjs';
import gql from 'graphql-tag';
import {map} from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-search-screen',
  templateUrl: './search-screen.component.html',
  styleUrls: ['./search-screen.component.scss']
})
export class SearchScreenComponent implements OnInit {

  chosenSearchCriteria: any = 'all';
  pageInfo: any;
  totalIssues = null;
  fetchedIssuesLength: number;
  issues: Observable<any>;
  searchText = '';

  searchItems = [{
    text: 'Open Issues',
    value: 'is:open'
  }, {
    text: 'Closed Issues',
    value: 'is:closed'
  },
    {
      text: 'All Issues',
      value: 'all'
    }];

  constructor(
    private apollo: Apollo,
    private route: ActivatedRoute,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.searchIssues('all', null);
  }

  searchIssues(event, step) {
    this.chosenSearchCriteria = event;
    let nextCursor;
    let previousCursor;

    if (step === 'previous') {
      nextCursor = this.pageInfo.startCursor;
    } else if (step === 'next') {
      previousCursor = this.pageInfo.endCursor;
    }


    this.issues = this.apollo.watchQuery<any>({
      query: gql`
        query($query:String!, $nextCursor: String, $previousCursor: String){
          search(query: $query, type: ISSUE, last: 20, after: $previousCursor, before: $nextCursor) {
            issueCount
            pageInfo {
              startCursor
              endCursor
              hasNextPage
              hasPreviousPage
            }
            edges {
              node {
                ... on Issue {
                  title
                  closed
                  number
                  createdAt
                  labels(first: 5) {
                    edges {
                      node {
                        name
                      }
                    }
                  }
                  comments {
                    totalCount
                  }
                  author {
                    avatarUrl
                    login
                  }
                  id
                  title
                  url
                }
              }
            }
          }
        }
      `,
      variables: {
        query: this.chosenSearchCriteria === 'all' ? `is:issue repo:angular/angular ${this.searchText}` : `is:issue ${this.chosenSearchCriteria} repo:angular/angular ${this.searchText}`,
        nextCursor,
        previousCursor,
      }
    })
    .valueChanges
    .pipe(
      map(res => {
        this.fetchedIssuesLength = res.data.search.edges.length;
        this.totalIssues = res.data.search.issueCount;
        this.pageInfo = res.data.search.pageInfo;
        return res.data.search.edges;
      })
    );
  }

  getSpecificIssue(issue) {
    this.router.navigate(['/issue/', issue.node.id]);
  }
}
