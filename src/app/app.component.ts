import { Component } from '@angular/core';
import { CarouselComponent } from './carousel';
import { ContentComponent } from './content';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  directives: [CarouselComponent, ContentComponent]
})
export class AppComponent {
  title = 'app works!';
}
