import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, StoryFn } from '@storybook/angular';

import { CheckboxComponent } from './checkbox.component';

export default {
  title: 'Checkbox',
  component: CheckboxComponent,
  decorators: [
    moduleMetadata({
      imports: [ReactiveFormsModule],
    }),
  ],
} as Meta;

const fb = new FormBuilder();
const fg = fb.group({
  inputControl: new FormControl(null),
});

const Template: StoryFn = args => ({
  props: { ...args, formGroup: fg },
  template: `
  <form [formGroup]="formGroup">
    <iq-checkbox formControlName="inputControl" [title]="title" [isDisabled]="isDisabled"></iq-checkbox>
  </form>`,
});

export const Default = Template.bind({});
Default.args = {
  title: 'Checkbox',
  isDisabled: false,
};
