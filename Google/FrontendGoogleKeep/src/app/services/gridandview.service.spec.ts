import { TestBed } from '@angular/core/testing';

import { GridandviewService } from './gridandview.service';

describe('GridandviewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GridandviewService = TestBed.get(GridandviewService);
    expect(service).toBeTruthy();
  });
});
