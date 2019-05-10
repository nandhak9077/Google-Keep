import { TestBed } from '@angular/core/testing';

import { SearchPipeService } from './search-pipe.service';

describe('SearchPipeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchPipeService = TestBed.get(SearchPipeService);
    expect(service).toBeTruthy();
  });
});
