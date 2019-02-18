import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  public books;

  constructor(private api: DatosService) { 
    this.books = api.getBooks();  
  }

  ngOnInit() {
  }

}
