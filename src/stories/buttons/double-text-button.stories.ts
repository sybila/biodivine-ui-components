import '../../components/buttons/double-text-button';
import { html } from 'lit';
import type { Meta, StoryFn } from '@storybook/web-components';

type DoubleTextButtonProps = {
  /** Height of the outer component container */
  compHeight?: string;
  /** Width of the outer component container */
  compWidth?: string;
  /** Height of the button */
  buttonHeight?: string;
  /** Width of the button */
  buttonWidth?: string;
  /** Border radius of the button */
  buttonBorderRadius?: string;
  /** Box shadow of the button */
  buttonShadow?: string;
  /** Click event handler */
  onClick?: () => void;

  /** Background color of the left section */
  leftColor?: string;
  /** Background color of the left section on hover */
  leftHoverColor?: string;
  /** Text content of the left section */
  leftText?: string;
  /** Width of the left section */
  leftWidth?: string;
  /** Horizontal padding of the left section */
  leftPadX?: string;
  /** Font size of the left section text */
  leftTextFontSize?: string;
  /** Font weight of the left section text */
  leftTextFontWeight?: string;
  /** Font family of the left section text */
  leftTextFontFamily?: string;
  /** Color of the left section text */
  leftTextColor?: string;
  /** Text shadow for the left section text */
  leftTextShadow?: string;
  /** Text transformation (e.g., uppercase, lowercase) for the left section */
  leftTextTransform?: string;
  /** Text alignment within the left section */
  leftTextAlign?: string;
  /** Line height of the left section text */
  leftLineHeight?: string;

  /** Background color of the right section */
  rightColor?: string;
  /** Background color of the right section on hover */
  rightHoverColor?: string;
  /** Text content of the right section */
  rightText?: string;
  /** Width of the right section */
  rightWidth?: string;
  /** Horizontal padding of the right section */
  rightPadX?: string;
  /** Font size of the right section text */
  rightTextFontSize?: string;
  /** Font weight of the right section text */
  rightTextFontWeight?: string;
  /** Font family of the right section text */
  rightTextFontFamily?: string;
  /** Color of the right section text */
  rightTextColor?: string;
  /** Text shadow for the right section text */
  rightTextShadow?: string;
  /** Text transformation (e.g., uppercase, lowercase) for the right section */
  rightTextTransform?: string;
  /** Text alignment within the right section */
  rightTextAlign?: string;
  /** Line height of the right section text */
  rightLineHeight?: string;
};

