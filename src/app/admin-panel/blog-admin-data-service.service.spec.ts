import { TestBed, inject } from '@angular/core/testing';

import { BlogAdminDataServiceService } from './blog-admin-data-service.service';

describe('BlogAdminDataServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BlogAdminDataServiceService]
    });
  });

  it('should be created', inject([BlogAdminDataServiceService], (service: BlogDataServiceService) => {
    expect(service).toBeTruthy();
  }));
});
