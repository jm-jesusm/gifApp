import { Component, ElementRef, ViewChild } from '@angular/core';

import { RouterService } from 'src/app/services/router.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent {

  constructor(private routerService: RouterService) {}
  
  @ViewChild('searchInput') input!: ElementRef<HTMLInputElement>

  redirect() {
    const trackedInput = this.input.nativeElement
    this.routerService.redirect(trackedInput.value)
    trackedInput.value = ''
  }
}
