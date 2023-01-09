import { TestBed } from '@angular/core/testing';

import { RecursosPoemasService } from './recursos-poemas.service';

describe('RecursosPoemasService', () => {
  let service: RecursosPoemasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecursosPoemasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
