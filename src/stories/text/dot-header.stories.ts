import '../../components/text/dot-header';
import { html } from 'lit';
import type { Meta, StoryFn } from '@storybook/web-components';

type DotHeaderProps = {
  compHeight?: string;
  compWidth?: string;
  justifyHeader?: string;
  alignHeader?: string;
  dotTextGap?: string;
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

const meta: Meta<DotHeaderProps> = {
  title: 'Components/Text/Dot Header',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### \`<dot-header>\`

A header component that displays a dot followed by customizable text.

#### CSS Variables (Configurable via props)

| Variable                             | Description                |
|-------------------------------------|----------------------------|
| \`--dot-header-comp-height\`        | Container height           |
| \`--dot-header-comp-width\`         | Container width            |
| \`--dot-header-justify-content\`    | Flexbox justify-content    |
| \`--dot-header-align-items\`        | Flexbox align-items        |
| \`--dot-header-dot-text-gap\`       | Gap between dot and text   |
| \`--dot-header-line-height\`        | Line height of text        |
| \`--dot-header-font-size\`          | Font size of text          |
| \`--dot-header-font-weight\`        | Font weight of text        |
| \`--dot-header-font-family\`        | Font family of text        |
| \`--dot-header-color\`              | Text color                 |
| \`--dot-header-text-shadow\`        | Text shadow                |
| \`--dot-header-text-transform\`     | Text transform             |
| \`--dot-header-text-align\`         | Text alignment             |
        `,
      },
    },
  },
  argTypes: {
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
    dotTextGap: {
      control: 'text',
      description: 'Gap between the dot and the text',
      table: { category: 'Layout', defaultValue: { summary: '7px' } },
    },
    headerText: {
      control: 'text',
      description: 'Header text content',
      table: { category: 'Text', defaultValue: { summary: 'Dot Header' } },
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
      table: { category: 'Text', defaultValue: { summary: 'normal' } },
    },
    textFontFamily: {
      control: 'text',
      description: 'Font family of the header text',
      table: {
        category: 'Text',
        defaultValue: { summary: "'FiraMono', sans-serif" },
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
      table: { category: 'Text', defaultValue: { summary: 'uppercase' } },
    },
    textAlign: {
      control: 'text',
      description: 'Text alignment within the header',
      table: { category: 'Text', defaultValue: { summary: 'center' } },
    },
  },
};

export default meta;

export const Default: StoryFn<DotHeaderProps> = (args) => html`
  <dot-header
    .compHeight=${args.compHeight}
    .compWidth=${args.compWidth}
    .justifyHeader=${args.justifyHeader}
    .alignHeader=${args.alignHeader}
    .dotTextGap=${args.dotTextGap}
    .headerText=${args.headerText}
    .lineHeight=${args.lineHeight}
    .textFontSize=${args.textFontSize}
    .textFontWeight=${args.textFontWeight}
    .textFontFamily=${args.textFontFamily}
    .textColor=${args.textColor}
    .textShadow=${args.textShadow}
    .textTransform=${args.textTransform}
    .textAlign=${args.textAlign}
  ></dot-header>
`;

Default.args = {
  compHeight: 'fit-content',
  compWidth: 'fit-content',
  justifyHeader: 'center',
  alignHeader: 'center',
  dotTextGap: '7px',
  headerText: 'Dot Header',
  lineHeight: '22px',
  textFontSize: '21px',
  textFontWeight: 'normal',
  textFontFamily: "'FiraMono', sans-serif",
  textColor: 'black',
  textShadow: '0px 2px 5px #d0d0d0',
  textTransform: 'uppercase',
  textAlign: 'center',
};
