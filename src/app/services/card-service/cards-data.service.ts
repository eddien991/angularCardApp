import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardsDataService {
  // tslint:disable-next-line:no-inferrable-types
  private cardsUrl: string = 'https://online.idfunction.com/api/v1/cards';

  constructor(private http: HttpClient) { }

  getCardsData() {
    return this.http.get(this.cardsUrl, {
        responseType: 'text',
        observe: 'response'
    });
  }
}
