import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { OrchidService } from './orchid.service';

describe('OrchidService', () => {
  let service: OrchidService;
  let mockAuthService: jasmine.SpyObj<AuthService>;

  beforeEach(() => {
    mockAuthService = jasmine.createSpyObj('AuthService', [
      'setUserSessionId',
      'clearUserSessionId',
    ]);
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: AuthService, useValue: mockAuthService} 
      ]
    });
    service = TestBed.inject(OrchidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
