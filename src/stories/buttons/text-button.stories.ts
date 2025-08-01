import '../../components/buttons/text-button';
import { html } from 'lit';
import type { Meta, StoryFn } from '@storybook/web-components';

type TextButtonProps = {
  compHeight?: string;
  compWidth?: string;

  buttonHeight?: string;
  buttonWidth?: string;
  buttonColor?: string;
  buttonHoverColor?: string;
  buttonActiveColor?: string;
  buttonShadow?: string;
  handleClick?: () => void;

  text?: string;
  textContainerHeight?: string;
  textContainerWidth?: string;

  textFontSize?: string;
  textFontWeight?: string;
  textFontFamily?: string;
  textColor?: string;
  textShadow?: string;
  textTransform?: string;
  textAlign?: string;
  textLineHeight?: string;

  active?: boolean;
};

const meta: Meta<TextButtonProps> = {
  title: 'Components/Buttons/Text Button',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### \`<text-button>\`

A button with customizable text content.

#### CSS Custom Properties

| Variable                                   | Description                             |
|---------------------------------------------|-----------------------------------------|
| \`--text-button-comp-height\`               | Component container height              |
| \`--text-button-comp-width\`                | Component container width               |
| \`--text-button-height\`                    | Button height                           |
| \`--text-button-width\`                     | Button width                            |
| \`--text-button-bg-color\`                  | Button background color                 |
| \`--text-button-hover-bg-color\`            | Button background color on hover        |
| \`--text-button-active-bg-color\`           | Button background color when active     |
| \`--text-button-shadow\`                    | Box shadow applied to the button        |
| \`--text-button-text-color\`                | Text color                              |
| \`--text-button-font-size\`                 | Text font size                          |
| \`--text-button-font-weight\`               | Text font weight                        |
| \`--text-button-font-family\`               | Text font family                        |
| \`--text-button-text-shadow\`               | Text shadow                             |
| \`--text-button-text-transform\`            | Text transformation (e.g., uppercase)   |
| \`--text-button-text-align\`                | Text alignment                          |
| \`--text-button-line-height\`               | Line height of the text                 |
| \`--text-button-text-container-height\`     | Height of the text container            |
| \`--text-button-text-container-width\`      | Width of the text container             |

#### Shadow DOM Parts

| Part Name   | Element          | Description           |
|-------------|------------------|-----------------------|
| \`button\`     | \`<button>\`        | The clickable button  |
| \`text\`       | \`<span>\` inside   | The text label span   |
        `,
      },
    },
  },
  argTypes: {
    // Layout
    compHeight: {
      control: 'text',
      description: 'Height of the outer component container',
      table: { defaultValue: { summary: 'fit-content' }, category: 'Layout' },
    },
    compWidth: {
      control: 'text',
      description: 'Width of the outer component container',
      table: { defaultValue: { summary: 'fit-content' }, category: 'Layout' },
    },

    // Button
    buttonHeight: {
      control: 'text',
      description: 'Height of the button',
      table: { defaultValue: { summary: '40px' }, category: 'Button' },
    },
    buttonWidth: {
      control: 'text',
      description: 'Width of the button',
      table: { defaultValue: { summary: '120px' }, category: 'Button' },
    },
    buttonColor: {
      control: 'color',
      description: 'Background color of the button',
      table: { defaultValue: { summary: '#eceff1' }, category: 'Button' },
    },
    buttonHoverColor: {
      control: 'color',
      description: 'Background color of the button on hover',
      table: { defaultValue: { summary: '#b0bec5' }, category: 'Button' },
    },
    buttonActiveColor: {
      control: 'color',
      description: 'Background color of the button when active',
      table: { defaultValue: { summary: '#cfd8dc' }, category: 'Button' },
    },
    buttonShadow: {
      control: 'text',
      description: 'Box shadow of the button',
      table: {
        defaultValue: { summary: '0px 2px 5px #d0d0d0' },
        category: 'Button',
      },
    },
    handleClick: {
      action: 'clicked',
      description: 'Click event handler',
      table: { type: { summary: '() => void' }, category: 'Events' },
      control: false,
    },

    // Text
    text: {
      control: 'text',
      description: 'The text content shown inside the button',
      table: { category: 'Text' },
    },
    textContainerHeight: {
      control: 'text',
      description: 'Height of the text container',
      table: { defaultValue: { summary: '100%' }, category: 'Text' },
    },
    textContainerWidth: {
      control: 'text',
      description: 'Width of the text container',
      table: { defaultValue: { summary: '100%' }, category: 'Text' },
    },
    textFontSize: {
      control: 'text',
      description: 'Font size of the text',
      table: { defaultValue: { summary: '16px' }, category: 'Text' },
    },
    textFontWeight: {
      control: 'text',
      description: 'Font weight of the text',
      table: { defaultValue: { summary: '600' }, category: 'Text' },
    },
    textFontFamily: {
      control: 'text',
      description: 'Font family of the text',
      table: {
        defaultValue: { summary: 'Arial, sans-serif' },
        category: 'Text',
      },
    },
    textColor: {
      control: 'color',
      description: 'Color of the text',
      table: { defaultValue: { summary: '#333' }, category: 'Text' },
    },
    textShadow: {
      control: 'text',
      description: 'Text shadow for the text',
      table: {
        defaultValue: { summary: '0px 1px 2px #aaa' },
        category: 'Text',
      },
    },
    textTransform: {
      control: 'text',
      description: 'Text transformation (e.g., uppercase, lowercase)',
      table: { defaultValue: { summary: 'uppercase' }, category: 'Text' },
    },
    textAlign: {
      control: 'text',
      description: 'Text alignment within the button',
      table: { defaultValue: { summary: 'center' }, category: 'Text' },
    },
    textLineHeight: {
      control: 'text',
      description: 'Line height of the text',
      table: { defaultValue: { summary: '20px' }, category: 'Text' },
    },

    // State
    active: {
      control: 'boolean',
      description: 'Whether the button is in the active state',
      table: { defaultValue: { summary: 'false' }, category: 'State' },
    },
  },
};

