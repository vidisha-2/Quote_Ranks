import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddauthorComponent } from './addauthor/addauthor.component';
import { AddquoteComponent } from './addquote/addquote.component';
import { EditauthorComponent } from './editauthor/editauthor.component';
import { HomeComponent } from './home/home.component';
import { ShowauthorComponent } from './showauthor/showauthor.component';
import { ShowquotesComponent } from './showquotes/showquotes.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'new', component: AddauthorComponent },
  { path: 'edit/:id', component: EditauthorComponent },
  { path: 'home', component: HomeComponent },
  { path: 'quotes', component: ShowquotesComponent },
  { path: 'write', component: AddquoteComponent },
  { path: '', pathMatch:'full', redirectTo:'/home' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
