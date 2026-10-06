import { Component, Input } from '@angular/core';

// Stand-in for yot-ui's phoenix-icon-button so the axe global-components mapping can be demoed.
@Component({
  selector: 'phoenix-icon-button',
  template: `
    <button type="button" [disabled]="disabled">
      <span class="material-icons" aria-hidden="true">{{ icon }}</span>
      <ng-content></ng-content>
    </button>
  `
})
export class IconButtonComponent {
  @Input() icon = '';
  @Input() disabled = false;
}
