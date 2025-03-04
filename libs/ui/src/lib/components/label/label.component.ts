import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'iq-label',
  templateUrl: 'label.component.html',
  styleUrl: 'label.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'g-flex g-flex--align-center gap-2',
  },
})
export class LabelComponent {
  readonly label = input('');
  readonly required = input(false);
}
