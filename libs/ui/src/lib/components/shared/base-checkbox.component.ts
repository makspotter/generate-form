import { ChangeDetectorRef, Component, HostBinding, HostListener, inject, input, signal } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  template: '',
})
export class BaseCheckboxComponent implements ControlValueAccessor {
  readonly isDisabled = input(false);

  private readonly disabled = signal(this.isDisabled());
  private readonly changeDetectorRef = inject(ChangeDetectorRef);

  @HostBinding('class.disabled')
  get _isDisabled(): boolean {
    return this.disabled();
  }

  @HostBinding('class.active')
  value: boolean;

  @HostListener('click')
  onHostClick(): void {
    if (!this.disabled()) {
      this.value = !this.value;

      this._onChange();
    }
  }

  onChange: (value: boolean) => void;
  onTouched: () => void;

  registerOnChange(fn: (value: boolean) => boolean): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  writeValue(value: boolean): void {
    if (value !== this.value) {
      this.value = Boolean(value);
      this.changeDetectorRef.markForCheck();
    }
  }

  setDisabledState(disabled: boolean): void {
    this.disabled.set(disabled);
  }

  private _onChange(): void {
    if (this.onChange) {
      this.onChange(this.value);
    }
  }
}
