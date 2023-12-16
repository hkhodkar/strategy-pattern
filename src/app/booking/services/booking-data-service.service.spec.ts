import { TestBed } from '@angular/core/testing';

import { BookingDataService } from './booking-data-service.service';

describe('NeoBookingDataServiceService', () => {
  let service: BookingDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookingDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
