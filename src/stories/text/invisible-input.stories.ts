import '../../components/text/invisible-input';
import { html } from 'lit';
import type { Meta, StoryFn } from '@storybook/web-components';

type InvisibleInputProps = {
  compHeight?: string;
  compWidth?: string;

  contHeight?: string;
  contWidth?: string;
  contPadX?: string;
  contPadY?: string;
  contBorderRadius?: string;

  singleHeight?: string;
  singleWidth?: string;
  singleMaxHeight?: string;
  singleMaxWidth?: string;
  singleLineHeight?: string;
  singleOverflowX?: string;
  singleOverflowY?: string;

  singleFontFamily?: string;
  singleFontWeight?: string;
  singleFontSize?: string;
  singleTextColor?: string;

  singleFocusFontFamily?: string;
  singleFocusFontWeight?: string;
  singleFocusBgColor?: string;

  multiLine?: boolean;

  multiHeight?: string;
  multiWidth?: string;
  multiMaxHeight?: string;
  multiMaxWidth?: string;
  multiLineHeight?: string;
  multiOverflowX?: string;
  multiOverflowY?: string;

  multiFontFamily?: string;
  multiFontWeight?: string;
  multiFontSize?: string;
  multiTextColor?: string;

  multiFocusFontFamily?: string;
  multiFocusFontWeight?: string;
  multiFocusBgColor?: string;

  hoverIconSrc?: string;
  hoverIconHeight?: string;
  hoverIconWidth?: string;

  errorBgColor?: string;

  value?: string;
  error?: boolean;
  placeholder?: string;

  handleChange?: (value: string) => void;
  handleBlur?: (value: string) => void;
  handleKeyUp?: (value: string) => void;
};

