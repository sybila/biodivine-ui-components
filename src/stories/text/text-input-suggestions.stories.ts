import { html } from 'lit';
import type { Meta, StoryFn } from '@storybook/web-components-vite';
import '../../components/text/text-input-suggestions';

type TextInputSuggestionsProps = {
  // -------------------------
  // Input styling
  // -------------------------
  /** Height of the <input> element */
  inputHeight?: string;
  /** Width of the <input> element */
  inputWidth?: string;
  /** Border color of the input box */
  inputBorderColor?: string;
  /** Border radius of the input box */
  inputBorderRadius?: string;
  /** Background color of the input */
  inputColor?: string;

  // -------------------------
  // Input text styling
  // -------------------------
  /** Text color */
  textColor?: string;
  /** Font size */
  textFontSize?: string;
  /** Font weight */
  textFontWeight?: string;
  /** Font family */
  textFontFamily?: string;

  // -------------------------
  // Value / behavior
  // -------------------------
  /** Placeholder text inside the input */
  placeholder?: string;
  /** Controlled value of the input */
  value?: string;

  // -------------------------
  // Suggestions data
  // -------------------------
  /** Strings for the text suggestions */
  suggestionStrings?: string[];

  /**
   * Custom predicate for filtering suggestions.
   * Receives: (suggestion, inputTokens)
   */
  filterSuggPredicate?: (
    suggestion: string,
    currentInputStrings: string[]
  ) => boolean;

  /**
   * Transform text before filtering (e.g. lowercase normalization)
   */
  filterSuggTextTransform?: (text: string) => string;

  /**
   * Defines separator characters for multi-token input.
   * Example: (char) => char === ',' || char === ' '
   */
  isSeparator?: (char: string) => boolean;

  // -------------------------
  // Layout / component styling
  // -------------------------
  /** Z-index of the whole component */
  componentZIndex?: string;
  /** Gap between input and suggestion list */
  containerGap?: string;

  // -------------------------
  // Suggestion list styling
  // -------------------------
  suggListMinHeight?: string;
  suggListMaxHeight?: string;
  suggListWidth?: string;
  suggListBorderRadius?: string;
  suggListBgColor?: string;
  suggListOverflowY?: string;

  // -------------------------
  // Suggestion item styling
  // -------------------------
  suggLineHeight?: string;
  suggFontSize?: string;
  suggFontWeight?: string;
  suggFontFamily?: string;
  suggItemBorderRadius?: string;
  suggPadding?: string;
  suggHoverBgColor?: string;

  // -------------------------
  // Events
  // -------------------------
  /** Called whenever input value changes */
  onWrite?: (value: string) => void;
  /** Called when Enter is pressed */
  onSubmit?: (value: string) => void;
};