const meta: Meta<DoubleTextButtonProps> = {
  title: 'Components/Buttons/Double Text Button',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### \`<double-text-button>\`

A button with two customizable text sections (left and right).

#### CSS Custom Properties

| Variable                                         | Description                              |
|--------------------------------------------------|------------------------------------------|
| \`--double-text-button-comp-height\`              | Container height                         |
| \`--double-text-button-comp-width\`               | Container width                          |
| \`--double-text-button-height\`                   | Button height                            |
| \`--double-text-button-width\`                    | Button width                             |
| \`--double-text-button-border-radius\`            | Button border radius                     |
| \`--double-text-button-shadow\`                   | Button shadow                            |
| \`--double-text-button-left-bg-color\`            | Left section background color            |
| \`--double-text-button-left-hover-bg-color\`      | Left section hover background color      |
| \`--double-text-button-left-width\`               | Left section width                       |
| \`--double-text-button-left-padx\`                | Left section horizontal padding          |
| \`--double-text-button-left-font-size\`           | Left section font size                   |
| \`--double-text-button-left-font-weight\`         | Left section font weight                 |
| \`--double-text-button-left-font-family\`         | Left section font family                 |
| \`--double-text-button-left-color\`               | Left section text color                  |
| \`--double-text-button-left-text-shadow\`         | Left section text shadow                 |
| \`--double-text-button-left-text-transform\`      | Left section text transform              |
| \`--double-text-button-left-text-align\`          | Left section text alignment              |
| \`--double-text-button-left-line-height\`         | Left section line height                 |
| \`--double-text-button-right-bg-color\`           | Right section background color           |
| \`--double-text-button-right-hover-bg-color\`     | Right section hover background color     |
| \`--double-text-button-right-width\`              | Right section width                      |
| \`--double-text-button-right-padx\`               | Right section horizontal padding         |
| \`--double-text-button-right-font-size\`          | Right section font size                  |
| \`--double-text-button-right-font-weight\`        | Right section font weight                |
| \`--double-text-button-right-font-family\`        | Right section font family                |
| \`--double-text-button-right-color\`              | Right section text color                 |
| \`--double-text-button-right-text-shadow\`        | Right section text shadow                |
| \`--double-text-button-right-text-transform\`     | Right section text transform             |
| \`--double-text-button-right-text-align\`         | Right section text alignment             |
| \`--double-text-button-right-line-height\`        | Right section line height                |
        
#### Shadow DOM Parts

| Part Name      | Description                |
|----------------|----------------------------|
| \`button\`        | The clickable button area  |
| \`left-section\`  | Left text section         |
| \`right-section\` | Right text section        |
`,
      },
    },
  },
  argTypes: {
    // Layout
    compHeight: {
      control: 'text',
      description: 'Height of the outer component container',
      table: { category: 'Layout', defaultValue: { summary: '60px' } },
    },
    compWidth: {
      control: 'text',
      description: 'Width of the outer component container',
      table: { category: 'Layout', defaultValue: { summary: '242px' } },
    },

    // Button
    buttonHeight: {
      control: 'text',
      description: 'Height of the button',
      table: { category: 'Button', defaultValue: { summary: '100%' } },
    },
    buttonWidth: {
      control: 'text',
      description: 'Width of the button',
      table: { category: 'Button', defaultValue: { summary: '100%' } },
    },
    buttonBorderRadius: {
      control: 'text',
      description: 'Border radius of the button',
      table: { category: 'Button', defaultValue: { summary: '12px' } },
    },
    buttonShadow: {
      control: 'text',
      description: 'Box shadow of the button',
      table: {
        category: 'Button',
        defaultValue: { summary: '0px 2px 5px #d0d0d0' },
      },
    },
    onClick: {
      action: 'clicked',
      description: 'Click event handler',
      table: { type: { summary: '() => void' }, category: 'Events' },
      control: false,
    },

    // Left Section
    leftColor: {
      control: 'color',
      description: 'Background color of the left section',
      table: { category: 'Left Section', defaultValue: { summary: '#eceff1' } },
    },
    leftHoverColor: {
      control: 'color',
      description: 'Background color of the left section on hover',
      table: { category: 'Left Section', defaultValue: { summary: '#cfd8dc' } },
    },
    leftText: {
      control: 'text',
      description: 'Text content of the left section',
      table: { category: 'Left Section' },
    },
    leftWidth: {
      control: 'text',
      description: 'Width of the left section',
      table: { category: 'Left Section', defaultValue: { summary: '300px' } },
    },
    leftPadX: {
      control: 'text',
      description: 'Horizontal padding of the left section',
      table: { category: 'Left Section', defaultValue: { summary: '10px' } },
    },
    leftTextFontSize: {
      control: 'text',
      description: 'Font size of the left section text',
      table: { category: 'Left Section', defaultValue: { summary: '16px' } },
    },
    leftTextFontWeight: {
      control: 'text',
      description: 'Font weight of the left section text',
      table: { category: 'Left Section', defaultValue: { summary: 'bold' } },
    },
    leftTextFontFamily: {
      control: 'text',
      description: 'Font family of the left section text',
      table: {
        category: 'Left Section',
        defaultValue: { summary: "'Helvetica', 'Arial', sans-serif" },
      },
    },
    leftTextColor: {
      control: 'color',
      description: 'Color of the left section text',
      table: { category: 'Left Section', defaultValue: { summary: 'black' } },
    },
    leftTextShadow: {
      control: 'text',
      description: 'Text shadow for the left section text',
      table: {
        category: 'Left Section',
        defaultValue: { summary: '0px 2px 5px #d0d0d0' },
      },
    },
    leftTextTransform: {
      control: 'text',
      description:
        'Text transformation (e.g., uppercase, lowercase) for the left section',
      table: { category: 'Left Section', defaultValue: { summary: 'none' } },
    },
    leftTextAlign: {
      control: 'text',
      description: 'Text alignment within the left section',
      table: { category: 'Left Section', defaultValue: { summary: 'center' } },
    },
    leftLineHeight: {
      control: 'text',
      description: 'Line height of the left section text',
      table: { category: 'Left Section', defaultValue: { summary: '21px' } },
    },

    // Right Section
    rightColor: {
      control: 'color',
      description: 'Background color of the right section',
      table: {
        category: 'Right Section',
        defaultValue: { summary: '#cfd8dc' },
      },
    },
    rightHoverColor: {
      control: 'color',
      description: 'Background color of the right section on hover',
      table: {
        category: 'Right Section',
        defaultValue: { summary: '#B0BEC5' },
      },
    },
    rightText: {
      control: 'text',
      description: 'Text content of the right section',
      table: { category: 'Right Section' },
    },
    rightWidth: {
      control: 'text',
      description: 'Width of the right section',
      table: { category: 'Right Section', defaultValue: { summary: '300px' } },
    },
    rightPadX: {
      control: 'text',
      description: 'Horizontal padding of the right section',
      table: { category: 'Right Section', defaultValue: { summary: '10px' } },
    },
    rightTextFontSize: {
      control: 'text',
      description: 'Font size of the right section text',
      table: { category: 'Right Section', defaultValue: { summary: '16px' } },
    },
    rightTextFontWeight: {
      control: 'text',
      description: 'Font weight of the right section text',
      table: { category: 'Right Section', defaultValue: { summary: 'bold' } },
    },
    rightTextFontFamily: {
      control: 'text',
      description: 'Font family of the right section text',
      table: {
        category: 'Right Section',
        defaultValue: { summary: "'Helvetica', 'Arial', sans-serif" },
      },
    },
    rightTextColor: {
      control: 'color',
      description: 'Color of the right section text',
      table: { category: 'Right Section', defaultValue: { summary: 'black' } },
    },
    rightTextShadow: {
      control: 'text',
      description: 'Text shadow for the right section text',
      table: {
        category: 'Right Section',
        defaultValue: { summary: '0px 2px 5px #d0d0d0' },
      },
    },
    rightTextTransform: {
      control: 'text',
      description:
        'Text transformation (e.g., uppercase, lowercase) for the right section',
      table: { category: 'Right Section', defaultValue: { summary: 'none' } },
    },
    rightTextAlign: {
      control: 'text',
      description: 'Text alignment within the right section',
      table: { category: 'Right Section', defaultValue: { summary: 'center' } },
    },
    rightLineHeight: {
      control: 'text',
      description: 'Line height of the right section text',
      table: { category: 'Right Section', defaultValue: { summary: '21px' } },
    },
  },
};

