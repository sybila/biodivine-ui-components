import '../../components/text/invisible-input';
import { html } from 'lit';
import type { Meta, StoryFn } from '@storybook/web-components-vite';

type InvisibleInputProps = {
  compHeight?: string;
  compWidth?: string;
  contBgColor?: string;
  contFocusBgColor?: string;
  contErrorBgColor?: string;
  contPadX?: string;
  contPadY?: string;
  contBorderRadius?: string;
  contOverflowX?: string;
  contOverflowY?: string;
  textLineHeight?: string;
  fontFamily?: string;
  fontWeight?: string;
  fontSize?: string;
  textColor?: string;
  textAlign?: string;
  focusFontFamily?: string;
  focusFontWeight?: string;
  placeholderColor?: string;
  placeholderFontStyle?: string;
  placeholderFontFamily?: string;
  multiLine?: boolean;
  hoverIconSrc?: string;
  hoverIconHeight?: string;
  hoverIconWidth?: string;
  value?: string;
  error?: boolean;
  placeholder?: string;
  handleSubmit?: (value: string) => void;
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
### '<invisible-input>'

A flexible input component that supports both **single-line** and **multi-line** modes using a unified styling system.

Set 'multiLine' to 'true' to render a textarea html element, otherwise a standard input html element is used.

---

### CSS Custom Properties

#### Container

| Variable | Description |
|----------|------------|
| '--invisible-input-comp-height' | Component height (doesn't support fit-content) |
| '--invisible-input-comp-width' | Component width (doesn't support fit-content) |
| '--invisible-input-cont-padx' | Horizontal padding |
| '--invisible-input-cont-pady' | Vertical padding |
| '--invisible-input-border-radius' | Container border radius |
| '--invisible-input-cont-overflow-x' | Horizontal overflow behavior |
| '--invisible-input-cont-overflow-y' | Vertical overflow behavior |
| '--invisible-input-cont-focus-bg-color' | Background color on focus |
| '--invisible-input-cont-error-bg-color' | Background color in error state |

---

#### Text Box (applies to both input & textarea)

| Variable | Description |
|----------|------------|
| '--invisible-input-text-line-height' | Line height |

---

#### Typography

| Variable | Description |
|----------|------------|
| '--invisible-input-font-family' | Font family |
| '--invisible-input-font-weight' | Font weight |
| '--invisible-input-font-size' | Font size |
| '--invisible-input-text-color' | Text color |
| '--invisible-input-text-align' | Text alignment |

---

#### Focus Typography

| Variable | Description |
|----------|------------|
| '--invisible-input-focus-font-family' | Font family on focus |
| '--invisible-input-focus-font-weight' | Font weight on focus |

---

#### Placeholder

| Variable | Description |
|----------|------------|
| '--invisible-input-placeholder-color' | Placeholder text color |
| '--invisible-input-placeholder-font-style' | Placeholder font style |
| '--invisible-input-placeholder-font-family' | Placeholder font family |

---

#### Hover Icon

| Variable | Description |
|----------|------------|
| '--invisible-input-hover-icon-width' | Hover icon width |
| '--invisible-input-hover-icon-height' | Hover icon height |

---

### Shadow DOM Parts

| Part Name | Description |
|-----------|------------|
| 'container' | Wrapper element |
| 'singleline-text-input' | input html element (single-line mode) |
| 'multiline-text-input' | textarea html element (multi-line mode) |
| 'hover-icon' | Hover icon image |

---

### Methods

| Method | Description |
|--------|-------------|
| \`focus()\` | Focuses the internal input element |

---

### Notes

- All styling is shared between single-line and multi-line modes.
- Use 'multiLine' to switch rendering behavior.
- Error state is controlled via the 'error' property.`,
      },
    },
  },
  argTypes: {
    // Container
    compHeight: {
      control: 'text',
      description: "Component height (doesn't support fit-content)",
      table: { category: 'Container', defaultValue: { summary: '28px' } },
    },
    compWidth: {
      control: 'text',
      description: "Component width (doesn't support fit-content)",
      table: { category: 'Container', defaultValue: { summary: '300px' } },
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
      description: 'Border radius',
      table: { category: 'Container', defaultValue: { summary: '4px' } },
    },
    contOverflowX: {
      control: 'text',
      description: 'Horizontal overflow',
      table: { category: 'Container', defaultValue: { summary: 'auto' } },
    },
    contOverflowY: {
      control: 'text',
      description: 'Vertical overflow',
      table: { category: 'Container', defaultValue: { summary: 'auto' } },
    },
    contBgColor: {
      control: 'color',
      description: 'Background color of the container',
      table: {
        category: 'Container',
        defaultValue: { summary: 'transparent' },
      },
    },
    contFocusBgColor: {
      control: 'color',
      description: 'Background color on focus',
      table: {
        category: 'Container',
        defaultValue: { summary: 'transparent' },
      },
    },
    contErrorBgColor: {
      control: 'color',
      description: 'Background color in error state',
      table: {
        category: 'Container',
        defaultValue: { summary: 'rgba(200, 40, 40, 0.4)' },
      },
    },

    // Text Box
    textLineHeight: {
      control: 'text',
      description: 'Line height',
      table: { category: 'Text Box', defaultValue: { summary: '27px' } },
    },

    // Typography
    fontFamily: {
      control: 'text',
      description: 'Font family',
      table: {
        category: 'Typography',
        defaultValue: { summary: "'FiraMono', monospace" },
      },
    },
    fontWeight: {
      control: 'text',
      description: 'Font weight',
      table: { category: 'Typography', defaultValue: { summary: 'normal' } },
    },
    fontSize: {
      control: 'text',
      description: 'Font size',
      table: { category: 'Typography', defaultValue: { summary: '20px' } },
    },
    textColor: {
      control: 'color',
      description: 'Text color',
      table: { category: 'Typography', defaultValue: { summary: 'black' } },
    },
    textAlign: {
      control: 'text',
      description: 'Text alignment',
      table: { category: 'Typography', defaultValue: { summary: 'start' } },
    },

    // Focus
    focusFontFamily: {
      control: 'text',
      description: 'Font family on focus',
      table: {
        category: 'Focus',
        defaultValue: { summary: "'FiraMonoBold', monospace" },
      },
    },
    focusFontWeight: {
      control: 'text',
      description: 'Font weight on focus',
      table: { category: 'Focus', defaultValue: { summary: 'bold' } },
    },

    // Placeholder
    placeholderColor: {
      control: 'color',
      description: 'Placeholder color',
      table: { category: 'Placeholder', defaultValue: { summary: 'gray' } },
    },
    placeholderFontStyle: {
      control: 'text',
      description: 'Placeholder font style',
      table: { category: 'Placeholder', defaultValue: { summary: 'normal' } },
    },
    placeholderFontFamily: {
      control: 'text',
      description: 'Placeholder font family',
      table: {
        category: 'Placeholder',
        defaultValue: { summary: "'FiraMono', monospace" },
      },
    },

    // Mode
    multiLine: {
      control: 'boolean',
      description: 'Enable multi-line textarea',
      table: { category: 'Mode', defaultValue: { summary: 'false' } },
    },

    // Hover Icon
    hoverIconSrc: {
      control: 'text',
      description: 'Hover icon source',
      table: { category: 'Hover Icon' },
    },
    hoverIconHeight: {
      control: 'text',
      description: 'Hover icon height',
      table: { category: 'Hover Icon', defaultValue: { summary: '24px' } },
    },
    hoverIconWidth: {
      control: 'text',
      description: 'Hover icon width',
      table: { category: 'Hover Icon', defaultValue: { summary: '24px' } },
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

    // State
    error: {
      control: 'boolean',
      description: 'Error state',
      table: { category: 'State', defaultValue: { summary: 'false' } },
    },

    // Events
    handleSubmit: {
      control: false,
      description:
        'Submit callback (Submits after pressing Enter) -> When multiLine is true, Shift + Enter creates a new line and Enter alone submits the form.',
      table: { category: 'Events' },
    },
    handleChange: {
      control: false,
      description: 'Change callback',
      table: { category: 'Events' },
    },
    handleBlur: {
      control: false,
      description: 'Blur callback',
      table: { category: 'Events' },
    },
    handleKeyUp: {
      control: false,
      description: 'Key up callback',
      table: { category: 'Events' },
    },
  },
};

