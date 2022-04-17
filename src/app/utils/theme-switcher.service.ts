import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class ThemeSwitcherService {
  constructor(private localStorageService: LocalStorageService) {}

  switchTheme(): void {
    const isDarkTheme = document.body.classList.toggle('dark-theme');

    if (!isDarkTheme) {
      this.localStorageService.setItem('theme', 'light-theme');
      return;
    }

    this.localStorageService.setItem('theme', 'dark-theme');
  }
}
