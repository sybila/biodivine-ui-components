import { html } from 'lit';
import type { Meta, StoryFn } from '@storybook/web-components';
import '../../components/text/two-sided-text';

type TwoSidedTextProps = {
  compHeight?: string;
  compWidth?: string;
  justifyHeader?: string;
  alignHeader?: string;

  rightText?: string;
  rightHeight?: string;
  rightWidth?: string;
  rightLineHeight?: string;
  rightFontSize?: string;
  rightFontWeight?: string;
  rightFontFamily?: string;
  rightColor?: string;
  rightShadow?: string;
  rightTransform?: string;
  rightAlign?: string;

  leftText?: string;
  leftHeight?: string;
  leftWidth?: string;
  leftLineHeight?: string;
  leftFontSize?: string;
  leftFontWeight?: string;
  leftFontFamily?: string;
  leftColor?: string;
  leftShadow?: string;
  leftTransform?: string;
  leftAlign?: string;
};

const meta: Meta<TwoSidedTextProps> = {
  title: 'Components/Text/Two Sided Text',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### \`<two-sided-text>\`

A component for displaying two pieces of text side by side, each with independent styling.

#### CSS Custom Properties

| Variable                                 | Description                                   |
|-------------------------------------------|-----------------------------------------------|
| \`--two-sided-text-comp-height\`          | Height of the outer component                 |
| \`--two-sided-text-comp-width\`           | Width of the outer component                  |
| \`--two-sided-text-justify-content\`      | Justify content of the host                   |
| \`--two-sided-text-align-items\`          | Align items of the host                       |
| \`--two-sided-text-right-height\`         | Height of the right text                      |
| \`--two-sided-text-right-width\`          | Width of the right text                       |
| \`--two-sided-text-right-line-height\`    | Line height of the right text                 |
| \`--two-sided-text-right-font-size\`      | Font size of the right text                   |
| \`--two-sided-text-right-font-weight\`    | Font weight of the right text                 |
| \`--two-sided-text-right-font-family\`    | Font family of the right text                 |
| \`--two-sided-text-right-color\`          | Color of the right text                       |
| \`--two-sided-text-right-text-shadow\`    | Text shadow of the right text                 |
| \`--two-sided-text-right-text-transform\` | Text transform of the right text              |
| \`--two-sided-text-right-text-align\`     | Text align of the right text                  |
| \`--two-sided-text-left-height\`          | Height of the left text                       |
| \`--two-sided-text-left-width\`           | Width of the left text                        |
| \`--two-sided-text-left-line-height\`     | Line height of the left text                  |
| \`--two-sided-text-left-font-size\`       | Font size of the left text                    |
| \`--two-sided-text-left-font-weight\`     | Font weight of the left text                  |
| \`--two-sided-text-left-font-family\`     | Font family of the left text                  |
| \`--two-sided-text-left-color\`           | Color of the left text                        |
| \`--two-sided-text-left-text-shadow\`     | Text shadow of the left text                  |
| \`--two-sided-text-left-text-transform\`  | Text transform of the left text               |
| \`--two-sided-text-left-text-align\`      | Text align of the left text                   |

#### Shadow DOM Parts

| Part Name      | Element | Description         |
|----------------|---------|---------------------|
| \`right-text\` | \`span\` | The right text span |
| \`left-text\`  | \`span\` | The left text span  |
        `,
      },
    },
  },
  argTypes: {
    compHeight: {
      control: 'text',
      description: 'Height of the outer component',
      table: { defaultValue: { summary: 'fit-content' }, category: 'Layout' },
    },
    compWidth: {
      control: 'text',
      description: 'Width of the outer component',
      table: { defaultValue: { summary: 'fit-content' }, category: 'Layout' },
    },
    justifyHeader: {
      control: 'text',
      description: 'Justify content of the host',
      table: { defaultValue: { summary: 'center' }, category: 'Layout' },
    },
    alignHeader: {
      control: 'text',
      description: 'Align items of the host',
      table: { defaultValue: { summary: 'center' }, category: 'Layout' },
    },
    rightText: {
      control: 'text',
      description: 'Text for the right side',
      table: { defaultValue: { summary: 'Right' }, category: 'Right' },
    },
    rightHeight: {
      control: 'text',
      description: 'Height of the right text',
      table: { defaultValue: { summary: 'fit-content' }, category: 'Right' },
    },
    rightWidth: {
      control: 'text',
      description: 'Width of the right text',
      table: { defaultValue: { summary: 'fit-content' }, category: 'Right' },
    },
    rightLineHeight: {
      control: 'text',
      description: 'Line height of the right text',
      table: { defaultValue: { summary: '40px' }, category: 'Right' },
    },
    rightFontSize: {
      control: 'text',
      description: 'Font size of the right text',
      table: { defaultValue: { summary: '31px' }, category: 'Right' },
    },
    rightFontWeight: {
      control: 'text',
      description: 'Font weight of the right text',
      table: { defaultValue: { summary: 'normal' }, category: 'Right' },
    },
    rightFontFamily: {
      control: 'text',
      description: 'Font family of the right text',
      table: {
        defaultValue: { summary: "'BaileyReg', monospace, sans-serif" },
        category: 'Right',
      },
    },
    rightColor: {
      control: 'color',
      description: 'Color of the right text',
      table: { defaultValue: { summary: '#3a568c' }, category: 'Right' },
    },
    rightShadow: {
      control: 'text',
      description: 'Text shadow of the right text',
      table: {
        defaultValue: { summary: '0px 2px 5px #d0d0d0' },
        category: 'Right',
      },
    },
    rightTransform: {
      control: 'text',
      description: 'Text transform of the right text',
      table: { defaultValue: { summary: 'none' }, category: 'Right' },
    },
    rightAlign: {
      control: 'text',
      description: 'Text align of the right text',
      table: { defaultValue: { summary: 'center' }, category: 'Right' },
    },
    leftText: {
      control: 'text',
      description: 'Text for the left side',
      table: { defaultValue: { summary: 'Left' }, category: 'Left' },
    },
    leftHeight: {
      control: 'text',
      description: 'Height of the left text',
      table: { defaultValue: { summary: 'fit-content' }, category: 'Left' },
    },
    leftWidth: {
      control: 'text',
      description: 'Width of the left text',
      table: { defaultValue: { summary: 'fit-content' }, category: 'Left' },
    },
    leftLineHeight: {
      control: 'text',
      description: 'Line height of the left text',
      table: { defaultValue: { summary: '40px' }, category: 'Left' },
    },
    leftFontSize: {
      control: 'text',
      description: 'Font size of the left text',
      table: { defaultValue: { summary: '31px' }, category: 'Left' },
    },
    leftFontWeight: {
      control: 'text',
      description: 'Font weight of the left text',
      table: { defaultValue: { summary: 'bold' }, category: 'Left' },
    },
    leftFontFamily: {
      control: 'text',
      description: 'Font family of the left text',
      table: {
        defaultValue: { summary: "'BaileyBold', monospace, sans-serif" },
        category: 'Left',
      },
    },
    leftColor: {
      control: 'color',
      description: 'Color of the left text',
      table: { defaultValue: { summary: '#d05d5d' }, category: 'Left' },
    },
    leftShadow: {
      control: 'text',
      description: 'Text shadow of the left text',
      table: {
        defaultValue: { summary: '0px 2px 5px #d0d0d0' },
        category: 'Left',
      },
    },
    leftTransform: {
      control: 'text',
      description: 'Text transform of the left text',
      table: { defaultValue: { summary: 'none' }, category: 'Left' },
    },
    leftAlign: {
      control: 'text',
      description: 'Text align of the left text',
      table: { defaultValue: { summary: 'center' }, category: 'Left' },
    },
  },
};

