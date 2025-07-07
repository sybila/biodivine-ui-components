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
  buttonActiveColor?: string;
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
  isActive?: boolean;
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

#### CSS Variables (Configurable via props)

| Variable                                  | Description                              |
|------------------------------------------|------------------------------------------|
| \`--icon-button-comp-height\`              | Container height                          |
| \`--icon-button-comp-width\`               | Container width                           |
| \`--icon-button-size\`                     | Button size (based on \`sizeBy\`)         |
| \`--icon-button-border-radius\`            | Border radius of the button               |
| \`--icon-button-bg-color\`                 | Button background color                   |
| \`--icon-button-hover-bg-color\`           | Background on hover                       |
| \`--icon-button-active-bg-color\`          | Background when \`isActive\` is true       |
| \`--icon-button-shadow\`                   | Button and container shadow               |
| \`--icon-button-icon-size\`                | Icon size inside button                   |
| \`--icon-button-tag-width\`                | Width of tag label                        |
| \`--icon-button-tag-padx\`                 | Horizontal padding inside tag             |
| \`--icon-button-tag-font-size\`            | Font size of tag text                     |
| \`--icon-button-tag-font-weight\`          | Font weight of tag text                   |
| \`--icon-button-tag-font-family\`          | Font family of tag text                   |
| \`--icon-button-tag-color\`                | Text color of tag                         |
| \`--icon-button-tag-text-shadow\`          | Shadow applied to tag text                |
| \`--icon-button-tag-text-transform\`       | Text transform for tag                    |
| \`--icon-button-tag-text-align\`           | Text alignment in tag                     |
| \`--icon-button-tag-text-delay\`           | Fade-in delay of tag on hover             |
        `,
      },
    },
  },
  argTypes: {
    compHeight: {
      control: 'text',
      table: { category: 'Props', defaultValue: { summary: '60px' } },
    },
    compWidth: {
      control: 'text',
      table: { category: 'Props', defaultValue: { summary: 'fit-content' } },
    },
    buttonSize: {
      control: 'text',
      table: { category: 'Props', defaultValue: { summary: '100%' } },
    },
    sizeBy: {
      control: 'radio',
      options: ['height', 'width'],
      table: { category: 'Props', defaultValue: { summary: 'height' } },
    },
    buttonBorderRadius: {
      control: 'text',
      table: { category: 'Props', defaultValue: { summary: '24px' } },
    },
    buttonColor: {
      control: 'color',
      table: { category: 'Props', defaultValue: { summary: '#eceff1' } },
    },
    buttonHoverColor: {
      control: 'color',
      table: { category: 'Props', defaultValue: { summary: '#b0bec5' } },
    },
    buttonActiveColor: {
      control: 'color',
      table: { category: 'Props', defaultValue: { summary: '#cfd8dc' } },
    },
    buttonShadow: {
      control: 'text',
      table: {
        category: 'Props',
        defaultValue: { summary: '0px 2px 5px #d0d0d0' },
      },
    },
    iconSrc: { control: 'text', table: { category: 'Props' } },
    iconAlt: {
      control: 'text',
      table: { category: 'Props', defaultValue: { summary: 'icon' } },
    },
    iconSize: {
      control: 'text',
      table: { category: 'Props', defaultValue: { summary: '70%' } },
    },
    showTag: {
      control: 'boolean',
      table: { category: 'Props', defaultValue: { summary: 'false' } },
    },
    tagText: { control: 'text', table: { category: 'Props' } },
    tagWidth: {
      control: 'text',
      table: { category: 'Props', defaultValue: { summary: '300px' } },
    },
    tagPadX: {
      control: 'text',
      table: { category: 'Props', defaultValue: { summary: '10px' } },
    },
    tagTextFontSize: {
      control: 'text',
      table: { category: 'Props', defaultValue: { summary: '20px' } },
    },
    tagTextFontWeight: {
      control: 'text',
      table: { category: 'Props', defaultValue: { summary: 'bold' } },
    },
    tagTextFontFamily: {
      control: 'text',
      table: {
        category: 'Props',
        defaultValue: { summary: "'Helvetica', 'Arial', sans-serif" },
      },
    },
    tagTextColor: {
      control: 'color',
      table: { category: 'Props', defaultValue: { summary: 'black' } },
    },
    tagTextShadow: {
      control: 'text',
      table: {
        category: 'Props',
        defaultValue: { summary: '0px 2px 5px #d0d0d0' },
      },
    },
    tagTextTransform: {
      control: 'text',
      table: { category: 'Props', defaultValue: { summary: 'none' } },
    },
    tagTextAlign: {
      control: 'text',
      table: { category: 'Props', defaultValue: { summary: 'center' } },
    },
    tagTextDelay: {
      control: 'text',
      table: { category: 'Props', defaultValue: { summary: '0.1s' } },
    },
    isActive: {
      control: 'boolean',
      table: { category: 'Props', defaultValue: { summary: 'false' } },
    },
    onClick: {
      action: 'clicked',
      table: { category: 'Events' },
      control: false,
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
    .buttonActiveColor=${args.buttonActiveColor}
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
    .isActive=${args.isActive}
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
  buttonActiveColor: '#cfd8dc',
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
  isActive: false,
};
