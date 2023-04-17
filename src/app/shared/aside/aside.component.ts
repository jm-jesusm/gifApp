import { Component } from '@angular/core';
import { Search } from 'src/app/interfaces/search';
import { GifService } from 'src/app/services/gif.service';


@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent {

  constructor(public gifService: GifService) { }

}
