import { TestBed } from '@angular/core/testing';

import { AngularLibraryService } from './angular-library.service';

describe('AngularLibraryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AngularLibraryService = TestBed.get(AngularLibraryService);
    expect(service).toBeTruthy();
  });
});
