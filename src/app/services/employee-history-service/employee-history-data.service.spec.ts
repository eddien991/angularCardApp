import { TestBed, inject } from '@angular/core/testing';

import { EmployeeHistoryDataService } from './employee-history-data.service';

describe('EmployeeHistoryDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeeHistoryDataService]
    });
  });

  it('should be created', inject([EmployeeHistoryDataService], (service: EmployeeHistoryDataService) => {
    expect(service).toBeTruthy();
  }));
});
