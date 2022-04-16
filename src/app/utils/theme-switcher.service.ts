import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeSwitcherService {
  constructor() {}

  switchTheme(): void {
    const isDarkTheme = document.body.classList.toggle('dark-theme');

    if (!isDarkTheme) {
      localStorage.setItem('theme', 'light-theme');
      return;
    }

    localStorage.setItem('theme', 'dark-theme');
  }
}
