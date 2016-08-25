import { Component } from '@angular/core';
import { CarouselComponent } from './carousel';
import { ContentComponent } from './content';
import { AlertComponent } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  //templateUrl: 'app.component.html',
  template: '<alert type="info">ng2-bootstrap hello world!</alert>',
  //directives: [CarouselComponent, ContentComponent]
  directives: [AlertComponent]
})
export class AppComponent {
  title = 'app works!';
}
