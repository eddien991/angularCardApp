import { Component, OnInit } from '@angular/core';
import { CardsDataService } from '../../services/card-service/cards-data.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor(private cardsDataService: CardsDataService) { }

  ngOnInit() {
    // console.log('cardsDataService', this.cardsDataService.getCardsData());
    this.cardsDataService.getCardsData().subscribe((data: any) => {
      console.log('test', data);
    });
  }
}
