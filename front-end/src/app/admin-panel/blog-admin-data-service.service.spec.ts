import { TestBed, inject } from '@angular/core/testing';

import { BlogDataServiceService } from './blog-data-service.service';

describe('BlogDataServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BlogDataServiceService]
    });
  });

  it('should be created', inject([BlogDataServiceService], (service: BlogDataServiceService) => {
    expect(service).toBeTruthy();
  }));
});
