import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  forwardRef,
  HostBinding,
  inject,
  input,
  signal,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SelectItemModel } from '@iq-app/models';

const SHOWED_ITEMS = 3;
const ITEM_HEIGHT = 33;

@Component({
  selector: 'iq-select',
  templateUrl: 'select.component.html',
  styleUrl: 'select.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true,
    },
  ],
})
export class SelectComponent implements ControlValueAccessor {
  readonly isDisabled = input<boolean>(false);
  readonly items = input<SelectItemModel[] | undefined>([]);
  readonly showedItems = input<number>(SHOWED_ITEMS);
  readonly itemHeight = input<number>(ITEM_HEIGHT);

  protected readonly isOpened = signal(false);

  value: string;
  selectedItem: SelectItemModel | null = null;

  private readonly changeDetectorRef = inject(ChangeDetectorRef);
  private readonly disabled = signal(this.isDisabled());

  @HostBinding('class.disabled')
  get _isDisabled(): boolean {
    return this.disabled();
  }

  onChange: (value: string) => void;
  onTouched: () => void;

  registerOnChange(fn: (value: string) => string): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  writeValue(value: string): void {
    if (value !== this.value) {
      this.value = value;
      this.selectedItem = this.items()?.find(it => it.id === value) || null;
      this.isOpened.set(false);

      this._onChange();

      this.changeDetectorRef.markForCheck();
    }
  }

  setDisabledState(disabled: boolean): void {
    this.disabled.set(disabled);
  }

  toggleOpen() {
    if (this.disabled()) {
      return;
    }

    this.isOpened.set(!this.isOpened());
  }

  private _onChange(): void {
    if (this.onChange) {
      this.onChange(this.value);
    }
  }
}
