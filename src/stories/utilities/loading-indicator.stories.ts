import { html } from 'lit';
import type { Meta, StoryFn } from '@storybook/web-components';
import '../../components/utilities/loading-indicator';

type LoadingIndicatorProps = {
  compHeight?: string;
  compWidth?: string;
  loadBoxHeight?: string;
  loadBoxWidth?: string;
  loadBoxColor?: string;
  loadBoxShadow?: string;
  loadBoxPad?: string;
  loadBoxGap?: string;
  loadingSpinnerSrc?: string;
  loadingSpinnerHeight?: string;
  loadingSpinnerWidth?: string;
  loadingMessage?: string;
  loadingMessageFontSize?: string;
  loadingMessageFontWeight?: string;
  tagTextFontFamily?: string;
  tagTextColor?: string;
  tagTextShadow?: string;
  tagTextTransform?: string;
};

const meta: Meta<LoadingIndicatorProps> = {
  title: 'Components/Utilities/Loading Indicator',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### \`<loading-indicator>\`

Animated component used to show a loading state.

#### CSS Custom Properties

| Variable | Description |
|---------|-------------|
| \`--loading-indicator-comp-height\` | Outer wrapper height |
| \`--loading-indicator-comp-width\` | Outer wrapper width |
| \`--loading-indicator-height\` | Spinner box height |
| \`--loading-indicator-width\` | Spinner box width |
| \`--loading-indicator-bg-color\` | Background color of the spinner box |
| \`--loading-indicator-shadow\` | Box shadow for the spinner box |
| \`--loading-indicator-pad\` | Padding for the spinner box |
| \`--loading-indicator-gap\` | Gap between spinner and message |
| \`--loading-indicator-spinner-height\` | Spinner image height |
| \`--loading-indicator-spinner-width\` | Spinner image width |
| \`--loading-indicator-tag-font-size\` | Message font size |
| \`--loading-indicator-tag-font-weight\` | Message font weight |
| \`--loading-indicator-tag-font-family\` | Message font family |
| \`--loading-indicator-tag-color\` | Message color |
| \`--loading-indicator-tag-text-shadow\` | Message text shadow |
| \`--loading-indicator-tag-text-transform\` | Message text transform |

#### Shadow DOM Parts

| Part Name         | Description                                 |
|-------------------|---------------------------------------------|
| \`box\`           | Wrapper div around spinner and message       |
| \`loading-spinner\` | The \`<img>\` element for spinner           |
| \`loading-message\` | The \`<p>\` element for loading message      |
        `,
      },
    },
  },
  argTypes: {
    compHeight: {
      control: 'text',
      description: 'Height of outer component',
      table: { defaultValue: { summary: 'fit-content' }, category: 'Layout' },
    },
    compWidth: {
      control: 'text',
      description: 'Width of outer component',
      table: { defaultValue: { summary: 'fit-content' }, category: 'Layout' },
    },
    loadBoxHeight: {
      control: 'text',
      description: 'Height of spinner box',
      table: { defaultValue: { summary: 'fit-content' }, category: 'Box' },
    },
    loadBoxWidth: {
      control: 'text',
      description: 'Width of spinner box',
      table: { defaultValue: { summary: 'fit-content' }, category: 'Box' },
    },
    loadBoxColor: {
      control: 'color',
      description: 'Background color of spinner box',
      table: { defaultValue: { summary: '#fff' }, category: 'Box' },
    },
    loadBoxShadow: {
      control: 'text',
      description: 'Box shadow',
      table: {
        defaultValue: { summary: '0px 2px 5px #d0d0d0' },
        category: 'Box',
      },
    },
    loadBoxPad: {
      control: 'text',
      description: 'Padding inside box',
      table: { defaultValue: { summary: '15px' }, category: 'Box' },
    },
    loadBoxGap: {
      control: 'text',
      description: 'Gap between spinner and message',
      table: { defaultValue: { summary: '10px' }, category: 'Box' },
    },
    loadingSpinnerSrc: {
      control: 'text',
      description: 'URL for spinner image',
      table: {
        defaultValue: { summary: 'default base64 gif' },
        category: 'Spinner',
      },
    },
    loadingSpinnerHeight: {
      control: 'text',
      description: 'Height of spinner image',
      table: { defaultValue: { summary: 'fit-content' }, category: 'Spinner' },
    },
    loadingSpinnerWidth: {
      control: 'text',
      description: 'Width of spinner image',
      table: { defaultValue: { summary: 'fit-content' }, category: 'Spinner' },
    },
    loadingMessage: {
      control: 'text',
      description: 'Message below spinner',
      table: { defaultValue: { summary: '' }, category: 'Message' },
    },
    loadingMessageFontSize: {
      control: 'text',
      description: 'Font size of message',
      table: { defaultValue: { summary: '16px' }, category: 'Message' },
    },
    loadingMessageFontWeight: {
      control: 'text',
      description: 'Font weight of message',
      table: { defaultValue: { summary: '400' }, category: 'Message' },
    },
    tagTextFontFamily: {
      control: 'text',
      description: 'Font family of message',
      table: {
        defaultValue: { summary: "'Helvetica', 'Arial', sans-serif" },
        category: 'Message',
      },
    },
    tagTextColor: {
      control: 'color',
      description: 'Text color',
      table: { defaultValue: { summary: 'black' }, category: 'Message' },
    },
    tagTextShadow: {
      control: 'text',
      description: 'Text shadow of message',
      table: {
        defaultValue: { summary: '0px 2px 5px #d0d0d0' },
        category: 'Message',
      },
    },
    tagTextTransform: {
      control: 'text',
      description: 'Text transform (e.g., uppercase)',
      table: { defaultValue: { summary: 'none' }, category: 'Message' },
    },
  },
};