const meta: Meta<TextInputSuggestionsProps> = {
  title: 'Components/Text/Text Input With Suggestions',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### \`<text-input-suggestions>\`

Text input component with suggestion list.

#### CSS Custom Properties

| Variable | Description |
|----------|-------------|
| \`--text-input-suggestions-comp-height\` | Height of outer wrapper |
| \`--text-input-suggestions-comp-width\` | Width of outer wrapper |
| \`--text-input-suggestions-gap\` | Gap between input and suggestion list |
| \`--text-input-suggestions-z-index\` | Z-index of the whole component |
| \`--text-input-suggestions-height\` | Input field height |
| \`--text-input-suggestions-width\` | Input field width |
| \`--text-input-suggestions-border-color\` | Input border color |
| \`--text-input-suggestions-border-radius\` | Input border radius |
| \`--text-input-suggestions-background-color\` | Input background color |
| \`--text-input-suggestions-text-color\` | Text color inside input |
| \`--text-input-suggestions-input-font-size\` | Font size of input text |
| \`--text-input-suggestions-input-font-weight\` | Font weight of input text |
| \`--text-input-suggestions-input-font-family\` | Font family for input text |
| \`--text-input-suggestions-sugg-list-min-height\` | Minimum height of suggestion list |
| \`--text-input-suggestions-sugg-list-max-height\` | Maximum height of suggestion list |
| \`--text-input-suggestions-sugg-list-width\` | Width of suggestion list |
| \`--text-input-suggestions-sugg-list-border-radius\` | Border radius of suggestion list |
| \`--text-input-suggestions-sugg-list-bg-color\` | Background color of suggestion list |
| \`--text-input-suggestions-sugg-list-overflow-y\` | Vertical overflow behavior |
| \`--text-input-suggestions-sugg-line-height\` | Line height of suggestion items |
| \`--text-input-suggestions-sugg-font-size\` | Font size of suggestion items |
| \`--text-input-suggestions-sugg-font-weight\` | Font weight of suggestion items |
| \`--text-input-suggestions-sugg-font-family\` | Font family of suggestion items |
| \`--text-input-suggestions-sugg-border-radius\` | Border radius of suggestion items |
| \`--text-input-suggestions-sugg-padding\` | Padding inside suggestion items |
| \`--text-input-suggestions-sugg-hover-bg-color\` | Hover background color of suggestion items |

#### Shadow DOM Parts

| Part Name | Element | Description |
|----------|---------|-------------|
| \`container\` | \`div\` | Outer wrapper container |
| \`text-input\` | \`input\` | The input element |
| \`suggestions-list\` | \`ul\` | Suggestion list container |

#### Methods

| Method | Description |
|--------|-------------|
| \`focus()\` | Focuses the internal input element |
        `,
      },
    },
  },
  argTypes: {
    // -------------------------
    // Input styling
    // -------------------------
    inputHeight: {
      control: 'text',
      description: 'Height of the input box',
      table: { category: 'Input', defaultValue: { summary: '26px' } },
    },
    inputWidth: {
      control: 'text',
      description: 'Width of the input box',
      table: { category: 'Input', defaultValue: { summary: '500px' } },
    },
    inputBorderColor: {
      control: 'color',
      description: 'Border color of the input box',
      table: { category: 'Input', defaultValue: { summary: '#cfd8dc' } },
    },
    inputBorderRadius: {
      control: 'text',
      description: 'Border radius of the input box',
      table: { category: 'Input', defaultValue: { summary: '8px' } },
    },
    inputColor: {
      control: 'color',
      description: 'Background color of the input box',
      table: { category: 'Input', defaultValue: { summary: '#fafafa' } },
    },

    // -------------------------
    // Input text styling
    // -------------------------
    textColor: {
      control: 'color',
      description: 'Text color inside input',
      table: { category: 'Text', defaultValue: { summary: '#333' } },
    },
    textFontSize: {
      control: 'text',
      description: 'Font size of input text',
      table: { category: 'Text', defaultValue: { summary: '14px' } },
    },
    textFontWeight: {
      control: 'text',
      description: 'Font weight of input text',
      table: { category: 'Text', defaultValue: { summary: 'normal' } },
    },
    textFontFamily: {
      control: 'text',
      description: 'Font family of input text',
      table: {
        category: 'Text',
        defaultValue: { summary: "'Helvetica', 'Arial', sans-serif" },
      },
    },

    // -------------------------
    // Value / behavior
    // -------------------------
    placeholder: {
      control: 'text',
      description: 'Placeholder text inside the input',
      table: { category: 'Input', defaultValue: { summary: '' } },
    },
    value: {
      control: 'text',
      description: 'Controlled value of the input',
      table: { category: 'Input', defaultValue: { summary: '' } },
    },

    // -------------------------
    // Suggestions data
    // -------------------------
    suggestionStrings: {
      control: 'object',
      description: 'List of suggestion strings shown under the input',
      table: { category: 'Suggestions' },
    },

    filterSuggPredicate: {
      control: false,
      description:
        'Custom predicate to filter suggestions (suggestion: string, inputTokens: Array<string>) => boolean, where inputTokens is input of the text-input split by separator. If not set suggestion is filtered out if doesnt include any of the inputTokens.',
      defaultValue: {
        summary:
          '(s: string) => { for (const inputedString of v) { if (s.includes(inputedString)) { return true; }} return false; };',
      },
      table: { category: 'Suggestions' },
    },

    filterSuggTextTransform: {
      description:
        'Function (s: string) => string which transforms text before filtering (e.g. toLowerCase, normalize)',
      table: {
        category: 'Suggestions',
        defaultValue: { summary: '(s) => s.toLowerCase()' },
      },
    },

    isSeparator: {
      control: false,
      description:
        'Function to determine separator characters for multi-token input. Used to split the text input into multiple tokens. If not set, the component treats the input as a single continuous string.',
      table: { category: 'Suggestions' },
    },

    // -------------------------
    // Styling (layout / suggestion list)
    // -------------------------
    componentZIndex: {
      control: 'text',
      description: 'Z-index of the component',
      table: { category: 'Layout', defaultValue: { summary: '100' } },
    },
    containerGap: {
      control: 'text',
      description: 'Gap between input and suggestion list',
      table: { category: 'Layout', defaultValue: { summary: '3px' } },
    },

    suggListMinHeight: {
      control: 'text',
      description: 'Minimum height of suggestion list',
      table: { category: 'Suggestions', defaultValue: { summary: '16px' } },
    },
    suggListMaxHeight: {
      control: 'text',
      description: 'Maximum height of suggestion list',
      table: { category: 'Suggestions', defaultValue: { summary: '200px' } },
    },
    suggListWidth: {
      control: 'text',
      description: 'Width of suggestion list',
      table: { category: 'Suggestions', defaultValue: { summary: '495px' } },
    },
    suggListBorderRadius: {
      control: 'text',
      description: 'Border radius of suggestion list',
      table: { category: 'Suggestions', defaultValue: { summary: '15px' } },
    },
    suggListBgColor: {
      control: 'color',
      description: 'Background color of suggestion list',
      table: { category: 'Suggestions', defaultValue: { summary: '#eceff1' } },
    },
    suggListOverflowY: {
      control: 'text',
      description: 'Overflow behavior for suggestion list',
      table: { category: 'Suggestions', defaultValue: { summary: 'auto' } },
    },

    // -------------------------
    // Suggestion item styling
    // -------------------------
    suggLineHeight: {
      control: 'text',
      description: 'Line height of suggestion items',
      table: { category: 'Suggestions', defaultValue: { summary: '28px' } },
    },
    suggFontSize: {
      control: 'text',
      description: 'Font size of suggestion items',
      table: { category: 'Suggestions', defaultValue: { summary: '18px' } },
    },
    suggFontWeight: {
      control: 'text',
      description: 'Font weight of suggestion items',
      table: { category: 'Suggestions', defaultValue: { summary: 'normal' } },
    },
    suggFontFamily: {
      control: 'text',
      description: 'Font family of suggestion items',
      table: {
        category: 'Suggestions',
        defaultValue: { summary: "'Helvetica', 'Arial', sans-serif" },
      },
    },
    suggItemBorderRadius: {
      control: 'text',
      description: 'Border radius of suggestion items',
      table: { category: 'Suggestions', defaultValue: { summary: '15px' } },
    },
    suggPadding: {
      control: 'text',
      description: 'Padding of suggestion items',
      table: { category: 'Suggestions', defaultValue: { summary: '6px 10px' } },
    },
    suggHoverBgColor: {
      control: 'color',
      description: 'Hover background color of suggestion items',
      table: { category: 'Suggestions', defaultValue: { summary: 'white' } },
    },

    // -------------------------
    // Events (IMPORTANT FIX)
    // -------------------------
    onWrite: {
      action: 'write',
      description:
        'Called whenever input value changes. Receives (value: string)',
      table: { category: 'Events' },
    },

    onSubmit: {
      action: 'submit',
      description: 'Called when Enter key is pressed. Receives (value: string)',
      table: { category: 'Events' },
    },
  },
};

