import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Gif } from '../interfaces/gif';
import { Search } from '../interfaces/search';

@Injectable({
  providedIn: 'root'
})
export class GifService {

  private apiKey     : string = 'CtbSNZMFPFlbWl1x5KQjtqPOHnE1ema5';
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';
  private _history!: Search[];

  private results: Gif[] = []

  constructor(private http: HttpClient) {
    this._history = localStorage.getItem('history') == null ? [] : JSON.parse(localStorage.getItem('history')!) 
  }

  async fetchGifs(query: string) {

    this.resetGifs()

    const params = new HttpParams()
          .set('api_key', this.apiKey)
          .set('limit', '10')
          .set('q', query );

    this.http.get(`${ this.serviceUrl }/search`, { params }).subscribe((resp: any) => {

      resp.data.map((item: any) => this.results.push(this.processGifData(item)))

    });

    this.addToHistory(query)
  }

  addToHistory(keyword: string) {

    this._history = this._history.filter((item) =>  item.keyword != keyword );
    this._history.unshift({ keyword: keyword })
    localStorage.setItem('history', JSON.stringify(this._history))

  }
  
  processGifData(jsonObject: any) {

    const url = `https://i.giphy.com/media/${jsonObject.id}/giphy.webp`
    const title = jsonObject.title

    return { url: url, title: title} as Gif;

  }

  get gifs() {
    return this.results
  }

  get history() {
    return this._history.slice(0,10)
  }

  resetGifs() {
    this.results = []
  }

}
