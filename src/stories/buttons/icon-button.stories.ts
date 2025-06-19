import '../../components/buttons/icon-button';
import { html } from 'lit';
import type { Meta, StoryFn } from '@storybook/web-components';

type IconButtonProps = {
  compHeight?: string;
  compWidth?: string;
  buttonSize?: string;
  buttonColor?: string;
  buttonHoverColor?: string;
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
};

const meta: Meta<IconButtonProps> = {
  title: 'Components/Buttons/Icon Button',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### \`<icon-button>\`

A flexible icon button with optional tag label.

#### CSS Custom Properties

| Variable                              | Description                                      |
|--------------------------------------|--------------------------------------------------|
| \`--icon-button-comp-height\`          | Container height                                |
| \`--icon-button-comp-width\`           | Container width                                 |
| \`--icon-button-size\`                 | Button size (based on \`sizeBy\`)                |
| \`--icon-button-bg-color\`             | Button background color                          |
| \`--icon-button-hover-bg-color\`       | Button hover background color                    |
| \`--icon-button-icon-size\`            | Icon image size inside the button                |
| \`--icon-button-tag-width\`            | Width of the tag                                 |
| \`--icon-button-tag-padx\`             | Horizontal padding of the tag text               |
| \`--icon-button-tag-font-size\`        | Font size of the tag text                        |
| \`--icon-button-tag-font-weight\`      | Font weight of the tag text                      |
| \`--icon-button-tag-font-family\`      | Font family of the tag text                      |
| \`--icon-button-tag-color\`            | Tag text color                                   |
| \`--icon-button-tag-text-shadow\`      | Tag text shadow                                  |
| \`--icon-button-tag-text-transform\`   | Tag text transform (e.g., uppercase)             |
| \`--icon-button-tag-text-align\`       | Tag text alignment                               |

#### Shadow DOM Parts

| Part Name | Element         | Description                   |
|-----------|------------------|-------------------------------|
| \`button\` | \`<button>\`      | The button element            |
| \`icon\`   | \`<img>\`         | The icon image inside button  |
| \`tag-text\` | \`<span>\`     | The tag/label element         |
        `,
      },
    },
  },

  argTypes: {
    compHeight: {
      control: 'text',
      table: { defaultValue: { summary: 'fit-content' }, category: 'Props' },
    },
    compWidth: {
      control: 'text',
      table: { defaultValue: { summary: 'fit-content' }, category: 'Props' },
    },
    buttonSize: {
      control: 'text',
      table: { defaultValue: { summary: '30px' }, category: 'Props' },
    },
    sizeBy: {
      control: 'radio',
      options: ['height', 'width'],
      table: { defaultValue: { summary: 'height' }, category: 'Props' },
    },
    buttonColor: {
      control: 'color',
      table: { defaultValue: { summary: '#eceff1' }, category: 'Props' },
    },
    buttonHoverColor: {
      control: 'color',
      table: { defaultValue: { summary: '#cfd8dc' }, category: 'Props' },
    },
    iconSrc: {
      control: 'text',
      table: { defaultValue: { summary: '' }, category: 'Props' },
    },
    iconAlt: {
      control: 'text',
      table: { defaultValue: { summary: 'icon' }, category: 'Props' },
    },
    iconSize: {
      control: 'text',
      table: { defaultValue: { summary: '70%' }, category: 'Props' },
    },
    showTag: {
      control: 'boolean',
      table: { defaultValue: { summary: 'false' }, category: 'Props' },
    },
    tagText: {
      control: 'text',
      table: { defaultValue: { summary: '' }, category: 'Props' },
    },
    tagWidth: {
      control: 'text',
      table: { defaultValue: { summary: 'fit-content' }, category: 'Props' },
    },
    tagPadX: {
      control: 'text',
      table: { defaultValue: { summary: '10px' }, category: 'Props' },
    },
    tagTextFontSize: {
      control: 'text',
      table: { defaultValue: { summary: '1rem' }, category: 'Props' },
    },
    tagTextFontWeight: {
      control: 'text',
      table: { defaultValue: { summary: 'bold' }, category: 'Props' },
    },
    tagTextFontFamily: {
      control: 'text',
      table: {
        defaultValue: { summary: 'Helvetica, Arial, sans-serif' },
        category: 'Props',
      },
    },
    tagTextColor: {
      control: 'color',
      table: { defaultValue: { summary: 'black' }, category: 'Props' },
    },
    tagTextShadow: {
      control: 'text',
      table: {
        defaultValue: { summary: '0px 2px 5px #d0d0d0' },
        category: 'Props',
      },
    },
    tagTextTransform: {
      control: 'text',
      table: { defaultValue: { summary: 'none' }, category: 'Props' },
    },
    tagTextAlign: {
      control: 'text',
      table: { defaultValue: { summary: 'center' }, category: 'Props' },
    },

    onClick: {
      action: 'clicked',
      table: { type: { summary: '() => void' }, category: 'Events' },
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
    .buttonColor=${args.buttonColor}
    .buttonHoverColor=${args.buttonHoverColor}
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
    .onClick=${args.onClick}
  ></icon-button>
`;

Default.args = {
  compHeight: 'fit-content',
  compWidth: 'fit-content',
  buttonSize: '40px',
  sizeBy: 'height',
  buttonColor: '#90caf9',
  buttonHoverColor: '#64b5f6',
  iconSrc: '/assets/file_copy-48px.svg',
  iconAlt: 'file icon',
  iconSize: '70%',
  showTag: true,
  tagText: 'Import/Export',
  tagWidth: 'fit-content',
  tagPadX: '10px',
  tagTextFontSize: '0.9rem',
  tagTextFontWeight: '600',
  tagTextFontFamily: 'Arial, sans-serif',
  tagTextColor: '#222',
  tagTextShadow: '0px 2px 5px #bbb',
  tagTextTransform: 'none',
  tagTextAlign: 'center',
};
