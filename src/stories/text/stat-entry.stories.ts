import '../../components/text/stat-entry';
import { html } from 'lit';
import type { Meta, StoryFn } from '@storybook/web-components';

type StatEntryProps = {
  compHeight?: string;
  compWidth?: string;

  contHeight?: string;
  contWidth?: string;
  contJustify?: string;
  contAlign?: string;
  contPadX?: string;
  contBgColor?: string;
  contBorderRadius?: string;

  valNameGap?: string;
  statName?: string;
  statValue?: string;

  nameHeight?: string;
  nameMaxHeight?: string;
  nameWidth?: string;
  nameMaxWidth?: string;
  nameAlign?: string;
  nameOverflowX?: string;

  addColon?: boolean;

  valueHeight?: string;
  valueMaxHeight?: string;
  valueWidth?: string;
  valueMaxWidth?: string;
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

#### CSS Custom Properties

| Variable                              | Description                    |
|----------------------------------------|--------------------------------|
| \`--stat-entry-comp-height\`           | Component height               |
| \`--stat-entry-comp-width\`            | Component width                |
| \`--stat-entry-cont-height\`           | Container height               |
| \`--stat-entry-cont-width\`            | Container width                |
| \`--stat-entry-justify-content\`       | Flex container justify         |
| \`--stat-entry-align-items\`           | Flex container align           |
| \`--stat-entry-name-value-gap\`        | Gap between name and value     |
| \`--stat-entry-padding-x\`             | Horizontal container padding   |
| \`--stat-entry-bg-color\`              | Container background color     |
| \`--stat-entry-border-radius\`         | Container border radius        |
| \`--stat-entry-name-height\`           | Name section height            |
| \`--stat-entry-name-max-height\`       | Name section max height        |
| \`--stat-entry-name-width\`            | Name section width             |
| \`--stat-entry-name-max-width\`        | Name section max width         |
| \`--stat-entry-name-align\`            | Name text-align                |
| \`--stat-entry-name-overflow-x\`       | Name overflow-x                |
| \`--stat-entry-value-height\`          | Value section height           |
| \`--stat-entry-value-max-height\`      | Value section max height       |
| \`--stat-entry-value-width\`           | Value section width            |
| \`--stat-entry-value-max-width\`       | Value section max width        |
| \`--stat-entry-value-align\`           | Value text-align               |
| \`--stat-entry-value-overflow-x\`      | Value overflow-x               |
| \`--stat-entry-line-height\`           | Line height of text            |
| \`--stat-entry-font-size\`             | Font size                      |
| \`--stat-entry-font-weight\`           | Font weight                    |
| \`--stat-entry-font-family\`           | Font family                    |
| \`--stat-entry-color\`                 | Text color                     |
| \`--stat-entry-text-shadow\`           | Text shadow                    |
| \`--stat-entry-text-transform\`        | Text transform                 |

#### Shadow DOM Parts

| Part Name | Element | Description         |
|-----------|---------|---------------------|
| \`container\` | \`div\`   | The main container  |
| \`name\`   | \`span\`  | The stat name span   |
| \`value\`  | \`span\`  | The stat value span  |
        `,
      },
    },
  },
  argTypes: {
    // Layout
    compHeight: {
      control: 'text',
      description: 'Component height',
      table: { category: 'Layout', defaultValue: { summary: 'fit-content' } },
    },
    compWidth: {
      control: 'text',
      description: 'Component width',
      table: { category: 'Layout', defaultValue: { summary: 'fit-content' } },
    },

    // Container
    contHeight: {
      control: 'text',
      description: 'Container height',
      table: {
        category: 'Container',
        defaultValue: { summary: 'fit-content' },
      },
    },
    contWidth: {
      control: 'text',
      description: 'Container width',
      table: { category: 'Container', defaultValue: { summary: '100%' } },
    },
    contJustify: {
      control: 'text',
      description: 'Container justify-content',
      table: {
        category: 'Container',
        defaultValue: { summary: 'space-between' },
      },
    },
    contAlign: {
      control: 'text',
      description: 'Container align-items',
      table: { category: 'Container', defaultValue: { summary: 'center' } },
    },
    contPadX: {
      control: 'text',
      description: 'Horizontal container padding',
      table: { category: 'Container', defaultValue: { summary: '5px' } },
    },
    contBgColor: {
      control: 'color',
      description: 'Container background color',
      table: { category: 'Container', defaultValue: { summary: '#cfd8dc' } },
    },
    contBorderRadius: {
      control: 'text',
      description: 'Container border radius',
      table: { category: 'Container', defaultValue: { summary: '3px' } },
    },

    // Stat Name/Value
    valNameGap: {
      control: 'text',
      description: 'Gap between name and value',
      table: { category: 'Content', defaultValue: { summary: '15px' } },
    },
    statName: {
      control: 'text',
      description: 'Stat name label',
      table: { category: 'Content', defaultValue: { summary: '' } },
    },
    statValue: {
      control: 'text',
      description: 'Stat value',
      table: { category: 'Content', defaultValue: { summary: '–' } },
    },

    // Name section
    nameHeight: {
      control: 'text',
      description: 'Name section height',
      table: { category: 'Name', defaultValue: { summary: 'fit-content' } },
    },
    nameMaxHeight: {
      control: 'text',
      description: 'Name section max height',
      table: { category: 'Name', defaultValue: { summary: 'fit-content' } },
    },
    nameWidth: {
      control: 'text',
      description: 'Name section width',
      table: { category: 'Name', defaultValue: { summary: 'fit-content' } },
    },
    nameMaxWidth: {
      control: 'text',
      description: 'Name section max width',
      table: { category: 'Name', defaultValue: { summary: '50%' } },
    },
    nameAlign: {
      control: 'text',
      description: 'Name text alignment',
      table: { category: 'Name', defaultValue: { summary: 'center' } },
    },
    nameOverflowX: {
      control: 'text',
      description: 'Name overflow-x',
      table: { category: 'Name', defaultValue: { summary: 'hidden' } },
    },

    // Colon
    addColon: {
      control: 'boolean',
      description: 'Add colon after stat name',
      table: { category: 'Content', defaultValue: { summary: 'false' } },
    },

    // Value section
    valueHeight: {
      control: 'text',
      description: 'Value section height',
      table: { category: 'Value', defaultValue: { summary: 'fit-content' } },
    },
    valueMaxHeight: {
      control: 'text',
      description: 'Value section max height',
      table: { category: 'Value', defaultValue: { summary: 'fit-content' } },
    },
    valueWidth: {
      control: 'text',
      description: 'Value section width',
      table: { category: 'Value', defaultValue: { summary: 'fit-content' } },
    },
    valueMaxWidth: {
      control: 'text',
      description: 'Value section max width',
      table: { category: 'Value', defaultValue: { summary: '50%' } },
    },
    valueAlign: {
      control: 'text',
      description: 'Value text alignment',
      table: { category: 'Value', defaultValue: { summary: 'center' } },
    },
    valueOverflowX: {
      control: 'text',
      description: 'Value overflow-x',
      table: { category: 'Value', defaultValue: { summary: 'auto' } },
    },

    // Text
    lineHeight: {
      control: 'text',
      description: 'Line height of text',
      table: { category: 'Text', defaultValue: { summary: '20px' } },
    },
    textFontSize: {
      control: 'text',
      description: 'Font size',
      table: { category: 'Text', defaultValue: { summary: '17px' } },
    },
    textFontWeight: {
      control: 'text',
      description: 'Font weight',
      table: { category: 'Text', defaultValue: { summary: 'normal' } },
    },
    textFontFamily: {
      control: 'text',
      description: 'Font family',
      table: {
        category: 'Text',
        defaultValue: { summary: "'FiraMono', sans-serif" },
      },
    },
    textColor: {
      control: 'color',
      description: 'Text color',
      table: { category: 'Text', defaultValue: { summary: 'black' } },
    },
    textShadow: {
      control: 'text',
      description: 'Text shadow',
      table: {
        category: 'Text',
        defaultValue: { summary: '0px 2px 5px #d0d0d0' },
      },
    },
    textTransform: {
      control: 'text',
      description: 'Text transformation (e.g., uppercase, lowercase)',
      table: { category: 'Text', defaultValue: { summary: 'none' } },
    },
  },
};

