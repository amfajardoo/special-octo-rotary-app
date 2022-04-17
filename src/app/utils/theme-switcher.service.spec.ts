import { TestBed } from '@angular/core/testing';
import { LocalStorageService } from './local-storage.service';

import { ThemeSwitcherService } from './theme-switcher.service';

describe('ThemeSwitcherService', () => {
  let service: ThemeSwitcherService;
  let localStorageService: LocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeSwitcherService);
    localStorageService = TestBed.inject(LocalStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should switch theme to dark-theme', () => {
    service.switchTheme();
    const darkThemeStored = localStorageService.getItem('theme');

    expect(darkThemeStored).toBe('dark-theme');
  });

  it('should switch theme to light-theme', () => {
    document.body.classList.add('dark-theme');
    service.switchTheme();
    const lightThemeStored = localStorageService.getItem('theme');

    expect(lightThemeStored).toBe('light-theme');
  });
});
