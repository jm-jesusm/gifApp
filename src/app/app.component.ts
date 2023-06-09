import { Component } from '@angular/core';
import { RouterService } from './services/router.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private routerService: RouterService) {}

  title = 'gifApp';
}
