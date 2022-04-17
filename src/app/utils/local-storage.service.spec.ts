import { TestBed } from '@angular/core/testing';

import { LocalStorageService } from './local-storage.service';

describe('LocalStorageService', () => {
  let service: LocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set item', () => {
    service.setItem('key', 'value');
    expect(localStorage.getItem('key')).toEqual('"value"');
  });

  it('should get item', () => {
    service.setItem('key', 'value');
    expect(service.getItem('key')).toEqual('value');
  });

  it('should get empty object is item is not set', () => {
    expect(service.getItem('fakekey')).toEqual({});
  });
});
