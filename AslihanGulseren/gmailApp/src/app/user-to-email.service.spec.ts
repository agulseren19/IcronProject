import { TestBed } from '@angular/core/testing';

import { UserToEmailService } from './user-to-email.service';

describe('UserToEmailService', () => {
  let service: UserToEmailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserToEmailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
