import { ChangeDetectionStrategy, Component, HostBinding, input } from '@angular/core';

@Component({
  selector: 'iq-button',
  templateUrl: 'button.component.html',
  styleUrl: 'button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'g-flex g-flex--align-center g-flex--justify-center',
    role: 'button',
  },
})
export class ButtonComponent {
  readonly label = input('');
  readonly isDisabled = input(false);

  @HostBinding('class.disabled')
  get _isDisabled(): boolean {
    return this.isDisabled();
  }
}
