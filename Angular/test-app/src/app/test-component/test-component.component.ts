import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

  testFunction() {
    alert('WORKING');
  }

  
}