export default meta;

export const Default: StoryFn<TextButtonProps> = (args) => html`
  <text-button
    .compHeight=${args.compHeight}
    .compWidth=${args.compWidth}
    .buttonHeight=${args.buttonHeight}
    .buttonWidth=${args.buttonWidth}
    .buttonColor=${args.buttonColor}
    .buttonHoverColor=${args.buttonHoverColor}
    .buttonActiveColor=${args.buttonActiveColor}
    .buttonShadow=${args.buttonShadow}
    .handleClick=${args.handleClick}
    .text=${args.text}
    .textContainerHeight=${args.textContainerHeight}
    .textContainerWidth=${args.textContainerWidth}
    .textFontSize=${args.textFontSize}
    .textFontWeight=${args.textFontWeight}
    .textFontFamily=${args.textFontFamily}
    .textColor=${args.textColor}
    .textShadow=${args.textShadow}
    .textTransform=${args.textTransform}
    .textAlign=${args.textAlign}
    .textLineHeight=${args.textLineHeight}
    .active=${args.active}
  ></text-button>
`;

Default.args = {
  compHeight: '30px',
  compWidth: '60px',
  buttonHeight: '100%',
  buttonWidth: '100%',
  buttonColor: '#eceff1',
  buttonHoverColor: '#b0bec5',
  buttonActiveColor: '#cfd8dc',
  buttonShadow: '0px 2px 5px #d0d0d0',
  text: 'Click Me',
  textContainerHeight: '100%',
  textContainerWidth: '100%',
  textFontSize: '16px',
  textFontWeight: 'bold',
  textFontFamily: 'Helvetica, Arial, sans-serif',
  textColor: 'black',
  textShadow: '0px 2px 5px #d0d0d0',
  textTransform: 'none',
  textAlign: 'center',
  textLineHeight: '20px',
  active: false,
};
