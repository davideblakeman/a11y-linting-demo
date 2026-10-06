import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { A11yLintDemoPageComponent } from './pages/a11y-lint-demo-page/a11y-lint-demo-page.component';
import { A11yEslintDemoComponent } from './components/a11y-eslint-demo/a11y-eslint-demo.component';
import { IconButtonComponent } from './components/icon-button/icon-button.component';

@NgModule({
  declarations: [
    AppComponent,
    A11yLintDemoPageComponent,
    A11yEslintDemoComponent,
    IconButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