const meta: Meta<InvisibleInputProps> = {
  title: 'Components/Text/Invisible Input',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### \`<invisible-input>\`

A flexible and highly customizable input field supporting both single-line and multi-line modes, styled via CSS variables.

**Features:**
- Dynamic styles through props
- Hover icon support
- Error indication styles
- Single and multi-line modes

> Change styles via props or override CSS variables.
        `,
      },
    },
  },
  argTypes: {
    compHeight: {
      control: 'text',
      description: 'Component height',
      table: { category: 'Component', defaultValue: { summary: '200px' } },
    },
    compWidth: {
      control: 'text',
      description: 'Component width',
      table: { category: 'Component', defaultValue: { summary: '400px' } },
    },
    contHeight: {
      control: 'text',
      description: 'Container height',
      table: { category: 'Container', defaultValue: { summary: '100%' } },
    },
    contWidth: {
      control: 'text',
      description: 'Container width',
      table: { category: 'Container', defaultValue: { summary: '100%' } },
    },
    contPadX: {
      control: 'text',
      description: 'Horizontal container padding',
      table: { category: 'Container', defaultValue: { summary: '0' } },
    },
    contPadY: {
      control: 'text',
      description: 'Vertical container padding',
      table: { category: 'Container', defaultValue: { summary: '0' } },
    },
    contBorderRadius: {
      control: 'text',
      description: 'Border radius of container',
      table: { category: 'Container' },
    },
    singleHeight: {
      control: 'text',
      description: 'Single-line input height',
      table: { category: 'Single Line Mode' },
    },
    singleWidth: {
      control: 'text',
      description: 'Single-line input width',
      table: { category: 'Single Line Mode' },
    },
    singleMaxHeight: {
      control: 'text',
      description: 'Max height for single-line input',
      table: { category: 'Single Line Mode' },
    },
    singleMaxWidth: {
      control: 'text',
      description: 'Max width for single-line input',
      table: { category: 'Single Line Mode' },
    },
    singleLineHeight: {
      control: 'text',
      description: 'Line height for single-line input',
      table: { category: 'Single Line Mode' },
    },
    singleOverflowX: {
      control: 'text',
      description: 'Horizontal overflow for single-line input',
      table: { category: 'Single Line Mode' },
    },
    singleOverflowY: {
      control: 'text',
      description: 'Vertical overflow for single-line input',
      table: { category: 'Single Line Mode' },
    },
    singleFontFamily: {
      control: 'text',
      description: 'Font family for single-line input',
      table: { category: 'Single Line Mode' },
    },
    singleFontWeight: {
      control: 'text',
      description: 'Font weight for single-line input',
      table: { category: 'Single Line Mode' },
    },
    singleFontSize: {
      control: 'text',
      description: 'Font size for single-line input',
      table: { category: 'Single Line Mode' },
    },
    singleTextColor: {
      control: 'color',
      description: 'Text color for single-line input',
      table: { category: 'Single Line Mode' },
    },
    singleFocusFontFamily: {
      control: 'text',
      description: 'Font family on focus (single-line)',
      table: { category: 'Single Line Mode' },
    },
    singleFocusFontWeight: {
      control: 'text',
      description: 'Font weight on focus (single-line)',
      table: { category: 'Single Line Mode' },
    },
    singleFocusBgColor: {
      control: 'color',
      description: 'Background color on focus (single-line)',
      table: { category: 'Single Line Mode' },
    },
    multiLine: {
      control: 'boolean',
      description: 'Enable multi-line input',
      table: { category: 'Multi-Line Mode', defaultValue: { summary: 'false' } },
    },
    multiHeight: {
      control: 'text',
      description: 'Height for multi-line input',
      table: { category: 'Multi-Line Mode' },
    },
    multiWidth: {
      control: 'text',
      description: 'Width for multi-line input',
      table: { category: 'Multi-Line Mode' },
    },
    multiMaxHeight: {
      control: 'text',
      description: 'Max height for multi-line input',
      table: { category: 'Multi-Line Mode' },
    },
    multiMaxWidth: {
      control: 'text',
      description: 'Max width for multi-line input',
      table: { category: 'Multi-Line Mode' },
    },
    multiLineHeight: {
      control: 'text',
      description: 'Line height for multi-line input',
      table: { category: 'Multi-Line Mode' },
    },
    multiOverflowX: {
      control: 'text',
      description: 'Horizontal overflow for multi-line input',
      table: { category: 'Multi-Line Mode' },
    },
    multiOverflowY: {
      control: 'text',
      description: 'Vertical overflow for multi-line input',
      table: { category: 'Multi-Line Mode' },
    },
    multiFontFamily: {
      control: 'text',
      description: 'Font family for multi-line input',
      table: { category: 'Multi-Line Mode' },
    },
    multiFontWeight: {
      control: 'text',
      description: 'Font weight for multi-line input',
      table: { category: 'Multi-Line Mode' },
    },
    multiFontSize: {
      control: 'text',
      description: 'Font size for multi-line input',
      table: { category: 'Multi-Line Mode' },
    },
    multiTextColor: {
      control: 'color',
      description: 'Text color for multi-line input',
      table: { category: 'Multi-Line Mode' },
    },
    multiFocusFontFamily: {
      control: 'text',
      description: 'Font family on focus (multi-line)',
      table: { category: 'Multi-Line Mode' },
    },
    multiFocusFontWeight: {
      control: 'text',
      description: 'Font weight on focus (multi-line)',
      table: { category: 'Multi-Line Mode' },
    },
    multiFocusBgColor: {
      control: 'color',
      description: 'Background color on focus (multi-line)',
      table: { category: 'Multi-Line Mode' },
    },

    hoverIconSrc: {
      control: 'text',
      description: 'Image source URL for hover icon',
      table: { category: 'Hover Icon' },
    },
    hoverIconHeight: {
      control: 'text',
      description: 'Height of the hover icon',
      table: { category: 'Hover Icon' },
    },
    hoverIconWidth: {
      control: 'text',
      description: 'Width of the hover icon',
      table: { category: 'Hover Icon' },
    },
    errorBgColor: {
      control: 'color',
      description: 'Background color for error state',
      table: { category: 'Error', defaultValue: { summary: 'rgba(200, 40, 40, 0.4)' } },
    },
    value: {
      control: 'text',
      description: 'Input value',
      table: { category: 'Content' },
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
      table: { category: 'Content' },
    },
    error: {
      control: 'boolean',
      description: 'Error state',
      table: { category: 'Error', defaultValue: { summary: 'false' } },
    },

    handleChange: {
      control: false,
      description: 'Callback for change event',
      table: { category: 'Events' },
    },
    handleBlur: {
      control: false,
      description: 'Callback for blur event',
      table: { category: 'Events' },
    },
    handleKeyUp: {
      control: false,
      description: 'Callback for key up event',
      table: { category: 'Events' },
    },
  },
};

export default meta;

export const Default: StoryFn<InvisibleInputProps> = (args) => html`
  <invisible-input
    .compHeight=${args.compHeight}
    .compWidth=${args.compWidth}
    .contHeight=${args.contHeight}
    .contWidth=${args.contWidth}
    .contPadX=${args.contPadX}
    .contPadY=${args.contPadY}
    .contBorderRadius=${args.contBorderRadius}
    .singleHeight=${args.singleHeight}
    .singleWidth=${args.singleWidth}
    .singleMaxHeight=${args.singleMaxHeight}
    .singleMaxWidth=${args.singleMaxWidth}
    .singleLineHeight=${args.singleLineHeight}
    .singleOverflowX=${args.singleOverflowX}
    .singleOverflowY=${args.singleOverflowY}
    .singleFontFamily=${args.singleFontFamily}
    .singleFontWeight=${args.singleFontWeight}
    .singleFontSize=${args.singleFontSize}
    .singleTextColor=${args.singleTextColor}
    .singleFocusFontFamily=${args.singleFocusFontFamily}
    .singleFocusFontWeight=${args.singleFocusFontWeight}
    .singleFocusBgColor=${args.singleFocusBgColor}
    .multiLine=${args.multiLine}
    .multiHeight=${args.multiHeight}
    .multiWidth=${args.multiWidth}
    .multiMaxHeight=${args.multiMaxHeight}
    .multiMaxWidth=${args.multiMaxWidth}
    .multiLineHeight=${args.multiLineHeight}
    .multiOverflowX=${args.multiOverflowX}
    .multiOverflowY=${args.multiOverflowY}
    .multiFontFamily=${args.multiFontFamily}
    .multiFontWeight=${args.multiFontWeight}
    .multiFontSize=${args.multiFontSize}
    .multiTextColor=${args.multiTextColor}
    .multiFocusFontFamily=${args.multiFocusFontFamily}
    .multiFocusFontWeight=${args.multiFocusFontWeight}
    .multiFocusBgColor=${args.multiFocusBgColor}
    .hoverIconSrc=${args.hoverIconSrc}
    .hoverIconHeight=${args.hoverIconHeight}
    .hoverIconWidth=${args.hoverIconWidth}
    .errorBgColor=${args.errorBgColor}
    .value=${args.value}
    .placeholder=${args.placeholder}
    .error=${args.error}
    .handleBlur=${(val: string) => console.log(`Blur: ${val}`)}
    .handleChange=${(val: string) => console.log(`Change: ${val}`)}
    .handleKeyUp=${(val: string) => console.log(`KeyUp: ${val}`)}
  ></invisible-input>
`;

Default.args = {
  compHeight: '200px',
  compWidth: '400px',
  contHeight: '100%',
  contWidth: '100%',
  contPadX: '8px',
  contPadY: '6px',
  contBorderRadius: '6px',
  singleHeight: '100%',
  singleWidth: '100%',
  singleFontSize: '18px',
  singleFontWeight: 'normal',
  singleTextColor: 'black',
  singleLineHeight: '21px',
  singleOverflowX: 'auto',
  singleOverflowY: 'auto',
  multiLine: false,
  placeholder: 'Enter text here...',
  error: false,
  hoverIconHeight: '24px',
  hoverIconWidth: '24px',
  errorBgColor: 'rgba(200, 40, 40, 0.4)',
};
