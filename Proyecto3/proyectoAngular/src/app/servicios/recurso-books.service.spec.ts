import { TestBed } from '@angular/core/testing';

import { RecursoBooksService } from './recurso-books.service';

describe('RecursoBooksService', () => {
  let service: RecursoBooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecursoBooksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});


