import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { GifService } from './gif.service';

@Injectable({
  providedIn: 'root'
})
export class RouterService {


  constructor(
    private router: Router,
    private gifService: GifService
  ) { 

    // Checks if there was directs or redirects
    this.router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe(() => {

      const url = decodeURI(router.url.slice(1))
      
      if(url == '') 
        return gifService.resetGifs()

      this.gifService.fetchGifs(url)
      
    })
    
  }

  redirect(site: string) {
    this.router.navigate([site])
  }
  
}
