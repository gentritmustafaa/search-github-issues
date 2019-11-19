import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {IconsModule} from './icons/icons.module';
import {AppComponent} from './app.component';
import {SearchScreenComponent} from './pages/search-screen/search-screen.component';
import {DropdownComponent} from './components/dropdown/dropdown.component';
import {HttpClientModule} from '@angular/common/http';
import {ApolloModule} from 'apollo-angular';
import {HttpLinkModule} from 'apollo-angular-link-http';
import {GraphQLModule} from './graphql-module/graphql.module';
import { IssueCardComponent } from './components/issue-card/issue-card.component';
import { IssueDetailsComponent } from './pages/issue-details/issue-details.component';
import { FormsModule } from '@angular/forms';
import { CommentComponent } from './components/comment/comment.component';
import { IssueInteractionsComponent } from './components/issue-interactions/issue-interactions.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchScreenComponent,
    DropdownComponent,
    IssueCardComponent,
    IssueDetailsComponent,
    CommentComponent,
    IssueInteractionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsModule,
    HttpClientModule,
    HttpLinkModule,
    ApolloModule,
    GraphQLModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule {
}
