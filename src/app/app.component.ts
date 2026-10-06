import { Component, OnInit } from '@angular/core';

type Theme = 'light' | 'dark';

const THEME_STORAGE_KEY = 'theme';

@Component({
  selector: 'phoenix-root',
  template: `
    <header>
      <button type="button" class="theme-toggle" [attr.aria-pressed]="theme === 'dark'" (click)="toggleTheme()">
        Dark mode
      </button>
    </header>
    <main><phoenix-a11y-lint-demo-page></phoenix-a11y-lint-demo-page></main>
  `
})
export class AppComponent implements OnInit {
  theme: Theme = 'light';

  ngOnInit(): void {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (stored === 'light' || stored === 'dark') {
      this.applyTheme(stored);
    } else {
      this.theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
  }

  toggleTheme(): void {
    this.applyTheme(this.theme === 'dark' ? 'light' : 'dark');
    localStorage.setItem(THEME_STORAGE_KEY, this.theme);
  }

  private applyTheme(theme: Theme): void {
    this.theme = theme;
    document.documentElement.setAttribute('data-theme', theme);
  }
}
