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
  contOverflowX?: string;
  contOverflowY?: string;

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
  singleTextAlign?: string;
  singleFocusFontFamily?: string;
  singleFocusFontWeight?: string;
  singleFocusBgColor?: string;
  singlePlaceholderColor?: string;
  singlePlaceholderFontStyle?: string;
  singlePlaceholderFontFamily?: string;

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
  multiTextAlign?: string;
  multiFocusFontFamily?: string;
  multiFocusFontWeight?: string;
  multiFocusBgColor?: string;
  multiPlaceholderColor?: string;
  multiPlaceholderFontStyle?: string;
  multiPlaceholderFontFamily?: string;

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

Input field supporting both single-line and multi-line modes.

#### CSS Custom Properties

| Variable                                             | Description                                 |
|------------------------------------------------------|---------------------------------------------|
| \`--invisible-input-comp-height\`                    | Component height                            |
| \`--invisible-input-comp-width\`                     | Component width                             |
| \`--invisible-input-cont-height\`                    | Container height                            |
| \`--invisible-input-cont-width\`                     | Container width                             |
| \`--invisible-input-cont-padx\`                      | Horizontal container padding                |
| \`--invisible-input-cont-pady\`                      | Vertical container padding                  |
| \`--invisible-input-border-radius\`                  | Border radius of container                  |
| \`--invisible-input-cont-overflow-x\`                | Container horizontal overflow               |
| \`--invisible-input-cont-overflow-y\`                | Container vertical overflow                 |
| \`--invisible-input-singleline-height\`              | Single-line input height                    |
| \`--invisible-input-singleline-width\`               | Single-line input width                     |
| \`--invisible-input-single-max-height\`              | Single-line input max height                |
| \`--invisible-input-single-max-width\`               | Single-line input max width                 |
| \`--invisible-input-singleline-line-height\`         | Single-line input line height               |
| \`--invisible-input-singleline-font-family\`         | Single-line input font family               |
| \`--invisible-input-singleline-font-weight\`         | Single-line input font weight               |
| \`--invisible-input-singleline-font-size\`           | Single-line input font size                 |
| \`--invisible-input-singleline-text-color\`          | Single-line input text color                |
| \`--invisible-input-singleline-text-align\`          | Single-line input text alignment            |
| \`--invisible-input-singleline-focus-font-family\`   | Single-line input font family on focus      |
| \`--invisible-input-singleline-focus-font-weight\`   | Single-line input font weight on focus      |
| \`--invisible-input-singleline-focus-bg-color\`      | Single-line input background on focus       |
| \`--invisible-input-singleline-placeholder-color\`   | Single-line input placeholder color         |
| \`--invisible-input-singleline-placeholder-font-style\` | Single-line input placeholder font style |
| \`--invisible-input-singleline-placeholder-font-family\` | Single-line input placeholder font family |
| \`--invisible-input-multiline-height\`               | Multi-line input height                     |
| \`--invisible-input-multiline-width\`                | Multi-line input width                      |
| \`--invisible-input-multiline-max-height\`           | Multi-line input max height                 |
| \`--invisible-input-multiline-max-width\`            | Multi-line input max width                  |
| \`--invisible-input-multiline-line-height\`          | Multi-line input line height                |
| \`--invisible-input-multiline-font-family\`          | Multi-line input font family                |
| \`--invisible-input-multiline-font-weight\`          | Multi-line input font weight                |
| \`--invisible-input-multiline-font-size\`            | Multi-line input font size                  |
| \`--invisible-input-multiline-text-color\`           | Multi-line input text color                 |
| \`--invisible-input-multiline-text-align\`           | Multi-line input text alignment             |
| \`--invisible-input-multiline-focus-font-family\`    | Multi-line input font family on focus       |
| \`--invisible-input-multiline-focus-font-weight\`    | Multi-line input font weight on focus       |
| \`--invisible-input-multiline-focus-bg-color\`       | Multi-line input background on focus        |
| \`--invisible-input-multiline-placeholder-color\`    | Multi-line input placeholder color          |
| \`--invisible-input-multiline-placeholder-font-style\` | Multi-line input placeholder font style  |
| \`--invisible-input-multiline-placeholder-font-family\` | Multi-line input placeholder font family |
| \`--invisible-input-hover-icon-width\`               | Hover icon width                            |
| \`--invisible-input-hover-icon-height\`              | Hover icon height                           |
| \`--invisible-input-error-bg-color\`                 | Error background color                      |

#### Shadow DOM Parts

| Part Name              | Description                        |
|------------------------|------------------------------------|
| \`container\`          | The main container                 |
| \`singleline-text-input\` | The single-line input element   |
| \`multiline-text-input\`  | The multi-line textarea element |
| \`hover-icon\`         | The hover icon image               |
        `,
      },
    },
  },
  argTypes: {
    // Component
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

    // Container
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
      table: { category: 'Container', defaultValue: { summary: '4px' } },
    },
    contOverflowX: {
      control: 'text',
      description: 'Container horizontal overflow',
      table: { category: 'Container', defaultValue: { summary: 'auto' } },
    },
    contOverflowY: {
      control: 'text',
      description: 'Container vertical overflow',
      table: { category: 'Container', defaultValue: { summary: 'auto' } },
    },

    // Single Line Mode
    singleHeight: {
      control: 'text',
      description: 'Single-line input height',
      table: {
        category: 'Single Line Mode',
        defaultValue: { summary: '100%' },
      },
    },
    singleWidth: {
      control: 'text',
      description: 'Single-line input width',
      table: {
        category: 'Single Line Mode',
        defaultValue: { summary: '100%' },
      },
    },
    singleMaxHeight: {
      control: 'text',
      description: 'Max height for single-line input',
      table: {
        category: 'Single Line Mode',
        defaultValue: { summary: '100%' },
      },
    },
    singleMaxWidth: {
      control: 'text',
      description: 'Max width for single-line input',
      table: {
        category: 'Single Line Mode',
        defaultValue: { summary: '100%' },
      },
    },
    singleLineHeight: {
      control: 'text',
      description: 'Line height for single-line input',
      table: {
        category: 'Single Line Mode',
        defaultValue: { summary: '100%' },
      },
    },
    singleOverflowX: {
      control: 'text',
      description: 'Horizontal overflow for single-line input',
      table: {
        category: 'Single Line Mode',
        defaultValue: { summary: 'auto' },
      },
    },
    singleOverflowY: {
      control: 'text',
      description: 'Vertical overflow for single-line input',
      table: {
        category: 'Single Line Mode',
        defaultValue: { summary: 'auto' },
      },
    },
    singleFontFamily: {
      control: 'text',
      description: 'Font family for single-line input',
      table: {
        category: 'Single Line Mode',
        defaultValue: { summary: "'FiraMono', monospace" },
      },
    },
    singleFontWeight: {
      control: 'text',
      description: 'Font weight for single-line input',
      table: {
        category: 'Single Line Mode',
        defaultValue: { summary: 'normal' },
      },
    },
    singleFontSize: {
      control: 'text',
      description: 'Font size for single-line input',
      table: {
        category: 'Single Line Mode',
        defaultValue: { summary: '18px' },
      },
    },
    singleTextColor: {
      control: 'color',
      description: 'Text color for single-line input',
      table: {
        category: 'Single Line Mode',
        defaultValue: { summary: 'black' },
      },
    },
    singleTextAlign: {
      control: 'text',
      description: 'Text alignment for single-line input',
      table: {
        category: 'Single Line Mode',
        defaultValue: { summary: 'start' },
      },
    },
    singleFocusFontFamily: {
      control: 'text',
      description: 'Font family on focus (single-line)',
      table: {
        category: 'Single Line Mode',
        defaultValue: { summary: "'FiraMonoBold', monospace" },
      },
    },
    singleFocusFontWeight: {
      control: 'text',
      description: 'Font weight on focus (single-line)',
      table: {
        category: 'Single Line Mode',
        defaultValue: { summary: 'bold' },
      },
    },
    singleFocusBgColor: {
      control: 'color',
      description: 'Background color on focus (single-line)',
      table: {
        category: 'Single Line Mode',
        defaultValue: { summary: 'transparent' },
      },
    },
    singlePlaceholderColor: {
      control: 'color',
      description: 'Placeholder color (single-line)',
      table: {
        category: 'Single Line Mode',
        defaultValue: { summary: 'black' },
      },
    },
    singlePlaceholderFontStyle: {
      control: 'text',
      description: 'Placeholder font style (single-line)',
      table: {
        category: 'Single Line Mode',
        defaultValue: { summary: 'normal' },
      },
    },
    singlePlaceholderFontFamily: {
      control: 'text',
      description: 'Placeholder font family (single-line)',
      table: {
        category: 'Single Line Mode',
        defaultValue: { summary: "'FiraMono', monospace" },
      },
    },

    // Multi-Line Mode
    multiLine: {
      control: 'boolean',
      description: 'Enable multi-line input',
      table: {
        category: 'Multi-Line Mode',
        defaultValue: { summary: 'false' },
      },
    },
    multiHeight: {
      control: 'text',
      description: 'Height for multi-line input',
      table: { category: 'Multi-Line Mode', defaultValue: { summary: '100%' } },
    },
    multiWidth: {
      control: 'text',
      description: 'Width for multi-line input',
      table: { category: 'Multi-Line Mode', defaultValue: { summary: '100%' } },
    },
    multiMaxHeight: {
      control: 'text',
      description: 'Max height for multi-line input',
      table: { category: 'Multi-Line Mode', defaultValue: { summary: '100%' } },
    },
    multiMaxWidth: {
      control: 'text',
      description: 'Max width for multi-line input',
      table: { category: 'Multi-Line Mode', defaultValue: { summary: '100%' } },
    },
    multiLineHeight: {
      control: 'text',
      description: 'Line height for multi-line input',
      table: { category: 'Multi-Line Mode', defaultValue: { summary: '21px' } },
    },
    multiOverflowX: {
      control: 'text',
      description: 'Horizontal overflow for multi-line input',
      table: { category: 'Multi-Line Mode', defaultValue: { summary: 'auto' } },
    },
    multiOverflowY: {
      control: 'text',
      description: 'Vertical overflow for multi-line input',
      table: { category: 'Multi-Line Mode', defaultValue: { summary: 'auto' } },
    },
    multiFontFamily: {
      control: 'text',
      description: 'Font family for multi-line input',
      table: {
        category: 'Multi-Line Mode',
        defaultValue: { summary: "'FiraMono', monospace" },
      },
    },
    multiFontWeight: {
      control: 'text',
      description: 'Font weight for multi-line input',
      table: {
        category: 'Multi-Line Mode',
        defaultValue: { summary: 'normal' },
      },
    },
    multiFontSize: {
      control: 'text',
      description: 'Font size for multi-line input',
      table: { category: 'Multi-Line Mode', defaultValue: { summary: '20px' } },
    },
    multiTextColor: {
      control: 'color',
      description: 'Text color for multi-line input',
      table: { category: 'Multi-Line Mode', defaultValue: { summary: 'gray' } },
    },
    multiTextAlign: {
      control: 'text',
      description: 'Text alignment for multi-line input',
      table: {
        category: 'Multi-Line Mode',
        defaultValue: { summary: 'center' },
      },
    },
    multiFocusFontFamily: {
      control: 'text',
      description: 'Font family on focus (multi-line)',
      table: {
        category: 'Multi-Line Mode',
        defaultValue: { summary: "'FiraMono', monospace" },
      },
    },
    multiFocusFontWeight: {
      control: 'text',
      description: 'Font weight on focus (multi-line)',
      table: {
        category: 'Multi-Line Mode',
        defaultValue: { summary: 'normal' },
      },
    },
    multiFocusBgColor: {
      control: 'color',
      description: 'Background color on focus (multi-line)',
      table: {
        category: 'Multi-Line Mode',
        defaultValue: { summary: '#eceff1' },
      },
    },
    multiPlaceholderColor: {
      control: 'color',
      description: 'Placeholder color (multi-line)',
      table: { category: 'Multi-Line Mode', defaultValue: { summary: 'gray' } },
    },
    multiPlaceholderFontStyle: {
      control: 'text',
      description: 'Placeholder font style (multi-line)',
      table: {
        category: 'Multi-Line Mode',
        defaultValue: { summary: 'italic' },
      },
    },
    multiPlaceholderFontFamily: {
      control: 'text',
      description: 'Placeholder font family (multi-line)',
      table: {
        category: 'Multi-Line Mode',
        defaultValue: { summary: 'sans-serif' },
      },
    },

    // Hover Icon
    hoverIconSrc: {
      control: 'text',
      description: 'Image source URL for hover icon',
      table: { category: 'Hover Icon' },
    },
    hoverIconHeight: {
      control: 'text',
      description: 'Height of the hover icon',
      table: { category: 'Hover Icon', defaultValue: { summary: '24px' } },
    },
    hoverIconWidth: {
      control: 'text',
      description: 'Width of the hover icon',
      table: { category: 'Hover Icon', defaultValue: { summary: '24px' } },
    },

    // Error
    errorBgColor: {
      control: 'color',
      description: 'Background color for error state',
      table: {
        category: 'Error',
        defaultValue: { summary: 'rgba(200, 40, 40, 0.4)' },
      },
    },
    error: {
      control: 'boolean',
      description: 'Error state',
      table: { category: 'Error', defaultValue: { summary: 'false' } },
    },

    // Content
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

    // Events
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
    .contOverflowX=${args.contOverflowX}
    .contOverflowY=${args.contOverflowY}
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
    .singleTextAlign=${args.singleTextAlign}
    .singleFocusFontFamily=${args.singleFocusFontFamily}
    .singleFocusFontWeight=${args.singleFocusFontWeight}
    .singleFocusBgColor=${args.singleFocusBgColor}
    .singlePlaceholderColor=${args.singlePlaceholderColor}
    .singlePlaceholderFontStyle=${args.singlePlaceholderFontStyle}
    .singlePlaceholderFontFamily=${args.singlePlaceholderFontFamily}
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
    .multiTextAlign=${args.multiTextAlign}
    .multiFocusFontFamily=${args.multiFocusFontFamily}
    .multiFocusFontWeight=${args.multiFocusFontWeight}
    .multiFocusBgColor=${args.multiFocusBgColor}
    .multiPlaceholderColor=${args.multiPlaceholderColor}
    .multiPlaceholderFontStyle=${args.multiPlaceholderFontStyle}
    .multiPlaceholderFontFamily=${args.multiPlaceholderFontFamily}
    .hoverIconSrc=${args.hoverIconSrc}
    .hoverIconHeight=${args.hoverIconHeight}
    .hoverIconWidth=${args.hoverIconWidth}
    .errorBgColor=${args.errorBgColor}
    .value=${args.value}
    .placeholder=${args.placeholder}
    .error=${args.error}
    .handleBlur=${args.handleBlur}
    .handleChange=${args.handleChange}
    .handleKeyUp=${args.handleKeyUp}
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
  contOverflowX: 'auto',
  contOverflowY: 'auto',
  singleHeight: '100%',
  singleWidth: '100%',
  singleMaxHeight: '100%',
  singleMaxWidth: '100%',
  singleFontSize: '18px',
  singleFontWeight: 'normal',
  singleTextColor: 'black',
  singleLineHeight: '21px',
  singleOverflowX: 'auto',
  singleOverflowY: 'auto',
  singleFontFamily: "'FiraMono', monospace",
  singleTextAlign: 'start',
  singleFocusFontFamily: "'FiraMonoBold', monospace",
  singleFocusFontWeight: 'bold',
  singleFocusBgColor: 'transparent',
  singlePlaceholderColor: 'black',
  singlePlaceholderFontStyle: 'normal',
  singlePlaceholderFontFamily: "'FiraMono', monospace",
  multiLine: false,
  multiHeight: '100%',
  multiWidth: '100%',
  multiMaxHeight: '100%',
  multiMaxWidth: '100%',
  multiLineHeight: '21px',
  multiOverflowX: 'auto',
  multiOverflowY: 'auto',
  multiFontFamily: "'FiraMono', monospace",
  multiFontWeight: 'normal',
  multiFontSize: '20px',
  multiTextColor: 'gray',
  multiTextAlign: 'center',
  multiFocusFontFamily: "'FiraMono', monospace",
  multiFocusFontWeight: 'normal',
  multiFocusBgColor: '#eceff1',
  multiPlaceholderColor: 'gray',
  multiPlaceholderFontStyle: 'italic',
  multiPlaceholderFontFamily: 'sans-serif',
  hoverIconHeight: '24px',
  hoverIconWidth: '24px',
  errorBgColor: 'rgba(200, 40, 40, 0.4)',
  value: '',
  placeholder: 'Enter text here...',
  error: false,
  handleBlur: (val: string) => {
    console.log(`Blur: ${val}`);
  },
  handleChange: (val: string) => {
    console.log(`Change: ${val}`);
  },
  handleKeyUp: (val: string) => {
    console.log(`KeyUp: ${val}`);
  },
};
