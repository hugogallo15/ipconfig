import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { authResolver } from './auth.resolver';

describe('authResolver', () => {
  const executeResolver: ResolveFn<string> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => authResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClientTesting()]
    });
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
