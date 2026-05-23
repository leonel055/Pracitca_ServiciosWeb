import { TestBed } from '@angular/core/testing';

import { Convertidor } from './convertidor';

describe('Convertidor', () => {
  let service: Convertidor;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Convertidor);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
