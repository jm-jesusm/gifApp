import { Component } from '@angular/core';
import { GifService } from 'src/app/services/gif.service';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent{
  constructor(public gifService:GifService) { }
}
