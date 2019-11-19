import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SearchScreenComponent} from './pages/search-screen/search-screen.component';
import {IssueDetailsComponent} from './pages/issue-details/issue-details.component';


const routes: Routes = [
  {path: '', component: SearchScreenComponent},
  {path: 'issue/:id', component: IssueDetailsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
