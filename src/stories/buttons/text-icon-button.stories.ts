import '../../components/buttons/text-icon-button';
import { html } from 'lit';
import type { Meta, StoryFn } from '@storybook/web-components';

type TextIconButtonProps = {
  compHeight?: string;
  compWidth?: string;

  buttonHeight?: string;
  buttonWidth?: string;
  buttonColor?: string;
  buttonHoverColor?: string;
  buttonActiveColor?: string;
  buttonShadow?: string;
  buttonJustifyContent?: string;
  buttonAlignItems?: string;
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

  iconSrc?: string;
  iconAlt?: string;
  iconHeight?: string;
  iconWidth?: string;

  active?: boolean;
};

const meta: Meta<TextIconButtonProps> = {
  title: 'Components/Buttons/Text Icon Button',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### \`<text-icon-button>\`

A button with customizable text and icon content.

#### CSS Custom Properties

| Variable                                   | Description                             |
|---------------------------------------------|-----------------------------------------|
| \`--text-icon-button-comp-height\`          | Component container height              |
| \`--text-icon-button-comp-width\`           | Component container width               |
| \`--text-icon-button-height\`               | Button height                           |
| \`--text-icon-button-width\`                | Button width                            |
| \`--text-icon-button-bg-color\`             | Button background color                 |
| \`--text-icon-button-hover-bg-color\`       | Button background color on hover        |
| \`--text-icon-button-active-bg-color\`      | Button background color when active     |
| \`--text-icon-button-shadow\`               | Box shadow applied to the button        |
| \`--text-icon-button-justify-content\`      | Button content justification            |
| \`--text-icon-button-align-items\`          | Button content alignment                |
| \`--text-icon-button-text-color\`           | Text color                              |
| \`--text-icon-button-font-size\`            | Text font size                          |
| \`--text-icon-button-font-weight\`          | Text font weight                        |
| \`--text-icon-button-font-family\`          | Text font family                        |
| \`--text-icon-button-text-shadow\`          | Text shadow                             |
| \`--text-icon-button-text-transform\`       | Text transformation (e.g., uppercase)   |
| \`--text-icon-button-text-align\`           | Text alignment                          |
| \`--text-icon-button-line-height\`          | Line height of the text                 |
| \`--text-icon-button-text-container-height\`| Height of the text container            |
| \`--text-icon-button-text-container-width\` | Width of the text container             |
| \`--text-icon-button-icon-height\`          | Height of the icon                      |
| \`--text-icon-button-icon-width\`           | Width of the icon                       |

#### Shadow DOM Parts

| Part Name   | Element          | Description           |
|-------------|------------------|-----------------------|
| \`button\`     | \`<button>\`        | The clickable button  |
| \`text\`       | \`<span>\` inside   | The text label span   |
| \`icon\`       | \`<img>\` inside    | The icon image        |
        `,
      },
    },
  },
  argTypes: {
    // Layout
    compHeight: {
      control: 'text',
      description: 'Height of the outer component container',
      table: { defaultValue: { summary: '40px' }, category: 'Layout' },
    },
    compWidth: {
      control: 'text',
      description: 'Width of the outer component container',
      table: { defaultValue: { summary: '180px' }, category: 'Layout' },
    },

    // Button
    buttonHeight: {
      control: 'text',
      description: 'Height of the button',
      table: { defaultValue: { summary: '100%' }, category: 'Button' },
    },
    buttonWidth: {
      control: 'text',
      description: 'Width of the button',
      table: { defaultValue: { summary: '100%' }, category: 'Button' },
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
    buttonJustifyContent: {
      control: 'text',
      description: 'Button content justification',
      table: { defaultValue: { summary: 'space-around' }, category: 'Button' },
    },
    buttonAlignItems: {
      control: 'text',
      description: 'Button content alignment',
      table: { defaultValue: { summary: 'center' }, category: 'Button' },
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
      table: { defaultValue: { summary: '80%' }, category: 'Text' },
    },
    textFontSize: {
      control: 'text',
      description: 'Font size of the text',
      table: { defaultValue: { summary: '16px' }, category: 'Text' },
    },
    textFontWeight: {
      control: 'text',
      description: 'Font weight of the text',
      table: { defaultValue: { summary: 'bold' }, category: 'Text' },
    },
    textFontFamily: {
      control: 'text',
      description: 'Font family of the text',
      table: {
        defaultValue: { summary: 'Helvetica, Arial, sans-serif' },
        category: 'Text',
      },
    },
    textColor: {
      control: 'color',
      description: 'Color of the text',
      table: { defaultValue: { summary: 'black' }, category: 'Text' },
    },
    textShadow: {
      control: 'text',
      description: 'Text shadow for the text',
      table: {
        defaultValue: { summary: '0px 2px 5px #d0d0d0' },
        category: 'Text',
      },
    },
    textTransform: {
      control: 'text',
      description: 'Text transformation (e.g., uppercase, lowercase)',
      table: { defaultValue: { summary: 'none' }, category: 'Text' },
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

    // Icon
    iconSrc: {
      control: 'text',
      description: 'Source URL for the icon image',
      table: { defaultValue: { summary: '' }, category: 'Icon' },
    },
    iconAlt: {
      control: 'text',
      description: 'Alt text for the icon image',
      table: { defaultValue: { summary: 'Icon' }, category: 'Icon' },
    },
    iconHeight: {
      control: 'text',
      description: 'Height of the icon',
      table: { defaultValue: { summary: '24px' }, category: 'Icon' },
    },
    iconWidth: {
      control: 'text',
      description: 'Width of the icon',
      table: { defaultValue: { summary: '24px' }, category: 'Icon' },
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

export const Default: StoryFn<TextIconButtonProps> = (args) => html`
  <text-icon-button
    .compHeight=${args.compHeight}
    .compWidth=${args.compWidth}
    .buttonHeight=${args.buttonHeight}
    .buttonWidth=${args.buttonWidth}
    .buttonColor=${args.buttonColor}
    .buttonHoverColor=${args.buttonHoverColor}
    .buttonActiveColor=${args.buttonActiveColor}
    .buttonShadow=${args.buttonShadow}
    .buttonJustifyContent=${args.buttonJustifyContent}
    .buttonAlignItems=${args.buttonAlignItems}
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
    .iconSrc=${args.iconSrc}
    .iconAlt=${args.iconAlt}
    .iconHeight=${args.iconHeight}
    .iconWidth=${args.iconWidth}
    .active=${args.active}
  ></text-icon-button>
`;

Default.args = {
  compHeight: '40px',
  compWidth: '180px',
  buttonHeight: '100%',
  buttonWidth: '100%',
  buttonColor: '#eceff1',
  buttonHoverColor: '#b0bec5',
  buttonActiveColor: '#cfd8dc',
  buttonShadow: '0px 2px 5px #d0d0d0',
  buttonJustifyContent: 'space-around',
  buttonAlignItems: 'center',
  text: 'Add Variable (N)',
  textContainerHeight: '100%',
  textContainerWidth: '80%',
  textFontSize: '16px',
  textFontWeight: 'bold',
  textFontFamily: 'Helvetica, Arial, sans-serif',
  textColor: 'black',
  textShadow: '0px 2px 5px #d0d0d0',
  textTransform: 'none',
  textAlign: 'center',
  textLineHeight: '20px',
  iconSrc: '../../../public/assets/add_box-24px.svg',
  iconAlt: 'Icon',
  iconHeight: '24px',
  iconWidth: '24px',
  active: false,
};
