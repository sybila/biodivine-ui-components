import '../../components/text/stat-table';
import { html } from 'lit';
import type { Meta, StoryFn } from '@storybook/web-components-vite';

type StatTableEntry = {
  name: string;
  value: string;
  nameWidth: string;
  valueWidth: string;
};

type StatTableProps = {
  stats?: StatTableEntry[];
  separator?: string;

  contMinHeight?: string;
  contMinWidth?: string;
  contMaxHeight?: string;
  contMaxWidth?: string;
  contStatsGap?: string;
  contOverflowY?: string;
  contOverflowX?: string;

  statHeight?: string;
  statWidth?: string;
  statNameValueGap?: string;
  statPadX?: string;
  statPadY?: string;
  statBgColor?: string;
  statBorderRadius?: string;

  nameContHeight?: string;
  nameFontSize?: string;
  nameLineHeight?: string;
  nameFontWeight?: string;
  nameFontFamily?: string;
  nameOverflowX?: string;

  valueContHeight?: string;
  valueFontSize?: string;
  valueLineHeight?: string;
  valueFontWeight?: string;
  valueFontFamily?: string;
  valueOverflowX?: string;
};

const meta: Meta<StatTableProps> = {
  title: 'Components/Text/Stat Table',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### \`<stat-table>\`

Component for rendering a vertical list of labeled statistics.

#### Props

| Prop | Type | Description |
|------|------|-------------|
| \`stats\` | \`{ name, value, nameWidth, valueWidth }[]\` | Stat entries to display |
| \`separator\` | \`string\` | Separator to display between name and value |
#### CSS Custom Properties

| Variable                              | Description                          |
|----------------------------------------|--------------------------------------|
| \`--stat-table-cont-min-height\`      | Container min height                 |
| \`--stat-table-cont-min-width\`       | Container min width                  |
| \`--stat-table-cont-max-height\`      | Container max height                 |
| \`--stat-table-cont-max-width\`       | Container max width                  |
| \`--stat-table-cont-stats-gap\`       | Gap between rows                     |
| \`--stat-table-cont-overflow-y\`      | Container overflow-y                 |
| \`--stat-table-cont-overflow-x\`      | Container overflow-x                 |
| \`--stat-table-stat-height\`          | Row height                           |
| \`--stat-table-stat-width\`           | Row width                            |
| \`--stat-table-stat-name-value-gap\`  | Gap between name and value           |
| \`--stat-table-stat-pad-x\`           | Row horizontal padding               |
| \`--stat-table-stat-pad-y\`           | Row vertical padding                 |
| \`--stat-table-stat-bg-color\`        | Row background color                 |
| \`--stat-table-stat-border-radius\`   | Row border radius                    |
| \`--stat-table-name-cont-height\`     | Name span height                     |
| \`--stat-table-name-font-size\`       | Name font size                       |
| \`--stat-table-name-line-height\`     | Name line height                     |
| \`--stat-table-name-font-weight\`     | Name font weight                     |
| \`--stat-table-name-font-family\`     | Name font family                     |
| \`--stat-table-name-overflow-x\`      | Name overflow-x                      |
| \`--stat-table-value-cont-height\`    | Value span height                    |
| \`--stat-table-value-font-size\`      | Value font size                      |
| \`--stat-table-value-line-height\`    | Value line height                    |
| \`--stat-table-value-font-weight\`    | Value font weight                    |
| \`--stat-table-value-font-family\`    | Value font family                    |
| \`--stat-table-value-overflow-x\`     | Value overflow-x                     |
				`,
      },
    },
  },
  argTypes: {
    stats: {
      control: 'object',
      description:
        'Array of stat entries: \n\n { name: String, value: String, nameWidth: String, valueWidth: String } \n\n name is the stat name to render, value is the stat value to render, and nameWidth/valueWidth are css width values for the name and value spans.',
      table: {
        category: 'Data',
        defaultValue: {
          summary: '[]',
        },
      },
    },

    separator: {
      control: 'text',
      description: 'Separator to display between name and value',
      table: { category: 'Data', defaultValue: { summary: ' :' } },
    },

    contMinHeight: {
      control: 'text',
      description: 'Container min-height',
      table: { category: 'Container', defaultValue: { summary: '100px' } },
    },
    contMinWidth: {
      control: 'text',
      description: 'Container min-width',
      table: { category: 'Container', defaultValue: { summary: '200px' } },
    },
    contMaxHeight: {
      control: 'text',
      description: 'Container max-height',
      table: { category: 'Container', defaultValue: { summary: '400px' } },
    },
    contMaxWidth: {
      control: 'text',
      description: 'Container max-width',
      table: { category: 'Container', defaultValue: { summary: '200px' } },
    },
    contStatsGap: {
      control: 'text',
      description: 'Gap between rows',
      table: { category: 'Container', defaultValue: { summary: '2px' } },
    },
    contOverflowY: {
      control: 'text',
      description: 'Container overflow-y',
      table: { category: 'Container', defaultValue: { summary: 'auto' } },
    },
    contOverflowX: {
      control: 'text',
      description: 'Container overflow-x',
      table: { category: 'Container', defaultValue: { summary: 'hidden' } },
    },

    statHeight: {
      control: 'text',
      description: 'Row height',
      table: { category: 'Row', defaultValue: { summary: 'fit-content' } },
    },
    statWidth: {
      control: 'text',
      description: 'Row width',
      table: { category: 'Row', defaultValue: { summary: '100%' } },
    },
    statNameValueGap: {
      control: 'text',
      description: 'Gap between name and value',
      table: { category: 'Row', defaultValue: { summary: '1px' } },
    },
    statPadX: {
      control: 'text',
      description: 'Row horizontal padding',
      table: { category: 'Row', defaultValue: { summary: '10px' } },
    },
    statPadY: {
      control: 'text',
      description: 'Row vertical padding',
      table: { category: 'Row', defaultValue: { summary: '5px' } },
    },
    statBgColor: {
      control: 'color',
      description: 'Row background color',
      table: { category: 'Row', defaultValue: { summary: '#cfd8dc' } },
    },
    statBorderRadius: {
      control: 'text',
      description: 'Row border radius',
      table: { category: 'Row', defaultValue: { summary: '3px' } },
    },

    nameContHeight: {
      control: 'text',
      description: 'Name span height',
      table: {
        category: 'Name Text',
        defaultValue: { summary: 'fit-content' },
      },
    },
    nameFontSize: {
      control: 'text',
      description: 'Name font size',
      table: { category: 'Name Text', defaultValue: { summary: '17px' } },
    },
    nameLineHeight: {
      control: 'text',
      description: 'Name line height',
      table: { category: 'Name Text', defaultValue: { summary: '20px' } },
    },
    nameFontWeight: {
      control: 'text',
      description: 'Name font weight',
      table: { category: 'Name Text', defaultValue: { summary: 'normal' } },
    },
    nameFontFamily: {
      control: 'text',
      description: 'Name font family',
      table: {
        category: 'Name Text',
        defaultValue: { summary: "'FiraMono', sans-serif" },
      },
    },
    nameOverflowX: {
      control: 'text',
      description: 'Name overflow-x',
      table: { category: 'Name Text', defaultValue: { summary: 'auto' } },
    },

    valueContHeight: {
      control: 'text',
      description: 'Value span height',
      table: {
        category: 'Value Text',
        defaultValue: { summary: 'fit-content' },
      },
    },
    valueFontSize: {
      control: 'text',
      description: 'Value font size',
      table: { category: 'Value Text', defaultValue: { summary: '17px' } },
    },
    valueLineHeight: {
      control: 'text',
      description: 'Value line height',
      table: { category: 'Value Text', defaultValue: { summary: '20px' } },
    },
    valueFontWeight: {
      control: 'text',
      description: 'Value font weight',
      table: { category: 'Value Text', defaultValue: { summary: 'normal' } },
    },
    valueFontFamily: {
      control: 'text',
      description: 'Value font family',
      table: {
        category: 'Value Text',
        defaultValue: { summary: "'FiraMono', sans-serif" },
      },
    },
    valueOverflowX: {
      control: 'text',
      description: 'Value overflow-x',
      table: { category: 'Value Text', defaultValue: { summary: 'auto' } },
    },
  },
};

