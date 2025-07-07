import '../../components/buttons/icon-button';
import { html } from 'lit';
import type { Meta, StoryFn } from '@storybook/web-components';

type IconButtonProps = {
  compHeight?: string;
  compWidth?: string;
  buttonSize?: string;
  buttonBorderRadius?: string;
  buttonColor?: string;
  buttonHoverColor?: string;
  buttonShadow?: string;
  iconSrc?: string;
  iconAlt?: string;
  iconSize?: string;
  sizeBy: 'height' | 'width';
  onClick?: () => void;
  showTag?: boolean;
  tagText?: string;
  tagWidth?: string;
  tagPadX?: string;
  tagTextFontSize?: string;
  tagTextFontWeight?: string;
  tagTextFontFamily?: string;
  tagTextColor?: string;
  tagTextShadow?: string;
  tagTextTransform?: string;
  tagTextAlign?: string;
  tagTextDelay?: string;
};

const meta: Meta<IconButtonProps> = {
  title: 'Components/Buttons/Icon Button',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### \`<icon-button>\`

A customizable icon button with optional expanding tag text on hover.

#### Features
- Flexible sizing (by height or width)
- Hover-triggered label expansion
- Customizable styling through props or CSS variables

#### Shadow DOM Parts

| Part Name   | Element    | Description                  |
|-------------|------------|------------------------------|
| \`button\`    | \`<button>\`  | The clickable button area    |
| \`icon\`      | \`<img>\`     | The icon inside the button   |
| \`tag-text\`  | \`<span>\`    | The expanding tag/label text |

#### CSS Variables
(Also configurable via props)

| Variable                                | Description                            |
|----------------------------------------|----------------------------------------|
| \`--icon-button-comp-height\`            | Container height                        |
| \`--icon-button-comp-width\`             | Container width                         |
| \`--icon-button-size\`                   | Button size (based on \`sizeBy\`)       |
| \`--icon-button-border-radius\`          | Border radius of the button             |
| \`--icon-button-bg-color\`               | Button background color                 |
| \`--icon-button-hover-bg-color\`         | Button background on hover              |
| \`--icon-button-shadow\`                 | Box shadow of button & tag              |
| \`--icon-button-icon-size\`              | Icon size relative to button            |
| \`--icon-button-tag-width\`              | Width of the tag text container         |
| \`--icon-button-tag-padx\`               | Horizontal padding for tag text         |
| \`--icon-button-tag-font-size\`          | Font size of tag text                   |
| \`--icon-button-tag-font-weight\`        | Font weight of tag text                 |
| \`--icon-button-tag-font-family\`        | Font family for tag text                |
| \`--icon-button-tag-color\`              | Color of tag text                       |
| \`--icon-button-tag-text-shadow\`        | Shadow applied to tag text              |
| \`--icon-button-tag-text-transform\`     | Transform (e.g. uppercase) on tag text  |
| \`--icon-button-tag-text-align\`         | Text alignment inside tag               |
| \`--icon-button-tag-text-delay\`         | Delay before tag appears on hover       |
        `,
      },
    },
  },
  argTypes: {
    compHeight: {
      control: 'text',
      description: 'Height of the component container',
      table: { category: 'Props', defaultValue: { summary: '60px' } },
    },
    compWidth: {
      control: 'text',
      description: 'Width of the component container',
      table: { category: 'Props', defaultValue: { summary: 'fit-content' } },
    },
    buttonSize: {
      control: 'text',
      description:
        'Size of the button (height or width depending on sizeBy)',
      table: { category: 'Props', defaultValue: { summary: '100%' } },
    },
    sizeBy: {
      control: 'radio',
      options: ['height', 'width'],
      description: 'Dimension used to size the button',
      table: { category: 'Props', defaultValue: { summary: 'height' } },
    },
    buttonBorderRadius: {
      control: 'text',
      description: 'Border radius of the button',
      table: { category: 'Props', defaultValue: { summary: '24px' } },
    },
    buttonColor: {
      control: 'color',
      description: 'Background color of the button',
      table: { category: 'Props', defaultValue: { summary: '#eceff1' } },
    },
    buttonHoverColor: {
      control: 'color',
      description: 'Hover background color of the button',
      table: { category: 'Props', defaultValue: { summary: '#cfd8dc' } },
    },
    buttonShadow: {
      control: 'text',
      description: 'Box shadow of the button',
      table: { category: 'Props', defaultValue: { summary: '0px 2px 5px #d0d0d0' } },
    },
    iconSrc: {
      control: 'text',
      description: 'Icon image source URL',
      table: { category: 'Props' },
    },
    iconAlt: {
      control: 'text',
      description: 'Alternative text for the icon',
      table: { category: 'Props', defaultValue: { summary: 'icon' } },
    },
    iconSize: {
      control: 'text',
      description: 'Size of the icon within the button',
      table: { category: 'Props', defaultValue: { summary: '70%' } },
    },
    showTag: {
      control: 'boolean',
      description: 'Toggle visibility of tag label',
      table: { category: 'Props', defaultValue: { summary: "false" } },
    },
    tagText: {
      control: 'text',
      description: 'Text content of the tag',
      table: { category: 'Props' },
    },
    tagWidth: {
      control: 'text',
      description: 'Width of the tag text area',
      table: { category: 'Props', defaultValue: { summary: '300px' } },
    },
    tagPadX: {
      control: 'text',
      description: 'Horizontal padding inside tag',
      table: { category: 'Props', defaultValue: { summary: '10px' } },
    },
    tagTextFontSize: {
      control: 'text',
      description: 'Font size of tag text',
      table: { category: 'Props', defaultValue: { summary: '20px' } },
    },
    tagTextFontWeight: {
      control: 'text',
      description: 'Font weight of tag text',
      table: { category: 'Props', defaultValue: { summary: 'bold' } },
    },
    tagTextFontFamily: {
      control: 'text',
      description: 'Font family for tag text',
      table: {
        category: 'Props',
        defaultValue: { summary: "'Helvetica', 'Arial', sans-serif" },
      },
    },
    tagTextColor: {
      control: 'color',
      description: 'Color of tag text',
      table: { category: 'Props', defaultValue: { summary: 'black' } },
    },
    tagTextShadow: {
      control: 'text',
      description: 'Shadow for tag text',
      table: {
        category: 'Props',
        defaultValue: { summary: '0px 2px 5px #d0d0d0' },
      },
    },
    tagTextTransform: {
      control: 'text',
      description: 'Text transform style for tag',
      table: { category: 'Props', defaultValue: { summary: 'none' } },
    },
    tagTextAlign: {
      control: 'text',
      description: 'Text alignment inside tag',
      table: { category: 'Props', defaultValue: { summary: 'center' } },
    },
    tagTextDelay: {
      control: 'text',
      description: 'Delay before tag text fades in on hover',
      table: { category: 'Props', defaultValue: { summary: '0.1s' } },
    },
    onClick: {
      action: 'clicked',
      table: { category: 'Events' },
      control: false,
      description: 'Click handler for button',
    },
  },
};

