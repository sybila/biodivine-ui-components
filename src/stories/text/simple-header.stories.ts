import '../../components/text/simple-header';
import { html } from 'lit';
import type { Meta, StoryFn } from '@storybook/web-components';

type SimpleHeaderProps = {
  /** Height of the outer component container */
  compHeight?: string;
  /** Width of the outer component container */
  compWidth?: string;
  /** Justify content of the header container */
  justifyHeader?: string;
  /** Align items of the header container */
  alignHeader?: string;
  /** Header text content */
  headerText?: string;
  /** Line height of the header text */
  lineHeight?: string;
  /** Font size of the header text */
  textFontSize?: string;
  /** Font weight of the header text */
  textFontWeight?: string;
  /** Font family of the header text */
  textFontFamily?: string;
  /** Color of the header text */
  textColor?: string;
  /** Text shadow for the header text */
  textShadow?: string;
  /** Text transformation (e.g., uppercase, lowercase) for the header text */
  textTransform?: string;
  /** Text alignment within the header */
  textAlign?: string;
};

const meta: Meta<SimpleHeaderProps> = {
  title: 'Components/Text/Simple Header',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### \`<simple-header>\`

A simple customizable header component.

#### CSS Variables (Configurable via props)

| Variable                        | Description                |
|----------------------------------|----------------------------|
| \`--simple-header-comp-height\`  | Container height           |
| \`--simple-header-comp-width\`   | Container width            |
| \`--simple-header-justify-content\` | Flexbox justify-content |
| \`--simple-header-align-items\`      | Flexbox align-items      |
| \`--simple-header-line-height\`  | Line height of text        |
| \`--simple-header-font-size\`    | Font size of text          |
| \`--simple-header-font-weight\`  | Font weight of text        |
| \`--simple-header-font-family\`  | Font family of text        |
| \`--simple-header-color\`        | Text color                 |
| \`--simple-header-text-shadow\`  | Text shadow                |
| \`--simple-header-text-transform\`| Text transform             |
| \`--simple-header-text-align\`   | Text alignment             |
        `,
      },
    },
  },
  argTypes: {
    compHeight: {
      control: 'text',
      description: 'Height of the outer component container',
      table: { category: 'Props', defaultValue: { summary: 'fit-content' } },
    },
    compWidth: {
      control: 'text',
      description: 'Width of the outer component container',
      table: { category: 'Props', defaultValue: { summary: 'fit-content' } },
    },
    justifyHeader: {
      control: 'text',
      description: 'Justify content of the header container',
      table: { category: 'Props', defaultValue: { summary: 'center' } },
    },
    alignHeader: {
      control: 'text',
      description: 'Align items of the header container',
      table: { category: 'Props', defaultValue: { summary: 'center' } },
    },
    headerText: {
      control: 'text',
      description: 'Header text content',
      table: { category: 'Props', defaultValue: { summary: 'Simple Header' } },
    },
    lineHeight: {
      control: 'text',
      description: 'Line height of the header text',
      table: { category: 'Props', defaultValue: { summary: '22px' } },
    },
    textFontSize: {
      control: 'text',
      description: 'Font size of the header text',
      table: { category: 'Props', defaultValue: { summary: '21px' } },
    },
    textFontWeight: {
      control: 'text',
      description: 'Font weight of the header text',
      table: { category: 'Props', defaultValue: { summary: 'bold' } },
    },
    textFontFamily: {
      control: 'text',
      description: 'Font family of the header text',
      table: {
        category: 'Props',
        defaultValue: { summary: "'Helvetica', 'Arial', sans-serif" },
      },
    },
    textColor: {
      control: 'color',
      description: 'Color of the header text',
      table: { category: 'Props', defaultValue: { summary: 'black' } },
    },
    textShadow: {
      control: 'text',
      description: 'Text shadow for the header text',
      table: {
        category: 'Props',
        defaultValue: { summary: '0px 2px 5px #d0d0d0' },
      },
    },
    textTransform: {
      control: 'text',
      description:
        'Text transformation (e.g., uppercase, lowercase) for the header text',
      table: { category: 'Props', defaultValue: { summary: 'none' } },
    },
    textAlign: {
      control: 'text',
      description: 'Text alignment within the header',
      table: { category: 'Props', defaultValue: { summary: 'center' } },
    },
  },
};

export default meta;

export const Default: StoryFn<SimpleHeaderProps> = (args) => html`
  <simple-header
    .compHeight=${args.compHeight}
    .compWidth=${args.compWidth}
    .justifyHeader=${args.justifyHeader}
    .alignHeader=${args.alignHeader}
    .headerText=${args.headerText}
    .lineHeight=${args.lineHeight}
    .textFontSize=${args.textFontSize}
    .textFontWeight=${args.textFontWeight}
    .textFontFamily=${args.textFontFamily}
    .textColor=${args.textColor}
    .textShadow=${args.textShadow}
    .textTransform=${args.textTransform}
    .textAlign=${args.textAlign}
  ></simple-header>
`;

Default.args = {
  compHeight: 'fit-content',
  compWidth: 'fit-content',
  justifyHeader: 'center',
  alignHeader: 'center',
  headerText: 'Simple Header',
  lineHeight: '22px',
  textFontSize: '21px',
  textFontWeight: 'bold',
  textFontFamily: "'Helvetica', 'Arial', sans-serif",
  textColor: 'black',
  textShadow: '0px 2px 5px #d0d0d0',
  textTransform: 'none',
  textAlign: 'center',
};
