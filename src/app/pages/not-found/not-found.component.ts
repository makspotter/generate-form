import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'iq-not-found',
  templateUrl: 'not-found.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'g-flex-column',
  },
})
export class NotFoundComponent {}
