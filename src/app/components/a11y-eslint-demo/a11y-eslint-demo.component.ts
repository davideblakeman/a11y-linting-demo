import { Component } from '@angular/core';

// Inline template on purpose: Angular ESLint lints templates inside .ts files; axe does not.
// Each "Fails" block is intentionally broken; each "Passes" block shows the fix.
@Component({
  selector: 'phoenix-a11y-eslint-demo',
  styleUrls: ['../../pages/a11y-lint-demo-page/a11y-lint-demo-page.component.scss'],
  template: `
    <section class="demo-example" aria-labelledby="eslint-demo-heading">
      <h3 id="eslint-demo-heading">10. Template rules (Angular ESLint, inline template)</h3>

      <h4>E1. Click handlers need keyboard support (click-events-have-key-events)</h4>
      <div class="demo-pair">
        <div class="demo-fail">
          <p>Fails</p>
          <div (click)="selectRow()">Select row</div>
        </div>
        <div class="demo-pass">
          <p>Passes</p>
          <button type="button" (click)="selectRow()">Select row</button>
        </div>
      </div>

      <h4>E2. Interactive elements must be focusable (interactive-supports-focus)</h4>
      <div class="demo-pair">
        <div class="demo-fail">
          <p>Fails</p>
          <span role="button" (click)="selectRow()" (keyup.enter)="selectRow()">Open case</span>
        </div>
        <div class="demo-pass">
          <p>Passes</p>
          <span role="button" tabindex="0" (click)="selectRow()" (keyup.enter)="selectRow()">Open case</span>
        </div>
      </div>

      <h4>E3. Mouse events need keyboard equivalents (mouse-events-have-key-events)</h4>
      <div class="demo-pair">
        <div class="demo-fail">
          <p>Fails</p>
          <button type="button" (mouseover)="showHint()" (mouseout)="hideHint()">Hover for hint</button>
        </div>
        <div class="demo-pass">
          <p>Passes</p>
          <button
            type="button"
            (mouseover)="showHint()"
            (mouseout)="hideHint()"
            (focus)="showHint()"
            (blur)="hideHint()"
          >
            Hover or focus for hint
          </button>
        </div>
      </div>
      <p aria-live="polite">{{ hintVisible ? 'Hint: changes are saved automatically.' : '' }}</p>

      <h4>E4. Labels must be associated with a control (label-has-associated-control)</h4>
      <div class="demo-pair">
        <div class="demo-fail">
          <p>Fails</p>
          <label>Surname</label>
          <input type="text" />
        </div>
        <div class="demo-pass">
          <p>Passes</p>
          <label for="eslint-demo-surname">Surname</label>
          <input id="eslint-demo-surname" type="text" />
        </div>
      </div>

      <h4>E5. ARIA attributes must be valid (valid-aria)</h4>
      <div class="demo-pair">
        <div class="demo-fail">
          <p>Fails</p>
          <nav aria-labeledby="eslint-demo-heading">Misspelt aria-labelledby</nav>
        </div>
        <div class="demo-pass">
          <p>Passes</p>
          <nav aria-labelledby="eslint-demo-heading">Correct aria-labelledby</nav>
        </div>
      </div>

      <h4>E6. Roles need their required ARIA state (role-has-required-aria)</h4>
      <div class="demo-pair">
        <div class="demo-fail">
          <p>Fails</p>
          <span role="checkbox" tabindex="0" (click)="toggle()" (keyup.space)="toggle()">Urgent</span>
        </div>
        <div class="demo-pass">
          <p>Passes</p>
          <span role="checkbox" tabindex="0" [attr.aria-checked]="checked" (click)="toggle()" (keyup.space)="toggle()">
            Urgent
          </span>
        </div>
      </div>

      <h4>E7. Avoid autofocus (no-autofocus - warning)</h4>
      <div class="demo-pair">
        <div class="demo-fail">
          <p>Warns</p>
          <label for="eslint-demo-search">Search</label>
          <input id="eslint-demo-search" type="search" autofocus />
        </div>
        <div class="demo-pass">
          <p>Passes</p>
          <label for="eslint-demo-search-ok">Search</label>
          <input id="eslint-demo-search-ok" type="search" />
        </div>
      </div>

      <h4>E8. Suppressing a justified violation</h4>
      <div class="demo-pair">
        <div class="demo-pass">
          <p>Suppressed</p>
          <!-- eslint-disable-next-line @angular-eslint/template/click-events-have-key-events, @angular-eslint/template/accessibility-interactive-supports-focus -->
          <div class="demo-backdrop" (click)="selectRow()">Backdrop - Escape key handled by the dialog service</div>
        </div>
      </div>
    </section>
  `
})
export class A11yEslintDemoComponent {
  hintVisible = false;
  checked = false;

  selectRow(): void {
    // Demo only - no behaviour required.
  }

  showHint(): void {
    this.hintVisible = true;
  }

  hideHint(): void {
    this.hintVisible = false;
  }

  toggle(): void {
    this.checked = !this.checked;
  }
}
