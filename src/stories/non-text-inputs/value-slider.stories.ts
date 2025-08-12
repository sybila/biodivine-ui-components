import '../../components/non-text-inputs/value-slider';
import { html } from 'lit';
import type { Meta, StoryFn } from '@storybook/web-components';

type ValueSliderProps = {
  /** Height of the outer component container */
  compHeight?: string;
  /** Width of the outer component container */
  compWidth?: string;

  /** Height of the slider body */
  bodyHeight?: string;
  /** Width of the slider body */
  bodyWidth?: string;
  /** Background color of the slider body */
  bodyBackgroundColor?: string;
  /** Border radius of the slider body */
  bodyBorderRadius?: string;

  /** Height of the slider thumb */
  sliderThumbHeight?: string;
  /** Width of the slider thumb */
  sliderThumbWidth?: string;
  /** Background color of the slider thumb */
  sliderThumbBackgroundColor?: string;
  /** Border radius of the slider thumb */
  sliderThumbBorderRadius?: string;

  /** Current value of the slider */
  value?: number;
  /** Minimum value of the slider */
  minValue?: number;
  /** Maximum value of the slider */
  maxValue?: number;
  /** Step value for the slider */
  step?: number;

  /** Change event handler */
  handleChange?: (value: number) => void;
  /** Input event handler */
  handleInput?: (value: number) => void;
};

const meta: Meta<ValueSliderProps> = {
  title: 'Components/Non-Text Inputs/Value Slider',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### \`<value-slider>\`

Slider input component.

#### CSS Custom Properties

| Variable                                   | Description                              |
|---------------------------------------------|------------------------------------------|
| \`--value-slider-comp-height\`              | Container height                         |
| \`--value-slider-comp-width\`               | Container width                          |
| \`--value-slider-body-height\`              | Slider body height                       |
| \`--value-slider-body-width\`               | Slider body width                        |
| \`--value-slider-body-background-color\`    | Slider body background color             |
| \`--value-slider-body-border-radius\`       | Slider body border radius                |
| \`--value-slider-thumb-height\`             | Slider thumb height                      |
| \`--value-slider-thumb-width\`              | Slider thumb width                       |
| \`--value-slider-thumb-background-color\`   | Slider thumb background color            |
| \`--value-slider-thumb-border-radius\`      | Slider thumb border radius               |

#### Shadow DOM Parts

| Part Name   | Element    | Description                  |
|-------------|------------|------------------------------|
| \`slider\`    | \`<input>\`   | The range input element      |
        `,
      },
    },
  },
  argTypes: {
    // Layout
    compHeight: {
      control: 'text',
      description: 'Height of the outer component container',
      table: { category: 'Layout', defaultValue: { summary: '25px' } },
    },
    compWidth: {
      control: 'text',
      description: 'Width of the outer component container',
      table: { category: 'Layout', defaultValue: { summary: '100px' } },
    },

    // Body
    bodyHeight: {
      control: 'text',
      description: 'Height of the slider body',
      table: { category: 'Body', defaultValue: { summary: '100%' } },
    },
    bodyWidth: {
      control: 'text',
      description: 'Width of the slider body',
      table: { category: 'Body', defaultValue: { summary: '100%' } },
    },
    bodyBackgroundColor: {
      control: 'color',
      description: 'Background color of the slider body',
      table: { category: 'Body', defaultValue: { summary: '#d3d3d3' } },
    },
    bodyBorderRadius: {
      control: 'text',
      description: 'Border radius of the slider body',
      table: { category: 'Body', defaultValue: { summary: '4px' } },
    },

    // Thumb
    sliderThumbHeight: {
      control: 'text',
      description: 'Height of the slider thumb',
      table: { category: 'Thumb', defaultValue: { summary: '25px' } },
    },
    sliderThumbWidth: {
      control: 'text',
      description: 'Width of the slider thumb',
      table: { category: 'Thumb', defaultValue: { summary: '25px' } },
    },
    sliderThumbBackgroundColor: {
      control: 'color',
      description: 'Background color of the slider thumb',
      table: { category: 'Thumb', defaultValue: { summary: '#3a568c' } },
    },
    sliderThumbBorderRadius: {
      control: 'text',
      description: 'Border radius of the slider thumb',
      table: { category: 'Thumb', defaultValue: { summary: '4px' } },
    },

    // Value
    value: {
      control: 'number',
      description: 'Current value of the slider',
      table: { category: 'Value', defaultValue: { summary: '0' } },
    },
    minValue: {
      control: 'number',
      description: 'Minimum value of the slider',
      table: { category: 'Value', defaultValue: { summary: '0' } },
    },
    maxValue: {
      control: 'number',
      description: 'Maximum value of the slider',
      table: { category: 'Value', defaultValue: { summary: '100' } },
    },
    step: {
      control: 'number',
      description: 'Step value for the slider',
      table: { category: 'Value', defaultValue: { summary: '1' } },
    },

    // Events
    handleChange: {
      action: 'changed',
      description: 'Change event handler',
      table: {
        type: { summary: '(value: number) => void' },
        category: 'Events',
      },
      control: false,
    },
    handleInput: {
      action: 'input',
      description: 'Input event handler',
      table: {
        type: { summary: '(value: number) => void' },
        category: 'Events',
      },
      control: false,
    },
  },
};

export default meta;

export const Default: StoryFn<ValueSliderProps> = (args) => html`
  <value-slider
    .compHeight=${args.compHeight}
    .compWidth=${args.compWidth}
    .bodyHeight=${args.bodyHeight}
    .bodyWidth=${args.bodyWidth}
    .bodyBackgroundColor=${args.bodyBackgroundColor}
    .bodyBorderRadius=${args.bodyBorderRadius}
    .sliderThumbHeight=${args.sliderThumbHeight}
    .sliderThumbWidth=${args.sliderThumbWidth}
    .sliderThumbBackgroundColor=${args.sliderThumbBackgroundColor}
    .sliderThumbBorderRadius=${args.sliderThumbBorderRadius}
    .value=${args.value}
    .minValue=${args.minValue}
    .maxValue=${args.maxValue}
    .step=${args.step}
    .handleChange=${args.handleChange}
    .handleInput=${args.handleInput}
  ></value-slider>
`;

Default.args = {
  compHeight: '25px',
  compWidth: '200px',
  bodyHeight: '100%',
  bodyWidth: '100%',
  bodyBackgroundColor: '#d3d3d3',
  bodyBorderRadius: '4px',
  sliderThumbHeight: '25px',
  sliderThumbWidth: '25px',
  sliderThumbBackgroundColor: '#3a568c',
  sliderThumbBorderRadius: '4px',
  value: 0,
  minValue: 0,
  maxValue: 100,
  step: 1,
  handleChange: (val) => console.log('Change event:', val),
  handleInput: (val) => console.log('Input event:', val),
};