export default meta;

export const Default: StoryFn<StatTableProps> = (args) => html`
  <stat-table
    .stats=${args.stats}
    .separator=${args.separator}
    .contMinHeight=${args.contMinHeight}
    .contMinWidth=${args.contMinWidth}
    .contMaxHeight=${args.contMaxHeight}
    .contMaxWidth=${args.contMaxWidth}
    .contStatsGap=${args.contStatsGap}
    .contOverflowY=${args.contOverflowY}
    .contOverflowX=${args.contOverflowX}
    .statHeight=${args.statHeight}
    .statWidth=${args.statWidth}
    .statNameValueGap=${args.statNameValueGap}
    .statPadX=${args.statPadX}
    .statPadY=${args.statPadY}
    .statBgColor=${args.statBgColor}
    .statBorderRadius=${args.statBorderRadius}
    .nameContHeight=${args.nameContHeight}
    .nameFontSize=${args.nameFontSize}
    .nameLineHeight=${args.nameLineHeight}
    .nameFontWeight=${args.nameFontWeight}
    .nameFontFamily=${args.nameFontFamily}
    .nameOverflowX=${args.nameOverflowX}
    .valueContHeight=${args.valueContHeight}
    .valueFontSize=${args.valueFontSize}
    .valueLineHeight=${args.valueLineHeight}
    .valueFontWeight=${args.valueFontWeight}
    .valueFontFamily=${args.valueFontFamily}
    .valueOverflowX=${args.valueOverflowX}
  ></stat-table>
`;

Default.args = {
  stats: [
    { name: 'HP', value: '45', nameWidth: '50%', valueWidth: '50%' },
    { name: 'Attack', value: '18', nameWidth: '50%', valueWidth: '50%' },
    { name: 'Defense', value: '12', nameWidth: '50%', valueWidth: '50%' },
    { name: 'Speed', value: '26', nameWidth: '50%', valueWidth: '50%' },
  ],
  separator: ' :',
  contMinHeight: '100px',
  contMinWidth: '200px',
  contMaxHeight: '400px',
  contMaxWidth: '200px',
  contStatsGap: '2px',
  contOverflowY: 'auto',
  contOverflowX: 'hidden',
  statHeight: 'fit-content',
  statWidth: '100%',
  statNameValueGap: '1px',
  statPadX: '10px',
  statPadY: '5px',
  statBgColor: '#cfd8dc',
  statBorderRadius: '3px',
  nameContHeight: 'fit-content',
  nameFontSize: '17px',
  nameLineHeight: '20px',
  nameFontWeight: 'normal',
  nameFontFamily: "'FiraMono', sans-serif",
  nameOverflowX: 'auto',
  valueContHeight: 'fit-content',
  valueFontSize: '17px',
  valueLineHeight: '20px',
  valueFontWeight: 'normal',
  valueFontFamily: "'FiraMono', sans-serif",
  valueOverflowX: 'auto',
};
