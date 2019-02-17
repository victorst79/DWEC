import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  public books;

  constructor(private http: HttpClient) { 
    this.http.get('https://fakerestapi.azurewebsites.net/api/Books').subscribe(data => {
      this.books = data;
    });
  }

  ngOnInit() {
  }

}
