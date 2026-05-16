import { html } from 'lit';
import type { Meta, StoryFn } from '@storybook/web-components-vite';
import '../../components/text/non-scrollable-text';

type NonScrollableTextProps = {
  compHeight?: string;
  compWidth?: string;
  userSelect?: string;
  textColor?: string;
  textJustify?: string;
  textAlign?: string;
  textShadow?: string;
  textFontSize?: string;
  textFontWeight?: string;
  textFontFamily?: string;
  textOverflow?: string;
  text?: string;
};

const meta: Meta<NonScrollableTextProps> = {
  title: 'Components/Text/Non Scrollable Text',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### <non-scrollable-text>

A text component that does not scroll and truncates overflow with ellipsis.

#### CSS Custom Properties

| Variable | Description |
|-------------------------------|-------------------------------|
| --non-scrollable-text-comp-height | Height of the component |
| --non-scrollable-text-comp-width | Width of the component |
| --non-scrollable-text-user-select | User select behavior |
| --non-scrollable-text-color | Text color |
| --non-scrollable-text-justify | Justify content |
| --non-scrollable-text-align | Align items |
| --non-scrollable-text-shadow | Text shadow |
| --non-scrollable-text-font-size | Font size |
| --non-scrollable-text-font-weight | Font weight |
| --non-scrollable-text-font-family | Font family |
| --non-scrollable-text-overflow | Text overflow style |
`,
      },
    },
  },
  argTypes: {
    compHeight: {
      control: 'text',
      description: 'Height of the component',
      table: {
        defaultValue: { summary: 'fit-content' },
        category: 'Component',
      },
    },
    compWidth: {
      control: 'text',
      description: 'Width of the component',
      table: { defaultValue: { summary: '200px' }, category: 'Component' },
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
      table: { defaultValue: { summary: 'start' }, category: 'Text' },
    },
    textAlign: {
      control: 'text',
      description: 'Align text',
      table: { defaultValue: { summary: 'center' }, category: 'Text' },
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
    textOverflow: {
      control: 'text',
      description: 'Text overflow style',
      table: { defaultValue: { summary: 'ellipsis' }, category: 'Text' },
    },
    text: {
      control: 'text',
      description: 'Text content',
      table: {
        defaultValue: { summary: 'Non-scrollable text example.' },
        category: 'Text',
      },
    },
  },
};

export default meta;

export const Default: StoryFn<NonScrollableTextProps> = (args) => html`
  <non-scrollable-text
    .compHeight=${args.compHeight}
    .compWidth=${args.compWidth}
    .userSelect=${args.userSelect}
    .textColor=${args.textColor}
    .textJustify=${args.textJustify}
    .textAlign=${args.textAlign}
    .textShadow=${args.textShadow}
    .textFontSize=${args.textFontSize}
    .textFontWeight=${args.textFontWeight}
    .textFontFamily=${args.textFontFamily}
    .textOverflow=${args.textOverflow}
    .text=${args.text}
  ></non-scrollable-text>
`;

Default.args = {
  compHeight: 'fit-content',
  compWidth: '200px',
  userSelect: 'none',
  textColor: 'black',
  textJustify: 'start',
  textAlign: 'center',
  textShadow: 'none',
  textFontSize: '16px',
  textFontWeight: 'normal',
  textFontFamily: "'Helvetica', 'Arial', sans-serif",
  textOverflow: 'ellipsis',
  text: 'Non-scrollable text example.',
};
