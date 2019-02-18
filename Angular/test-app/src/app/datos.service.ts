import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  public dataExample = ['jose', 'paco', 'luis'];
  private books;

  constructor(private http: HttpClient) {
    this.http.get('https://fakerestapi.azurewebsites.net/api/Books').subscribe(data => {
      this.books = data;
    });
   }

   getBooks(){
     return this.books;
   }
}
