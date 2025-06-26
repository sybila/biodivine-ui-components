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
  buttonShadow?: string;

  tagText?: string;
  tagWidth?: string;

  tagTextFontSize?: string;
  tagTextFontWeight?: string;
  tagTextFontFamily?: string;
  tagTextColor?: string;
  tagTextShadow?: string;
  tagTextTransform?: string;
  tagTextAlign?: string;

  onClick?: () => void;
};

const meta: Meta<TextButtonProps> = {
  title: 'Components/Buttons/Text Button',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### \`<text-button>\`

Button with text content.

#### CSS Custom Properties

| Variable                               | Description                             |
|----------------------------------------|-----------------------------------------|
| \`--text-button-comp-height\`           | Component container height              |
| \`--text-button-comp-width\`            | Component container width               |
| \`--text-button-height\`                | Button height                           |
| \`--text-button-width\`                 | Button width                            |
| \`--text-button-bg-color\`              | Button background color                 |
| \`--text-button-hover-bg-color\`        | Button background color on hover        |
| \`--text-button-shadow\`                | Box shadow applied to the button        |
| \`--text-button-tag-color\`             | Text color                              |
| \`--text-button-tag-font-size\`         | Text font size                          |
| \`--text-button-tag-font-weight\`       | Text font weight                        |
| \`--text-button-tag-font-family\`       | Text font family                        |
| \`--text-button-tag-text-shadow\`       | Text shadow                             |
| \`--text-button-tag-text-transform\`    | Text transformation (e.g., uppercase)   |
| \`--text-button-tag-text-align\`        | Text alignment                          |
| \`--text-button-text-container-width\`  | Width of the text container             |

#### Shadow DOM Parts

| Part Name   | Element          | Description           |
|-------------|------------------|-----------------------|
| \`button\`     | \`<button>\`        | The clickable button  |
| \`tag-text\`  | \`<span>\` inside   | The text label span   |
        `,
      },
    },
  },
  argTypes: {
    compHeight: {
      control: 'text',
      description: 'Height of the outer component container',
      table: { defaultValue: { summary: 'fit-content' }, category: 'Props' },
    },
    compWidth: {
      control: 'text',
      description: 'Width of the outer component container',
      table: { defaultValue: { summary: 'fit-content' }, category: 'Props' },
    },
    buttonHeight: {
      control: 'text',
      description: 'Height of the button',
      table: { defaultValue: { summary: '30px' }, category: 'Props' },
    },
    buttonWidth: {
      control: 'text',
      description: 'Width of the button',
      table: { defaultValue: { summary: '30px' }, category: 'Props' },
    },
    buttonColor: {
      control: 'color',
      description: 'Background color of the button',
      table: { defaultValue: { summary: '#eceff1' }, category: 'Props' },
    },
    buttonHoverColor: {
      control: 'color',
      description: 'Background color of the button on hover',
      table: { defaultValue: { summary: '#cfd8dc' }, category: 'Props' },
    },
    buttonShadow: {
      control: 'text',
      description: 'Box shadow of the button',
      table: {
        defaultValue: { summary: '0px 2px 5px #d0d0d0' },
        category: 'Props',
      },
    },
    tagText: {
      control: 'text',
      description: 'The text content shown inside the button',
      table: { category: 'Props' },
    },
    tagWidth: {
      control: 'text',
      description: 'Width of the tag text container',
      table: { defaultValue: { summary: 'fit-content' }, category: 'Props' },
    },
    tagTextFontSize: {
      control: 'text',
      description: 'Font size of the tag text',
      table: { defaultValue: { summary: '90%' }, category: 'Props' },
    },
    tagTextFontWeight: {
      control: 'text',
      description: 'Font weight of the tag text',
      table: { defaultValue: { summary: 'bold' }, category: 'Props' },
    },
    tagTextFontFamily: {
      control: 'text',
      description: 'Font family of the tag text',
      table: {
        defaultValue: { summary: 'Helvetica, Arial, sans-serif' },
        category: 'Props',
      },
    },
    tagTextColor: {
      control: 'color',
      description: 'Color of the tag text',
      table: { defaultValue: { summary: 'black' }, category: 'Props' },
    },
    tagTextShadow: {
      control: 'text',
      description: 'Text shadow for the tag text',
      table: {
        defaultValue: { summary: '0px 2px 5px #d0d0d0' },
        category: 'Props',
      },
    },
    tagTextTransform: {
      control: 'text',
      description: 'Text transformation (e.g., uppercase, lowercase)',
      table: { defaultValue: { summary: 'none' }, category: 'Props' },
    },
    tagTextAlign: {
      control: 'text',
      description: 'Text alignment within the button',
      table: { defaultValue: { summary: 'center' }, category: 'Props' },
    },
    onClick: {
      action: 'clicked',
      table: { type: { summary: '() => void' }, category: 'Events' },
      control: false,
      description: 'Click event handler',
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
    .buttonShadow=${args.buttonShadow}
    .tagText=${args.tagText}
    .tagWidth=${args.tagWidth}
    .tagTextFontSize=${args.tagTextFontSize}
    .tagTextFontWeight=${args.tagTextFontWeight}
    .tagTextFontFamily=${args.tagTextFontFamily}
    .tagTextColor=${args.tagTextColor}
    .tagTextShadow=${args.tagTextShadow}
    .tagTextTransform=${args.tagTextTransform}
    .tagTextAlign=${args.tagTextAlign}
    .onClick=${() => console.log('button clicked')}
  ></text-button>
`;

Default.args = {
  compHeight: 'fit-content',
  compWidth: 'fit-content',
  buttonHeight: '40px',
  buttonWidth: '120px',
  buttonColor: '#eceff1',
  buttonHoverColor: '#b0bec5',
  buttonShadow: '0px 2px 5px #d0d0d0',
  tagText: 'Click Me',
  tagWidth: 'fit-content',
  tagTextFontSize: '16px',
  tagTextFontWeight: '600',
  tagTextFontFamily: 'Arial, sans-serif',
  tagTextColor: '#333',
  tagTextShadow: '0px 1px 2px #aaa',
  tagTextTransform: 'uppercase',
  tagTextAlign: 'center',
};
