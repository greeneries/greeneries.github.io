import { TestBed } from '@angular/core/testing';

import { SignInOutService } from './sign-in-out.service';

describe('SignInOutService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SignInOutService = TestBed.get(SignInOutService);
    expect(service).toBeTruthy();
  });
});
