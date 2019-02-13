import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {
  public todos = [1, 2, 3, 4, 5];
  public testLabel;
  public title = 'title';
  public testSwitch = 1;

  constructor(private http: HttpClient) { 
    this.http.get('https://fakerestapi.azurewebsites.net/api/Books').subscribe(data => {
      console.log(data);
    });
  }

  ngOnInit() {
  }

  testFunction() {
    alert('WORKING');
  }
}
