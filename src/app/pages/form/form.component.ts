import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CONTROL_TYPE } from '@iq-app/constants';
import { DataService } from '@iq-app/services';
import { ButtonComponent, CheckboxComponent, InputComponent, LabelComponent, SelectComponent } from '@iq-ui/components';

@Component({
  selector: 'iq-form',
  imports: [ReactiveFormsModule, CheckboxComponent, ButtonComponent, InputComponent, LabelComponent, SelectComponent],
  templateUrl: 'form.component.html',
  styleUrl: 'form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'g-flex-column__item g-flex-column',
  },
})
export class FormComponent implements OnInit {
  dataService = inject(DataService);

  protected readonly loading = signal(true);
  protected readonly CONTROL_TYPE = CONTROL_TYPE;
  protected readonly data = this.dataService.data;
  protected readonly formGroup = new FormGroup({});

  ngOnInit() {
    this.createForm();

    this.loading.set(false);
  }

  onSubmitForm() {
    console.log('Form Data', this.formGroup.getRawValue());

    window.alert(`Form Data ${JSON.stringify(this.formGroup.getRawValue())}`);
  }

  private createForm() {
    this.data().forEach(item => {
      this.formGroup.addControl(
        item.model,
        new FormControl({ value: item.value, disabled: item.disabled }, item.required ? Validators.required : null),
      );
    });
  }
}
