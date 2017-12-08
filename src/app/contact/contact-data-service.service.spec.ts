import { TestBed, inject } from '@angular/core/testing';

import { ContactDataServiceService } from './contact-data-service.service';

describe('ContactDataServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactDataServiceService]
    });
  });

  it('should be created', inject([ContactDataServiceService], (service: ContactDataServiceService) => {
    expect(service).toBeTruthy();
  }));
});