export default meta;

export const Default: StoryFn<IconButtonProps> = (args) => html`
  <icon-button
    .compHeight=${args.compHeight}
    .compWidth=${args.compWidth}
    .buttonSize=${args.buttonSize}
    .buttonBorderRadius=${args.buttonBorderRadius}
    .buttonColor=${args.buttonColor}
    .buttonHoverColor=${args.buttonHoverColor}
    .buttonShadow=${args.buttonShadow}
    .iconSrc=${args.iconSrc}
    .iconAlt=${args.iconAlt}
    .iconSize=${args.iconSize}
    .sizeBy=${args.sizeBy}
    .showTag=${args.showTag}
    .tagText=${args.tagText}
    .tagWidth=${args.tagWidth}
    .tagPadX=${args.tagPadX}
    .tagTextFontSize=${args.tagTextFontSize}
    .tagTextFontWeight=${args.tagTextFontWeight}
    .tagTextFontFamily=${args.tagTextFontFamily}
    .tagTextColor=${args.tagTextColor}
    .tagTextShadow=${args.tagTextShadow}
    .tagTextTransform=${args.tagTextTransform}
    .tagTextAlign=${args.tagTextAlign}
    .tagTextDelay=${args.tagTextDelay}
    .onClick=${args.onClick}
  ></icon-button>
`;

Default.args = {
  compHeight: '60px',
  compWidth: 'fit-content',
  buttonSize: '100%',
  buttonBorderRadius: '24px',
  buttonColor: '#90caf9',
  buttonHoverColor: '#64b5f6',
  buttonShadow: '0px 2px 5px #d0d0d0',
  iconSrc: '/assets/file_copy-48px.svg',
  iconAlt: 'file icon',
  iconSize: '70%',
  sizeBy: 'height',
  showTag: true,
  tagText: 'Import/Export',
  tagWidth: '300px',
  tagPadX: '10px',
  tagTextFontSize: '20px',
  tagTextFontWeight: 'bold',
  tagTextFontFamily: "'Helvetica', 'Arial', sans-serif",
  tagTextColor: '#222',
  tagTextShadow: '0px 2px 5px #bbb',
  tagTextTransform: 'none',
  tagTextAlign: 'center',
  tagTextDelay: '0.1s',
};
