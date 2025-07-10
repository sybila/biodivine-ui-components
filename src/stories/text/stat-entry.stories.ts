import '../../components/text/stat-entry';
import { html } from 'lit';
import type { Meta, StoryFn } from '@storybook/web-components';

type StatEntryProps = {
  compHeight?: string;
  compWidth?: string;
  justifyContent?: string;
  alignItems?: string;
  valNameGap?: string;
  statName?: string;
  statValue?: string;
  nameHeight?: string;
  nameWidth?: string;
  nameAlign?: string;
  nameOverflowX?: string;
  addColon?: boolean;
  valueHeight?: string;
  valueWidth?: string;
  valueAlign?: string;
  valueOverflowX?: string;
  lineHeight?: string;
  textFontSize?: string;
  textFontWeight?: string;
  textFontFamily?: string;
  textColor?: string;
  textShadow?: string;
  textTransform?: string;
};

const meta: Meta<StatEntryProps> = {
  title: 'Components/Text/Stat Entry',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### \`<stat-entry>\`

Component for displaying a labeled statistic (like "HP: 45").

#### CSS Variables

| Variable                              | Description                    |
|---------------------------------------|--------------------------------|
| \`--stat-entry-comp-height\`          | Component height               |
| \`--stat-entry-comp-width\`           | Component width                |
| \`--stat-entry-justify-content\`      | Flex container justify         |
| \`--stat-entry-align-items\`          | Flex container align           |
| \`--stat-entry-name-value-gap\`       | Gap between name and value     |
| \`--stat-entry-name-height\`          | Name section height            |
| \`--stat-entry-name-width\`           | Name section width             |
| \`--stat-entry-name-align\`           | Name text-align                |
| \`--stat-entry-name-overflow-x\`      | Name overflow-x                |
| \`--stat-entry-value-height\`         | Value section height           |
| \`--stat-entry-value-width\`          | Value section width            |
| \`--stat-entry-value-align\`          | Value text-align               |
| \`--stat-entry-value-overflow-x\`     | Value overflow-x               |
| \`--stat-entry-line-height\`          | Line height of text            |
| \`--stat-entry-font-size\`            | Font size                      |
| \`--stat-entry-font-weight\`          | Font weight                    |
| \`--stat-entry-font-family\`          | Font family                    |
| \`--stat-entry-color\`                | Text color                     |
| \`--stat-entry-text-shadow\`          | Text shadow                    |
| \`--stat-entry-text-transform\`       | Text transform                 |
        `,
      },
    },
  },
  argTypes: {
    compHeight: {
      control: 'text',
      table: { defaultValue: { summary: 'fit-content' } },
    },
    compWidth: {
      control: 'text',
      table: { defaultValue: { summary: 'fit-content' } },
    },
    justifyContent: {
      control: 'text',
      table: { defaultValue: { summary: 'center' } },
    },
    alignItems: {
      control: 'text',
      table: { defaultValue: { summary: 'center' } },
    },
    valNameGap: {
      control: 'text',
      table: { defaultValue: { summary: '15px' } },
    },
    statName: { control: 'text', table: { defaultValue: { summary: '' } } },
    statValue: { control: 'text', table: { defaultValue: { summary: '–' } } },
    nameHeight: {
      control: 'text',
      table: { defaultValue: { summary: 'fit-content' } },
    },
    nameWidth: {
      control: 'text',
      table: { defaultValue: { summary: 'fit-content' } },
    },
    nameAlign: {
      control: 'text',
      table: { defaultValue: { summary: 'center' } },
    },
    nameOverflowX: {
      control: 'text',
      table: { defaultValue: { summary: 'hidden' } },
    },
    addColon: {
      control: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
    valueHeight: {
      control: 'text',
      table: { defaultValue: { summary: 'fit-content' } },
    },
    valueWidth: {
      control: 'text',
      table: { defaultValue: { summary: 'fit-content' } },
    },
    valueAlign: {
      control: 'text',
      table: { defaultValue: { summary: 'center' } },
    },
    valueOverflowX: {
      control: 'text',
      table: { defaultValue: { summary: 'auto' } },
    },
    lineHeight: {
      control: 'text',
      table: { defaultValue: { summary: '18px' } },
    },
    textFontSize: {
      control: 'text',
      table: { defaultValue: { summary: '17px' } },
    },
    textFontWeight: {
      control: 'text',
      table: { defaultValue: { summary: 'normal' } },
    },
    textFontFamily: {
      control: 'text',
      table: { defaultValue: { summary: "'FiraMono', sans-serif" } },
    },
    textColor: {
      control: 'color',
      table: { defaultValue: { summary: 'black' } },
    },
    textShadow: {
      control: 'text',
      table: { defaultValue: { summary: '0px 2px 5px #d0d0d0' } },
    },
    textTransform: {
      control: 'text',
      table: { defaultValue: { summary: 'none' } },
    },
  },
};

export default meta;

export const Default: StoryFn<StatEntryProps> = (args) => html`
  <stat-entry
    .compHeight=${args.compHeight}
    .compWidth=${args.compWidth}
    .justifyContent=${args.justifyContent}
    .alignItems=${args.alignItems}
    .valNameGap=${args.valNameGap}
    .statName=${args.statName}
    .statValue=${args.statValue}
    .nameHeight=${args.nameHeight}
    .nameWidth=${args.nameWidth}
    .nameAlign=${args.nameAlign}
    .nameOverflowX=${args.nameOverflowX}
    .addColon=${args.addColon}
    .valueHeight=${args.valueHeight}
    .valueWidth=${args.valueWidth}
    .valueAlign=${args.valueAlign}
    .valueOverflowX=${args.valueOverflowX}
    .lineHeight=${args.lineHeight}
    .textFontSize=${args.textFontSize}
    .textFontWeight=${args.textFontWeight}
    .textFontFamily=${args.textFontFamily}
    .textColor=${args.textColor}
    .textShadow=${args.textShadow}
    .textTransform=${args.textTransform}
  ></stat-entry>
`;

Default.args = {
  compHeight: 'fit-content',
  compWidth: 'fit-content',
  justifyContent: 'center',
  alignItems: 'center',
  valNameGap: '15px',
  statName: 'HP',
  statValue: '45',
  nameHeight: 'fit-content',
  nameWidth: 'fit-content',
  nameAlign: 'center',
  nameOverflowX: 'hidden',
  addColon: true,
  valueHeight: 'fit-content',
  valueWidth: 'fit-content',
  valueAlign: 'center',
  valueOverflowX: 'auto',
  lineHeight: '18px',
  textFontSize: '17px',
  textFontWeight: 'normal',
  textFontFamily: "'FiraMono', sans-serif",
  textColor: 'black',
  textShadow: '0px 2px 5px #d0d0d0',
  textTransform: 'none',
};
