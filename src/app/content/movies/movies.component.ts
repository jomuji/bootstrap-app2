import { Component, OnInit } from '@angular/core';
import { NewestComponent } from './newest.component';

@Component({
  moduleId: module.id,
  selector: 'app-movies',
  templateUrl: 'movies.component.html',
  directives: [NewestComponent]
})
export class MoviesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
