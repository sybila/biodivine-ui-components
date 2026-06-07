import { html } from 'lit';
import type { Meta, StoryFn } from '@storybook/web-components-vite';
import '../../components/text/multiline-text';

type MultilineTextProps = {
  compHeight?: string;
  compWidth?: string;
  cursor?: string;
  overflowY?: string;
  userSelect?: string;
  textColor?: string;
  textJustify?: string;
  textAlign?: string;
  textShadow?: string;
  textFontSize?: string;
  textFontWeight?: string;
  textFontFamily?: string;
  textFontStyle?: string;
  placeholderColor?: string;
  placeholderFontFamily?: string;
  placeholderFontWeight?: string;
  placeholderFontStyle?: string;
  text?: string;
  placeholder?: string;
  handleClick?: () => void;
};

const meta: Meta<MultilineTextProps> = {
  title: 'Components/Text/Multiline Text',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### <multiline-text>

Multi-line text component that wraps and can show a placeholder when empty.

#### CSS Custom Properties

| Variable | Description |
|-------------------------------|-------------------------------|
| --multiline-text-comp-height | Height of the component (does not support fit-content) |
| --multiline-text-comp-width | Width of the component (does not support fit-content) |
| --multiline-text-cursor | Cursor style for the component |
| --multiline-text-overflow-y | Vertical overflow behavior |
| --multiline-text-user-select | User select behavior |
| --multiline-text-color | Text color |
| --multiline-text-justify | Justify content |
| --multiline-text-align | Align text |
| --multiline-text-shadow | Text shadow |
| --multiline-text-font-size | Font size |
| --multiline-text-font-weight | Font weight |
| --multiline-text-font-family | Font family |
| --multiline-text-font-style | Font style |
| --multiline-text-placeholder-color | Placeholder color |
| --multiline-text-placeholder-font-family | Placeholder font family |
| --multiline-text-placeholder-font-weight | Placeholder font weight |
| --multiline-text-placeholder-font-style | Placeholder font style |
`,
      },
    },
  },
  argTypes: {
    compHeight: {
      control: 'text',
      description: 'Height of the component (does not support fit-content)',
      table: { defaultValue: { summary: '300px' }, category: 'Component' },
    },
    compWidth: {
      control: 'text',
      description: 'Width of the component (does not support fit-content)',
      table: { defaultValue: { summary: '200px' }, category: 'Component' },
    },
    overflowY: {
      control: 'text',
      description: 'Vertical overflow behavior',
      table: { defaultValue: { summary: 'auto' }, category: 'Component' },
    },
    userSelect: {
      control: 'text',
      description: 'User select behavior',
      table: { defaultValue: { summary: 'none' }, category: 'Component' },
    },
    textColor: {
      control: 'color',
      description: 'Text color',
      table: { defaultValue: { summary: 'black' }, category: 'Text' },
    },
    textJustify: {
      control: 'text',
      description: 'Justify text',
      table: { defaultValue: { summary: 'center' }, category: 'Text' },
    },
    textAlign: {
      control: 'text',
      description: 'Align text',
      table: { defaultValue: { summary: 'start' }, category: 'Text' },
    },
    textShadow: {
      control: 'text',
      description: 'Text shadow',
      table: { defaultValue: { summary: 'none' }, category: 'Text' },
    },
    textFontSize: {
      control: 'text',
      description: 'Font size',
      table: { defaultValue: { summary: '16px' }, category: 'Text' },
    },
    textFontWeight: {
      control: 'text',
      description: 'Font weight',
      table: { defaultValue: { summary: 'normal' }, category: 'Text' },
    },
    textFontFamily: {
      control: 'text',
      description: 'Font family',
      table: {
        defaultValue: { summary: "'Helvetica', 'Arial', sans-serif" },
        category: 'Text',
      },
    },
    textFontStyle: {
      control: 'text',
      description: 'Font style',
      table: { defaultValue: { summary: 'normal' }, category: 'Text' },
    },
    cursor: {
      control: 'text',
      description: 'Cursor style for the component',
      table: { defaultValue: { summary: 'default' }, category: 'Component' },
    },
    handleClick: {
      action: 'handleClick',
      description: 'Click handler for the component (() => void function)',
      table: { category: 'Events' },
    },
    placeholderColor: {
      control: 'color',
      description: 'Placeholder color',
      table: { defaultValue: { summary: 'gray' }, category: 'Placeholder' },
    },
    placeholderFontFamily: {
      control: 'text',
      description: 'Placeholder font family',
      table: {
        defaultValue: { summary: "'FiraMono', monospace" },
        category: 'Placeholder',
      },
    },
    placeholderFontWeight: {
      control: 'text',
      description: 'Placeholder font weight',
      table: { defaultValue: { summary: 'normal' }, category: 'Placeholder' },
    },
    placeholderFontStyle: {
      control: 'text',
      description: 'Placeholder font style',
      table: { defaultValue: { summary: 'italic' }, category: 'Placeholder' },
    },
    text: {
      control: 'text',
      description: 'Text content',
      table: {
        category: 'Text',
      },
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text when empty',
      table: {
        category: 'Placeholder',
      },
    },
  },
};

export default meta;

export const Default: StoryFn<MultilineTextProps> = (args) => html`
  <multiline-text
    .compHeight=${args.compHeight}
    .compWidth=${args.compWidth}
    .overflowY=${args.overflowY}
    .userSelect=${args.userSelect}
    .textColor=${args.textColor}
    .textJustify=${args.textJustify}
    .textAlign=${args.textAlign}
    .textShadow=${args.textShadow}
    .textFontSize=${args.textFontSize}
    .textFontWeight=${args.textFontWeight}
    .textFontFamily=${args.textFontFamily}
    .textFontStyle=${args.textFontStyle}
    .cursor=${args.cursor}
    .handleClick=${args.handleClick}
    .placeholderColor=${args.placeholderColor}
    .placeholderFontFamily=${args.placeholderFontFamily}
    .placeholderFontWeight=${args.placeholderFontWeight}
    .placeholderFontStyle=${args.placeholderFontStyle}
    .text=${args.text}
    .placeholder=${args.placeholder}
  ></multiline-text>
`;

Default.args = {
  compHeight: '300px',
  compWidth: '200px',
  overflowY: 'auto',
  userSelect: 'none',
  textColor: 'black',
  textJustify: 'center',
  textAlign: 'start',
  textShadow: 'none',
  textFontSize: '16px',
  textFontWeight: 'normal',
  textFontFamily: "'Helvetica', 'Arial', sans-serif",
  textFontStyle: 'normal',
  cursor: 'default',
  handleClick: console.log.bind(console, 'Multiline text clicked'),
  placeholderColor: 'gray',
  placeholderFontFamily: "'FiraMono', monospace",
  placeholderFontWeight: 'normal',
  placeholderFontStyle: 'italic',
  text: 'This is a multiline text example. It should wrap across lines and demonstrate the component behavior.\nSecond line of text to show wrapping.',
  placeholder: 'Empty text placeholder',
};
