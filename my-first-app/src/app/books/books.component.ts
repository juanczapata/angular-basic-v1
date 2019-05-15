import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  //selector: '[app-books]',
  //selector: '.app-books',
  template: `
    <app-book></app-book>
    <app-book></app-book>`,
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
