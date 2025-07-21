import '../../components/text/simple-header';
import { html } from 'lit';
import type { Meta, StoryFn } from '@storybook/web-components';

type SimpleHeaderProps = {
  compHeight?: string;
  compWidth?: string;
  justifyHeader?: string;
  alignHeader?: string;
  headerText?: string;
  lineHeight?: string;
  textFontSize?: string;
  textFontWeight?: string;
  textFontFamily?: string;
  textColor?: string;
  textShadow?: string;
  textTransform?: string;
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

Simple header component.

#### CSS Custom Properties

| Variable                              | Description                |
|----------------------------------------|----------------------------|
| \`--simple-header-comp-height\`        | Container height           |
| \`--simple-header-comp-width\`         | Container width            |
| \`--simple-header-justify-content\`    | Flexbox justify-content    |
| \`--simple-header-align-items\`        | Flexbox align-items        |
| \`--simple-header-line-height\`        | Line height of text        |
| \`--simple-header-font-size\`          | Font size of text          |
| \`--simple-header-font-weight\`        | Font weight of text        |
| \`--simple-header-font-family\`        | Font family of text        |
| \`--simple-header-color\`              | Text color                 |
| \`--simple-header-text-shadow\`        | Text shadow                |
| \`--simple-header-text-transform\`     | Text transform             |
| \`--simple-header-text-align\`         | Text alignment             |

#### Shadow DOM Parts

| Part Name    | Element | Description           |
|--------------|---------|-----------------------|
| \`header-text\` | \`span\`  | The header text span   |
        `,
      },
    },
  },
  argTypes: {
    // Layout
    compHeight: {
      control: 'text',
      description: 'Height of the outer component container',
      table: { category: 'Layout', defaultValue: { summary: 'fit-content' } },
    },
    compWidth: {
      control: 'text',
      description: 'Width of the outer component container',
      table: { category: 'Layout', defaultValue: { summary: 'fit-content' } },
    },
    justifyHeader: {
      control: 'text',
      description: 'Justify content of the header container',
      table: { category: 'Layout', defaultValue: { summary: 'center' } },
    },
    alignHeader: {
      control: 'text',
      description: 'Align items of the header container',
      table: { category: 'Layout', defaultValue: { summary: 'center' } },
    },

    // Text
    headerText: {
      control: 'text',
      description: 'Header text content',
      table: { category: 'Text', defaultValue: { summary: 'Simple Header' } },
    },
    lineHeight: {
      control: 'text',
      description: 'Line height of the header text',
      table: { category: 'Text', defaultValue: { summary: '22px' } },
    },
    textFontSize: {
      control: 'text',
      description: 'Font size of the header text',
      table: { category: 'Text', defaultValue: { summary: '21px' } },
    },
    textFontWeight: {
      control: 'text',
      description: 'Font weight of the header text',
      table: { category: 'Text', defaultValue: { summary: 'bold' } },
    },
    textFontFamily: {
      control: 'text',
      description: 'Font family of the header text',
      table: {
        category: 'Text',
        defaultValue: { summary: "'Helvetica', 'Arial', sans-serif" },
      },
    },
    textColor: {
      control: 'color',
      description: 'Color of the header text',
      table: { category: 'Text', defaultValue: { summary: 'black' } },
    },
    textShadow: {
      control: 'text',
      description: 'Text shadow for the header text',
      table: {
        category: 'Text',
        defaultValue: { summary: '0px 2px 5px #d0d0d0' },
      },
    },
    textTransform: {
      control: 'text',
      description:
        'Text transformation (e.g., uppercase, lowercase) for the header text',
      table: { category: 'Text', defaultValue: { summary: 'none' } },
    },
    textAlign: {
      control: 'text',
      description: 'Text alignment within the header',
      table: { category: 'Text', defaultValue: { summary: 'center' } },
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
