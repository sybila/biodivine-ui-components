import { html } from 'lit';
import type { Meta, StoryFn } from '@storybook/web-components';
import '../../components/text/text-input';

type TextInputProps = {
  /** Height of the outer component container */
  compHeight?: string;
  /** Width of the outer component container */
  compWidth?: string;
  /** Height of the <input> element */
  inputHeight?: string;
  /** Width of the <input> element */
  inputWidth?: string;
  /** Border color of the input box */
  inputBorderColor?: string;
  /** Border radius of the input box */
  inputBorderRadius?: string;
  /** Background color of the input */
  inputColor?: string;
  /** Text color */
  textColor?: string;
  /** Font size */
  textFontSize?: string;
  /** Font weight */
  textFontWeight?: string;
  /** Font family */
  textFontFamily?: string;
  /** Placeholder text inside the input */
  placeholder?: string;
  /** Value of the input */
  value?: string;
  /** Function to handle keyup event. Receives input value as string. */
  onWrite?: (value: string) => void;
};

const meta: Meta<TextInputProps> = {
  title: 'Components/Text/Text Input',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### \`<text-input>\`

Basic text input component.

#### CSS Custom Properties

| Variable                              | Description                     |
|----------------------------------------|---------------------------------|
| \`--text-input-comp-height\`           | Height of outer wrapper         |
| \`--text-input-comp-width\`            | Width of outer wrapper          |
| \`--text-input-height\`                | Input field height              |
| \`--text-input-width\`                 | Input field width               |
| \`--text-input-border-color\`          | Input border color              |
| \`--text-input-border-radius\`         | Input border radius             |
| \`--text-input-background-color\`      | Input background color          |
| \`--text-input-text-color\`            | Text color inside input         |
| \`--text-input-font-size\`             | Font size of input text         |
| \`--text-input-font-weight\`           | Font weight of input text       |
| \`--text-input-font-family\`           | Font family for input text      |

#### Shadow DOM Parts

| Part Name    | Element | Description           |
|--------------|---------|-----------------------|
| \`text-input\` | \`input\` | The input element        |
        `,
      },
    },
  },
  argTypes: {
    compHeight: {
      control: 'text',
      description: 'Height of the outer component container',
      table: { category: 'Layout', defaultValue: { summary: '26px' } },
    },
    compWidth: {
      control: 'text',
      description: 'Width of the outer component container',
      table: { category: 'Layout', defaultValue: { summary: '500px' } },
    },
    inputHeight: {
      control: 'text',
      description: 'Height of the input box',
      table: { category: 'Input', defaultValue: { summary: '100%' } },
    },
    inputWidth: {
      control: 'text',
      description: 'Width of the input box',
      table: { category: 'Input', defaultValue: { summary: '100%' } },
    },
    inputBorderColor: {
      control: 'color',
      description: 'Border color of the input box',
      table: { category: 'Input', defaultValue: { summary: '#cfd8dc' } },
    },
    inputBorderRadius: {
      control: 'text',
      description: 'Border radius of the input box',
      table: { category: 'Input', defaultValue: { summary: '8px' } },
    },
    inputColor: {
      control: 'color',
      description: 'Background color of the input',
      table: { category: 'Input', defaultValue: { summary: '#fafafa' } },
    },
    textColor: {
      control: 'color',
      description: 'Text color inside the input',
      table: { category: 'Text', defaultValue: { summary: '#333' } },
    },
    textFontSize: {
      control: 'text',
      description: 'Font size of the input text',
      table: { category: 'Text', defaultValue: { summary: '14px' } },
    },
    textFontWeight: {
      control: 'text',
      description: 'Font weight of the input text',
      table: { category: 'Text', defaultValue: { summary: 'normal' } },
    },
    textFontFamily: {
      control: 'text',
      description: 'Font family of the input text',
      table: {
        category: 'Text',
        defaultValue: { summary: "'Helvetica', 'Arial', sans-serif" },
      },
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text inside the input',
      table: { category: 'Input', defaultValue: { summary: '' } },
    },
    value: {
      control: 'text',
      description: 'Value of the input',
      table: { category: 'Input', defaultValue: { summary: '' } },
    },
    onWrite: {
      action: 'keyup',
      description:
        'Function to handle keyup event. Receives input value as string.',
      table: { category: 'Events' },
    },
  },
};

export default meta;

export const Default: StoryFn<TextInputProps> = (args) => html`
  <text-input
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
    .onWrite=${args.onWrite}
  ></text-input>
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
  placeholder: 'Enter text...',
  value: '',
  onWrite: (val: string) => console.log('Write:', val),
};
