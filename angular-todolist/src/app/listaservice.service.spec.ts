import { TestBed } from '@angular/core/testing';

import { ListaserviceService } from './listaservice.service';

describe('ListaserviceService', () => {
  let service: ListaserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
