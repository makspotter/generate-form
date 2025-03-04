import { Meta, moduleMetadata, StoryFn } from '@storybook/angular';

import { ButtonComponent } from './button.component';

export default {
  title: 'Button',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta;

const Template: StoryFn = args => ({
  props: { ...args },
  template: `
    <iq-button style="width: 200px" [label]="label" [isDisabled]="isDisabled"></iq-button>
  `,
});

export const Default = Template.bind({});
Default.args = {
  label: 'Button',
  isDisabled: false,
};
