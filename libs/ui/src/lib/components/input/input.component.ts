import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, inject, input } from '@angular/core';

@Component({
  selector: 'iq-input, input[iq-input], textarea[iq-input]',
  templateUrl: '',
  styleUrls: ['input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'g-flex-column gap-4',
  },
})
export class InputComponent implements AfterViewInit {
  readonly isFocused = input(false);

  private readonly elementRef = inject(ElementRef);

  ngAfterViewInit(): void {
    if (this.isFocused()) {
      setTimeout(() => {
        this.elementRef.nativeElement.focus();
      });
    }
  }
}
