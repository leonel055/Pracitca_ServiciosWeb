import { TestBed } from '@angular/core/testing';

import { CodigoQR } from './codigo-qr';

describe('CodigoQR', () => {
  let service: CodigoQR;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CodigoQR);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