export default meta;

export const Default: StoryFn<TwoSidedTextProps> = (args) => html`
  <two-sided-text
    .compHeight=${args.compHeight}
    .compWidth=${args.compWidth}
    .justifyHeader=${args.justifyHeader}
    .alignHeader=${args.alignHeader}
    .rightText=${args.rightText}
    .rightHeight=${args.rightHeight}
    .rightWidth=${args.rightWidth}
    .rightLineHeight=${args.rightLineHeight}
    .rightFontSize=${args.rightFontSize}
    .rightFontWeight=${args.rightFontWeight}
    .rightFontFamily=${args.rightFontFamily}
    .rightColor=${args.rightColor}
    .rightShadow=${args.rightShadow}
    .rightTransform=${args.rightTransform}
    .rightAlign=${args.rightAlign}
    .leftText=${args.leftText}
    .leftHeight=${args.leftHeight}
    .leftWidth=${args.leftWidth}
    .leftLineHeight=${args.leftLineHeight}
    .leftFontSize=${args.leftFontSize}
    .leftFontWeight=${args.leftFontWeight}
    .leftFontFamily=${args.leftFontFamily}
    .leftColor=${args.leftColor}
    .leftShadow=${args.leftShadow}
    .leftTransform=${args.leftTransform}
    .leftAlign=${args.leftAlign}
  ></two-sided-text>
`;

Default.args = {
  compHeight: 'fit-content',
  compWidth: 'fit-content',
  justifyHeader: 'center',
  alignHeader: 'center',
  rightText: 'Right',
  rightHeight: 'fit-content',
  rightWidth: 'fit-content',
  rightLineHeight: '40px',
  rightFontSize: '31px',
  rightFontWeight: 'normal',
  rightFontFamily: "'BaileyReg', monospace, sans-serif",
  rightColor: '#3a568c',
  rightShadow: '0px 2px 5px #d0d0d0',
  rightTransform: 'none',
  rightAlign: 'center',
  leftText: 'Left',
  leftHeight: 'fit-content',
  leftWidth: 'fit-content',
  leftLineHeight: '40px',
  leftFontSize: '31px',
  leftFontWeight: 'bold',
  leftFontFamily: "'BaileyBold', monospace, sans-serif",
  leftColor: '#d05d5d',
  leftShadow: '0px 2px 5px #d0d0d0',
  leftTransform: 'none',
  leftAlign: 'center',
};