export default meta;

export const Default: StoryFn<InvisibleInputProps> = (args) => html`
  <invisible-input
    .compHeight=${args.compHeight}
    .compWidth=${args.compWidth}
    .contBgColor=${args.contBgColor}
    .contFocusBgColor=${args.contFocusBgColor}
    .contErrorBgColor=${args.contErrorBgColor}
    .contPadX=${args.contPadX}
    .contPadY=${args.contPadY}
    .contBorderRadius=${args.contBorderRadius}
    .contOverflowX=${args.contOverflowX}
    .contOverflowY=${args.contOverflowY}
    .textLineHeight=${args.textLineHeight}
    .fontFamily=${args.fontFamily}
    .fontWeight=${args.fontWeight}
    .fontSize=${args.fontSize}
    .textColor=${args.textColor}
    .textAlign=${args.textAlign}
    .focusFontFamily=${args.focusFontFamily}
    .focusFontWeight=${args.focusFontWeight}
    .placeholderColor=${args.placeholderColor}
    .placeholderFontStyle=${args.placeholderFontStyle}
    .placeholderFontFamily=${args.placeholderFontFamily}
    .multiLine=${args.multiLine}
    .hoverIconSrc=${args.hoverIconSrc}
    .hoverIconHeight=${args.hoverIconHeight}
    .hoverIconWidth=${args.hoverIconWidth}
    .value=${args.value}
    .placeholder=${args.placeholder}
    .error=${args.error}
    .handleBlur=${args.handleBlur}
    .handleChange=${args.handleChange}
    .handleKeyUp=${args.handleKeyUp}
    .handleSubmit=${args.handleSubmit}
    .handleChange=${args.handleChange}
    .handleBlur=${args.handleBlur}
    .handleKeyUp=${args.handleKeyUp}
  ></invisible-input>
`;

Default.args = {
  compHeight: '28px',
  compWidth: '300px',
  contBgColor: 'transparent',
  contFocusBgColor: 'transparent',
  contErrorBgColor: 'rgba(200, 40, 40, 0.4)',
  contPadX: '8px',
  contPadY: '6px',
  contBorderRadius: '6px',
  contOverflowX: 'auto',
  contOverflowY: 'auto',
  textLineHeight: '27px',
  fontFamily: "'FiraMono', monospace",
  fontWeight: 'normal',
  fontSize: '20px',
  textColor: 'black',
  textAlign: 'start',
  focusFontFamily: "'FiraMonoBold', monospace",
  focusFontWeight: 'bold',
  placeholderColor: 'gray',
  placeholderFontStyle: 'normal',
  placeholderFontFamily: "'FiraMono', monospace",
  multiLine: false,
  hoverIconSrc: undefined,
  hoverIconHeight: '24px',
  hoverIconWidth: '24px',
  value: '',
  placeholder: 'Enter text here...',
  error: false,
  handleSubmit: (val: string) => console.log(`Submit: ${val}`),
  handleBlur: (val: string) => console.log(`Blur: ${val}`),
  handleChange: (val: string) => console.log(`Change: ${val}`),
  handleKeyUp: (val: string) => console.log(`KeyUp: ${val}`),
};
