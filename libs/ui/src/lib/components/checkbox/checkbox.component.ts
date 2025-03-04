import { ChangeDetectionStrategy, Component, forwardRef, input, InputSignal } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { BaseCheckboxComponent } from '../shared/base-checkbox.component';

@Component({
  selector: 'iq-checkbox',
  templateUrl: 'checkbox.component.html',
  styleUrls: ['checkbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'g-flex g-flex--align-center gap-10',
    role: 'checkbox',
  },
})
export class CheckboxComponent extends BaseCheckboxComponent {
  title: InputSignal<string | undefined> = input();
  required: InputSignal<boolean> = input(false);
}
