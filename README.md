# A11y Linting Demo

An Angular 15 project that shows how three linters catch accessibility problems while you write code:

| Tool | What it lints | Config | How it runs |
| --- | --- | --- | --- |
| [ESLint](https://eslint.org/) + [Angular ESLint](https://github.com/angular-eslint/angular-eslint) | Angular templates (`.html` and inline templates in `.ts`) | [.eslintrc.json](.eslintrc.json) | `npm run lint` and the VS Code ESLint extension |
| [Stylelint](https://stylelint.io/) + [@double-great/stylelint-a11y](https://github.com/double-great/stylelint-a11y) | SCSS | [.stylelintrc.json](.stylelintrc.json) | `npm run lint:styles` and the VS Code Stylelint extension |
| [axe Accessibility Linter](https://docs.deque.com/linter/) | HTML templates, checked against WCAG 2.x A/AA and best-practice rules | [axe-linter.yml](axe-linter.yml) | VS Code axe Accessibility Linter extension |

The code includes accessibility mistakes on purpose. Each example puts failing code next to the fixed version, so each linter has errors to report.

## Getting started

1. Run `npm install`.
2. Open the folder in VS Code and install the recommended extensions when prompted (see [.vscode/extensions.json](.vscode/extensions.json)):
   - `dbaeumer.vscode-eslint`
   - `stylelint.vscode-stylelint`
   - `deque-systems.vscode-axe-linter`
   - `angular.ng-template`
3. Open the files listed below to see the problems underlined in the editor, or run the CLI commands.

```bash
npm run lint          # ESLint (Angular template accessibility rules)
npm run lint:styles   # Stylelint (a11y plugin)
```

The axe Accessibility Linter has no CLI in this project. It reports problems in VS Code only.

## Example linting errors

The examples are shown on one page (`npm start`, then go to `http://localhost:4200/`). On the page, every "Fails" block is the broken code and every "Passes" block is the fix.

### axe Accessibility Linter: [a11y-lint-demo-page.component.html](src/app/pages/a11y-lint-demo-page/a11y-lint-demo-page.component.html)

| # | Rule | Severity |
| --- | --- | --- |
| 1 | `image-alt`: image without alt text | Error (WCAG 1.1.1) |
| 2 | `button-name`: icon-only button with no accessible name | Error (WCAG 4.1.2) |
| 3 | `aria-input-field-name`: custom ARIA textbox with no label | Error (WCAG 4.1.2) |
| 4 | `link-name`: link with no text that a screen reader can announce | Error (WCAG 2.4.4 / 4.1.2) |
| 5 | `aria-valid-attr-value`: invalid ARIA value (`aria-expanded="yes"`) | Error (WCAG 4.1.2) |
| 6 | `tabindex`: positive tabindex | Warning (best practice) |
| 7 | `button-name` on the custom `phoenix-icon-button`, which is mapped to `button` via `global-components` | Error |
| 8 | Inline suppression with `axe-linter-disable-next-line` | — |

### Stylelint: [a11y-lint-demo-page.component.scss](src/app/pages/a11y-lint-demo-page/a11y-lint-demo-page.component.scss)

| # | Rule | Severity |
| --- | --- | --- |
| S1 | `a11y/no-outline-none`: focus outline removed | Error (WCAG 2.4.7) |
| S2 | `a11y/selector-pseudo-class-focus`: `:hover` without a matching `:focus` | Error (WCAG 2.1.1) |
| S3 | `a11y/media-prefers-reduced-motion`: animation with no reduced-motion override | Warning (WCAG 2.3.3) |
| S4 | `a11y/font-size-is-readable`: font size below 15px | Warning |
| S5 | `a11y/no-text-align-justify`: justified text | Warning |
| S6 | Inline suppression with `stylelint-disable-next-line` and a reason | — |

### Angular ESLint: [a11y-eslint-demo.component.ts](src/app/components/a11y-eslint-demo/a11y-eslint-demo.component.ts)

The template is inline on purpose. axe does not lint templates inside `.ts` files, but Angular ESLint does.

| # | Rule (`@angular-eslint/template/...`) | Severity |
| --- | --- | --- |
| E1 | `click-events-have-key-events`: `(click)` with no keyboard handler | Error |
| E2 | `accessibility-interactive-supports-focus`: `role="button"` that cannot receive focus | Error |
| E3 | `mouse-events-have-key-events`: `(mouseover)`/`(mouseout)` without `(focus)`/`(blur)` | Error |
| E4 | `accessibility-label-has-associated-control`: label not linked to an input | Error |
| E5 | `accessibility-valid-aria`: misspelt `aria-labeledby` | Error |
| E6 | `accessibility-role-has-required-aria`: `role="checkbox"` without `aria-checked` | Error |
| E7 | `no-autofocus`: `autofocus` attribute | Warning |
| E8 | Inline suppression with `eslint-disable-next-line` | — |

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