export default meta;

export const Default: StoryFn<LoadingIndicatorProps> = (args) => html`
  <loading-indicator
    .compHeight=${args.compHeight}
    .compWidth=${args.compWidth}
    .loadBoxHeight=${args.loadBoxHeight}
    .loadBoxWidth=${args.loadBoxWidth}
    .loadBoxColor=${args.loadBoxColor}
    .loadBoxShadow=${args.loadBoxShadow}
    .loadBoxPad=${args.loadBoxPad}
    .loadBoxGap=${args.loadBoxGap}
    .loadingSpinnerSrc=${args.loadingSpinnerSrc}
    .loadingSpinnerHeight=${args.loadingSpinnerHeight}
    .loadingSpinnerWidth=${args.loadingSpinnerWidth}
    .loadingMessage=${args.loadingMessage}
    .loadingMessageFontSize=${args.loadingMessageFontSize}
    .loadingMessageFontWeight=${args.loadingMessageFontWeight}
    .tagTextFontFamily=${args.tagTextFontFamily}
    .tagTextColor=${args.tagTextColor}
    .tagTextShadow=${args.tagTextShadow}
    .tagTextTransform=${args.tagTextTransform}
  ></loading-indicator>
`;

Default.args = {
  compHeight: 'fit-content',
  compWidth: 'fit-content',
  loadBoxHeight: 'fit-content',
  loadBoxWidth: 'fit-content',
  loadBoxColor: '#fff',
  loadBoxShadow: '0px 2px 5px #d0d0d0',
  loadBoxPad: '15px',
  loadBoxGap: '10px',
  loadingSpinnerSrc: '',
  loadingSpinnerHeight: 'fit-content',
  loadingSpinnerWidth: 'fit-content',
  loadingMessage: 'Loading...',
  loadingMessageFontSize: '16px',
  loadingMessageFontWeight: '400',
  tagTextFontFamily: "'Helvetica', 'Arial', sans-serif",
  tagTextColor: 'black',
  tagTextShadow: '0px 2px 5px #d0d0d0',
  tagTextTransform: 'none',
};
