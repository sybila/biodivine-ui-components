import { html } from 'lit';
import type { Meta, StoryFn } from '@storybook/web-components';
import '../../components/text/number-input';

type NumberInputProps = {
  compHeight?: string;
  compWidth?: string;
  inputHeight?: string;
  inputWidth?: string;
  inputBorderColor?: string;
  inputBorderRadius?: string;
  inputColor?: string;
  textColor?: string;
  textFontSize?: string;
  textFontWeight?: string;
  textFontFamily?: string;
  placeholder?: string;
  value?: string;
  min?: number;
  max?: number;
  step?: number;
  handleChange?: (value: number | undefined) => void;
  handleBlur?: (value: number | undefined) => void;
  handleKeyUp?: (value: number | undefined) => void;
};

const meta: Meta<NumberInputProps> = {
  title: 'Components/Text/Number Input',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### \`<number-input>\`

Basic number input component.

#### CSS Custom Properties

| Variable                        | Description                        |
|----------------------------------|------------------------------------|
| \`--text-input-comp-height\`     | Height of outer wrapper            |
| \`--text-input-comp-width\`      | Width of outer wrapper             |
| \`--text-input-height\`          | Input field height                 |
| \`--text-input-width\`           | Input field width                  |
| \`--text-input-border-color\`    | Input border color                 |
| \`--text-input-border-radius\`   | Input border radius                |
| \`--text-input-background-color\`| Input background color             |
| \`--text-input-text-color\`      | Text color inside input            |
| \`--text-input-font-size\`       | Font size of input text            |
| \`--text-input-font-weight\`     | Font weight of input text          |
| \`--text-input-font-family\`     | Font family for input text         |

#### Shadow DOM Parts

| Part Name      | Element | Description         |
|----------------|---------|---------------------|
| \`number-input\` | \`input\` | The input element  |
        `,
      },
    },
  },
  argTypes: {
    compHeight: {
      control: 'text',
      description: 'Height of the outer component container',
      table: { defaultValue: { summary: '26px' }, category: 'Layout' },
    },
    compWidth: {
      control: 'text',
      description: 'Width of the outer component container',
      table: { defaultValue: { summary: '500px' }, category: 'Layout' },
    },
    inputHeight: {
      control: 'text',
      description: 'Height of the input box',
      table: { defaultValue: { summary: '100%' }, category: 'Input' },
    },
    inputWidth: {
      control: 'text',
      description: 'Width of the input box',
      table: { defaultValue: { summary: '100%' }, category: 'Input' },
    },
    inputBorderColor: {
      control: 'color',
      description: 'Border color of the input box',
      table: { defaultValue: { summary: '#cfd8dc' }, category: 'Input' },
    },
    inputBorderRadius: {
      control: 'text',
      description: 'Border radius of the input box',
      table: { defaultValue: { summary: '8px' }, category: 'Input' },
    },
    inputColor: {
      control: 'color',
      description: 'Background color of the input',
      table: { defaultValue: { summary: '#fafafa' }, category: 'Input' },
    },
    textColor: {
      control: 'color',
      description: 'Text color inside the input',
      table: { defaultValue: { summary: '#333' }, category: 'Text' },
    },
    textFontSize: {
      control: 'text',
      description: 'Font size of the input text',
      table: { defaultValue: { summary: '14px' }, category: 'Text' },
    },
    textFontWeight: {
      control: 'text',
      description: 'Font weight of the input text',
      table: { defaultValue: { summary: 'normal' }, category: 'Text' },
    },
    textFontFamily: {
      control: 'text',
      description: 'Font family of the input text',
      table: {
        defaultValue: { summary: "'Helvetica', 'Arial', sans-serif" },
        category: 'Text',
      },
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text inside the input',
      table: { defaultValue: { summary: '' }, category: 'Input' },
    },
    value: {
      control: 'text',
      description: 'Value of the input',
      table: { defaultValue: { summary: '' }, category: 'Input' },
    },
    min: {
      control: 'number',
      description: 'Minimum value',
      table: { defaultValue: { summary: undefined }, category: 'Input' },
    },
    max: {
      control: 'number',
      description: 'Maximum value',
      table: { defaultValue: { summary: undefined }, category: 'Input' },
    },
    step: {
      control: 'number',
      description: 'Step value',
      table: { defaultValue: { summary: undefined }, category: 'Input' },
    },
    handleChange: {
      action: 'change',
      description:
        'Function to handle change event. Receives input value as number or undefined.',
      table: { category: 'Events' },
    },
    handleBlur: {
      action: 'blur',
      description:
        'Function to handle blur event. Receives input value as number or undefined.',
      table: { category: 'Events' },
    },
    handleKeyUp: {
      action: 'keyup',
      description:
        'Function to handle keyup event. Receives input value as number or undefined.',
      table: { category: 'Events' },
    },
  },
};

export default meta;

export const Default: StoryFn<NumberInputProps> = (args) => html`
  <number-input
    .compHeight=${args.compHeight}
    .compWidth=${args.compWidth}
    .inputHeight=${args.inputHeight}
    .inputWidth=${args.inputWidth}
    .inputBorderColor=${args.inputBorderColor}
    .inputBorderRadius=${args.inputBorderRadius}
    .inputColor=${args.inputColor}
    .textColor=${args.textColor}
    .textFontSize=${args.textFontSize}
    .textFontWeight=${args.textFontWeight}
    .textFontFamily=${args.textFontFamily}
    .placeholder=${args.placeholder}
    .value=${args.value}
    .min=${args.min}
    .max=${args.max}
    .step=${args.step}
    .handleChange=${args.handleChange}
    .handleBlur=${args.handleBlur}
    .handleKeyUp=${args.handleKeyUp}
  ></number-input>
`;

Default.args = {
  compHeight: '26px',
  compWidth: '500px',
  inputHeight: '100%',
  inputWidth: '100%',
  inputBorderColor: '#cfd8dc',
  inputBorderRadius: '8px',
  inputColor: '#fafafa',
  textColor: '#333',
  textFontSize: '14px',
  textFontWeight: 'normal',
  textFontFamily: "'Helvetica', 'Arial', sans-serif",
  placeholder: 'Enter a number...',
  value: '',
  min: undefined,
  max: undefined,
  step: undefined,
  handleChange: (val: number | undefined) => console.log('Change:', val),
  handleBlur: (val: number | undefined) => console.log('Blur:', val),
  handleKeyUp: (val: number | undefined) => console.log('KeyUp:', val),
};