export default meta;

export const Default: StoryFn<TextInputSuggestionsProps> = (args) => html`
  <text-input-suggestions
    .inputHeight=${args.inputHeight}
    .inputWidth=${args.inputWidth}
    .inputBorderColor=${args.inputBorderColor}
    .inputBorderRadius=${args.inputBorderRadius}
    .inputColor=${args.inputColor}
    .textColor=${args.textColor}
    .textFontSize=${args.textFontSize}
    .textFontWeight=${args.textFontWeight}
    .textFontFamily=${args.textFontFamily}
    .placeholder=${args.placeholder}
    .value=${args.value}
    .suggestionStrings=${args.suggestionStrings}
    .filterSuggPredicate=${args.filterSuggPredicate}
    .filterSuggTextTransform=${args.filterSuggTextTransform}
    .isSeparator=${args.isSeparator}
    .componentZIndex=${args.componentZIndex}
    .containerGap=${args.containerGap}
    .suggListMinHeight=${args.suggListMinHeight}
    .suggListMaxHeight=${args.suggListMaxHeight}
    .suggListWidth=${args.suggListWidth}
    .suggListBorderRadius=${args.suggListBorderRadius}
    .suggListBgColor=${args.suggListBgColor}
    .suggListOverflowY=${args.suggListOverflowY}
    .suggLineHeight=${args.suggLineHeight}
    .suggFontSize=${args.suggFontSize}
    .suggFontWeight=${args.suggFontWeight}
    .suggFontFamily=${args.suggFontFamily}
    .suggItemBorderRadius=${args.suggItemBorderRadius}
    .suggPadding=${args.suggPadding}
    .suggHoverBgColor=${args.suggHoverBgColor}
    .onWrite=${args.onWrite}
    .onSubmit=${args.onSubmit}
  ></text-input-suggestions>
`;

Default.args = {
  // input
  inputHeight: '26px',
  inputWidth: '500px',
  inputBorderColor: '#cfd8dc',
  inputBorderRadius: '8px',
  inputColor: '#fafafa',

  // text
  textColor: '#333',
  textFontSize: '14px',
  textFontWeight: 'normal',
  textFontFamily: "'Helvetica', 'Arial', sans-serif",

  // value
  placeholder: 'Enter text...',
  value: '',

  // suggestions
  suggestionStrings: ['suggestion 1', 'suggestion 2'],

  // filtering (defaults match your component logic)
  filterSuggTextTransform: (s: string) => s.toLowerCase(),

  isSeparator: undefined, // or: (c: string) => c === ','

  // layout
  componentZIndex: '100',
  containerGap: '3px',

  // suggestion list
  suggListMinHeight: '16px',
  suggListMaxHeight: '200px',
  suggListWidth: '495px',
  suggListBorderRadius: '15px',
  suggListBgColor: '#eceff1',
  suggListOverflowY: 'auto',

  // suggestion items
  suggLineHeight: '28px',
  suggFontSize: '18px',
  suggFontWeight: 'normal',
  suggFontFamily: "'Helvetica', 'Arial', sans-serif",
  suggItemBorderRadius: '15px',
  suggPadding: '6px 10px',
  suggHoverBgColor: 'white',

  // events
  onWrite: (val: string) => console.log('Write:', val),
  onSubmit: (val: string) => console.log('Submit:', val),
};
