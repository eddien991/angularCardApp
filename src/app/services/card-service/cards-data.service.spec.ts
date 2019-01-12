import { TestBed, inject } from '@angular/core/testing';

import { CardsDataService } from './cards-data.service';

describe('CardsDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CardsDataService]
    });
  });

  it('should be created', inject([CardsDataService], (service: CardsDataService) => {
    expect(service).toBeTruthy();
  }));
});
