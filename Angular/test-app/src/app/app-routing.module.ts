import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponentComponent } from './test-component/test-component.component';
import { BooksComponent } from './books/books.component';

const routes: Routes = [
  { path: 'api', component: BooksComponent},
  { path: 'test', component: TestComponentComponent},
  { path: '',   redirectTo: '/test', pathMatch: 'full' },
  { path: '**', redirectTo: '/test' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
