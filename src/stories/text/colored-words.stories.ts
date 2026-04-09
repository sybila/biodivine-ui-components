import '../../components/text/colored-words';
import { html } from 'lit';
import type { Meta, StoryFn } from '@storybook/web-components-vite';

type ColoredWord = {
  text: string;
  color: string;
  weight: string;
};

type ColoredWordsProps = {
  words?: ColoredWord[];
  separator?: string;
  contJustifyContent?: string;
  contMinWidth?: string;
  contMaxWidth?: string;
  contMinHeight?: string;
  contMaxHeight?: string;
  contMarginTop?: string;
  contMarginLeft?: string;
  contMarginRight?: string;
  contMarginBottom?: string;
  contOverflowY?: string;
  wordGap?: string;
  fontSize?: string;
  fontFamily?: string;
  lineHeight?: string;
};

const meta: Meta<ColoredWordsProps> = {
  title: 'Components/Text/Colored Words',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### \`<colored-words>\`

Displays an array of words where each word can have its own color and font weight.

#### CSS Custom Properties

| Variable                                   | Description                      |
|--------------------------------------------|----------------------------------|
| \`--colored-words-cont-justify-content\`  | Host justify-content             |
| \`--colored-words-cont-min-width\`        | Host minimum width               |
| \`--colored-words-cont-max-width\`        | Host maximum width               |
| \`--colored-words-cont-min-height\`       | Host minimum height              |
| \`--colored-words-cont-max-height\`       | Host maximum height              |
| \`--colored-words-cont-margin-top\`       | Host margin-top                  |
| \`--colored-words-cont-margin-left\`      | Host margin-left                 |
| \`--colored-words-cont-margin-right\`     | Host margin-right                |
| \`--colored-words-cont-margin-bottom\`    | Host margin-bottom               |
| \`--colored-words-cont-overflow-y\`       | Host overflow-y                  |
| \`--colored-words-word-gap\`              | Gap between rendered items       |
| \`--colored-words-font-size\`             | Font size of words               |
| \`--colored-words-font-family\`           | Font family of words             |
| \`--colored-words-line-height\`           | Line height of words             |
				`,
      },
    },
  },
  argTypes: {
    words: {
      control: 'object',
      description:
        'Array of word objects: { text: String, color: String, weight: String } - text is the word to render, color is the word color as css color value, weight is the font weight of the word as css font-weight value',
      table: { category: 'Content' },
    },
    separator: {
      control: 'text',
      description: 'Optional separator rendered after each word',
      table: { category: 'Content', defaultValue: { summary: '' } },
    },
    contJustifyContent: {
      control: 'text',
      description: 'Host justify-content',
      table: { category: 'Layout', defaultValue: { summary: 'center' } },
    },
    contMinWidth: {
      control: 'text',
      description: 'Host min-width',
      table: { category: 'Layout', defaultValue: { summary: '200px' } },
    },
    contMaxWidth: {
      control: 'text',
      description: 'Host max-width',
      table: { category: 'Layout', defaultValue: { summary: '300px' } },
    },
    contMinHeight: {
      control: 'text',
      description: 'Host min-height',
      table: { category: 'Layout', defaultValue: { summary: '35px' } },
    },
    contMaxHeight: {
      control: 'text',
      description: 'Host max-height',
      table: { category: 'Layout', defaultValue: { summary: '400px' } },
    },
    contMarginTop: {
      control: 'text',
      description: 'Host margin-top',
      table: { category: 'Layout', defaultValue: { summary: '10px' } },
    },
    contMarginLeft: {
      control: 'text',
      description: 'Host margin-left',
      table: { category: 'Layout', defaultValue: { summary: '10px' } },
    },
    contMarginRight: {
      control: 'text',
      description: 'Host margin-right',
      table: { category: 'Layout', defaultValue: { summary: '10px' } },
    },
    contMarginBottom: {
      control: 'text',
      description: 'Host margin-bottom',
      table: { category: 'Layout', defaultValue: { summary: '10px' } },
    },
    contOverflowY: {
      control: 'text',
      description: 'Host overflow-y behavior',
      table: { category: 'Layout', defaultValue: { summary: 'auto' } },
    },
    wordGap: {
      control: 'text',
      description: 'Gap between words',
      table: { category: 'Text', defaultValue: { summary: '0.5rem' } },
    },
    fontSize: {
      control: 'text',
      description: 'Words font size',
      table: { category: 'Text', defaultValue: { summary: '16px' } },
    },
    fontFamily: {
      control: 'text',
      description: 'Words font family',
      table: {
        category: 'Text',
        defaultValue: { summary: "'Helvetica', 'Arial', sans-serif" },
      },
    },
    lineHeight: {
      control: 'text',
      description: 'Words line height',
      table: { category: 'Text', defaultValue: { summary: 'normal' } },
    },
  },
};

export default meta;

export const Default: StoryFn<ColoredWordsProps> = (args) => html`
  <colored-words
    .words=${args.words}
    .separator=${args.separator}
    .contJustifyContent=${args.contJustifyContent}
    .contMinWidth=${args.contMinWidth}
    .contMaxWidth=${args.contMaxWidth}
    .contMinHeight=${args.contMinHeight}
    .contMaxHeight=${args.contMaxHeight}
    .contMarginTop=${args.contMarginTop}
    .contMarginLeft=${args.contMarginLeft}
    .contMarginRight=${args.contMarginRight}
    .contMarginBottom=${args.contMarginBottom}
    .contOverflowY=${args.contOverflowY}
    .wordGap=${args.wordGap}
    .fontSize=${args.fontSize}
    .fontFamily=${args.fontFamily}
    .lineHeight=${args.lineHeight}
  ></colored-words>
`;

Default.args = {
  words: [
    { text: 'GeneA', color: '#d05d5d', weight: '700' },
    { text: 'GeneB', color: '#3a568c', weight: '400' },
    { text: 'GeneC', color: '#2d8f5a', weight: '700' },
    { text: 'GeneD', color: '#9a6b17', weight: '400' },
  ],
  separator: '',
  contJustifyContent: 'center',
  contMinWidth: '200px',
  contMaxWidth: '300px',
  contMinHeight: '35px',
  contMaxHeight: '400px',
  contMarginTop: '10px',
  contMarginLeft: '10px',
  contMarginRight: '10px',
  contMarginBottom: '10px',
  contOverflowY: 'auto',
  wordGap: '0.5rem',
  fontSize: '16px',
  fontFamily: "'Helvetica', 'Arial', sans-serif",
  lineHeight: 'normal',
};