export default meta;

export const Default: StoryFn<DoubleTextButtonProps> = (args) => html`
  <double-text-button
    .compHeight=${args.compHeight}
    .compWidth=${args.compWidth}
    .buttonHeight=${args.buttonHeight}
    .buttonWidth=${args.buttonWidth}
    .buttonBorderRadius=${args.buttonBorderRadius}
    .buttonShadow=${args.buttonShadow}
    .onClick=${args.onClick}
    .leftColor=${args.leftColor}
    .leftHoverColor=${args.leftHoverColor}
    .leftText=${args.leftText}
    .leftWidth=${args.leftWidth}
    .leftPadX=${args.leftPadX}
    .leftTextFontSize=${args.leftTextFontSize}
    .leftTextFontWeight=${args.leftTextFontWeight}
    .leftTextFontFamily=${args.leftTextFontFamily}
    .leftTextColor=${args.leftTextColor}
    .leftTextShadow=${args.leftTextShadow}
    .leftTextTransform=${args.leftTextTransform}
    .leftTextAlign=${args.leftTextAlign}
    .leftLineHeight=${args.leftLineHeight}
    .rightColor=${args.rightColor}
    .rightHoverColor=${args.rightHoverColor}
    .rightText=${args.rightText}
    .rightWidth=${args.rightWidth}
    .rightPadX=${args.rightPadX}
    .rightTextFontSize=${args.rightTextFontSize}
    .rightTextFontWeight=${args.rightTextFontWeight}
    .rightTextFontFamily=${args.rightTextFontFamily}
    .rightTextColor=${args.rightTextColor}
    .rightTextShadow=${args.rightTextShadow}
    .rightTextTransform=${args.rightTextTransform}
    .rightTextAlign=${args.rightTextAlign}
    .rightLineHeight=${args.rightLineHeight}
  ></double-text-button>
`;

Default.args = {
  compHeight: '60px',
  compWidth: '242px',
  buttonHeight: '100%',
  buttonWidth: '100%',
  buttonBorderRadius: '12px',
  buttonShadow: '0px 2px 5px #d0d0d0',
  leftColor: '#eceff1',
  leftHoverColor: '#cfd8dc',
  leftText: 'Left',
  leftWidth: '300px',
  leftPadX: '10px',
  leftTextFontSize: '16px',
  leftTextFontWeight: 'bold',
  leftTextFontFamily: "'Helvetica', 'Arial', sans-serif",
  leftTextColor: 'black',
  leftTextShadow: '0px 2px 5px #d0d0d0',
  leftTextTransform: 'none',
  leftTextAlign: 'center',
  leftLineHeight: '21px',
  rightColor: '#cfd8dc',
  rightHoverColor: '#B0BEC5',
  rightText: 'Right',
  rightWidth: '300px',
  rightPadX: '10px',
  rightTextFontSize: '16px',
  rightTextFontWeight: 'bold',
  rightTextFontFamily: "'Helvetica', 'Arial', sans-serif",
  rightTextColor: 'black',
  rightTextShadow: '0px 2px 5px #d0d0d0',
  rightTextTransform: 'none',
  rightTextAlign: 'center',
  rightLineHeight: '21px',
};