export default meta;

export const Default: StoryFn<StatEntryProps> = (args) => html`
  <stat-entry
    .compHeight=${args.compHeight}
    .compWidth=${args.compWidth}
    .contHeight=${args.contHeight}
    .contWidth=${args.contWidth}
    .contJustify=${args.contJustify}
    .contAlign=${args.contAlign}
    .contPadX=${args.contPadX}
    .contBgColor=${args.contBgColor}
    .contBorderRadius=${args.contBorderRadius}
    .valNameGap=${args.valNameGap}
    .statName=${args.statName}
    .statValue=${args.statValue}
    .nameHeight=${args.nameHeight}
    .nameMaxHeight=${args.nameMaxHeight}
    .nameWidth=${args.nameWidth}
    .nameMaxWidth=${args.nameMaxWidth}
    .nameAlign=${args.nameAlign}
    .nameOverflowX=${args.nameOverflowX}
    .addColon=${args.addColon}
    .valueHeight=${args.valueHeight}
    .valueMaxHeight=${args.valueMaxHeight}
    .valueWidth=${args.valueWidth}
    .valueMaxWidth=${args.valueMaxWidth}
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
  contHeight: 'fit-content',
  contWidth: '100%',
  contJustify: 'space-between',
  contAlign: 'center',
  contPadX: '5px',
  contBgColor: '#cfd8dc',
  contBorderRadius: '3px',
  valNameGap: '15px',
  statName: 'HP',
  statValue: '45',
  nameHeight: 'fit-content',
  nameMaxHeight: 'fit-content',
  nameWidth: 'fit-content',
  nameMaxWidth: '50%',
  nameAlign: 'center',
  nameOverflowX: 'hidden',
  addColon: true,
  valueHeight: 'fit-content',
  valueMaxHeight: 'fit-content',
  valueWidth: 'fit-content',
  valueMaxWidth: '50%',
  valueAlign: 'center',
  valueOverflowX: 'auto',
  lineHeight: '20px',
  textFontSize: '17px',
  textFontWeight: 'normal',
  textFontFamily: "'FiraMono', sans-serif",
  textColor: 'black',
  textShadow: '0px 2px 5px #d0d0d0',
  textTransform: 'none',
};
