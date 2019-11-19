import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import gql from 'graphql-tag';
import {Apollo} from 'apollo-angular';
import distance from 'date-fns/formatDistance';

@Component({
  selector: 'app-issue-details',
  templateUrl: './issue-details.component.html',
  styleUrls: ['./issue-details.component.scss']
})
export class IssueDetailsComponent implements OnInit {

  issue: any;
  issueDetails: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private apollo: Apollo) {
  }

  ngOnInit() {
    this.getIssueDetails(this.route.snapshot.params.id);
  }

  getIssueDetails(issueId) {

    this.apollo.watchQuery<any>({
      query: gql`
        query($id: ID!) {
          node(id:$id) {
            ... on Issue {
              title
              body
              bodyHTML
              closed
              closedAt
              createdAt
              number
              author {
                login,
                avatarUrl
              }
              assignees(first: 10) {
                edges {
                  node {
                    name
                  }
                }
              }
              labels(first: 10) {
                edges {
                  node {
                    name
                    createdAt
                  }
                }
              }
              participants(first: 10) {
                edges {
                  node {
                    avatarUrl
                  }
                }
              }
              comments(first: 100) {
                totalCount
                edges {
                  node {
                    author {
                      avatarUrl
                      login
                    }
                    body
                    bodyHTML
                    createdAt
                  }
                }
              }
            }
          }
        }
      `,
      variables: {
        id: issueId
      }
    })
    .valueChanges
    .subscribe(res => {
        this.issueDetails = {
          node: {
            author: {
              ...res.data.node.author
            },
            bodyHTML: res.data.node.bodyHTML,
            createdAt: res.data.node.createdAt
          }
        };
        this.issue = res.data.node;
      }
    );
  }

  goBack() {
    this.router.navigate(['/']);
  }

  showDate(date) {
    return distance(
      new Date(date),
      new Date()
    );
  }
}
