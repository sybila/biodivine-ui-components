import '../../components/buttons/icon-button';
import { html } from 'lit';
import type { Meta, StoryFn } from '@storybook/web-components';

type IconButtonProps = {
  /** Height of the outer component container */
  compHeight?: string;
  /** Width of the outer component container */
  compWidth?: string;
  /** Size of the button (applies to height or width depending on sizeBy) */
  buttonSize?: string;
  /** Whether to size the button by height or width */
  sizeBy?: 'height' | 'width';
  /** Border radius of the button */
  buttonBorderRadius?: string;
  /** Background color of the button */
  buttonColor?: string;
  /** Background color of the button on hover */
  buttonHoverColor?: string;
  /** Background color of the button when active */
  buttonActiveColor?: string;
  /** Box shadow of the button */
  buttonShadow?: string;
  /** Size of the icon inside the button */
  iconSize?: string;
  /** Click event handler */
  onClick?: () => void;
  /** Source URL for the icon image */
  iconSrc?: string;
  /** Alt text for the icon image */
  iconAlt?: string;

  /** Whether to show the tag/label */
  showTag?: boolean;
  /** Text content of the tag/label */
  tagText?: string;
  /** Width of the tag/label */
  tagWidth?: string;
  /** Horizontal padding of the tag/label */
  tagPadX?: string;
  /** Line height of the tag text */
  tagLineHeight?: string;
  /** Font size of the tag text */
  tagTextFontSize?: string;
  /** Font weight of the tag text */
  tagTextFontWeight?: string;
  /** Font family of the tag text */
  tagTextFontFamily?: string;
  /** Color of the tag text */
  tagTextColor?: string;
  /** Text shadow for the tag text */
  tagTextShadow?: string;
  /** Text transformation (e.g., uppercase, lowercase) for the tag text */
  tagTextTransform?: string;
  /** Text alignment within the tag */
  tagTextAlign?: string;
  /** Fade-in delay for the tag text on hover */
  tagTextDelay?: string;
  /** Whether the button is in the active state */
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

#### Shadow DOM Parts

| Part Name   | Element    | Description                  |
|-------------|------------|------------------------------|
| \`button\`    | \`<button>\`  | The clickable button area    |
| \`icon\`      | \`<img>\`     | The icon inside the button   |
| \`tag-text\`  | \`<span>\`    | The expanding tag/label text |

#### CSS Variables (Configurable via props)

| Variable                                  | Description                              |
|--------------------------------------------|------------------------------------------|
| \`--icon-button-comp-height\`              | Container height                         |
| \`--icon-button-comp-width\`               | Container width                          |
| \`--icon-button-size\`                     | Button size (based on \`sizeBy\`)         |
| \`--icon-button-border-radius\`            | Border radius of the button              |
| \`--icon-button-bg-color\`                 | Button background color                  |
| \`--icon-button-hover-bg-color\`           | Background on hover                      |
| \`--icon-button-active-bg-color\`          | Background when \`isActive\` is true      |
| \`--icon-button-shadow\`                   | Button and container shadow              |
| \`--icon-button-icon-size\`                | Icon size inside button                  |
| \`--icon-button-tag-width\`                | Width of tag label                       |
| \`--icon-button-tag-padx\`                 | Horizontal padding inside tag            |
| \`--icon-button-tag-line-height\`          | Line height of tag text                  |
| \`--icon-button-tag-font-size\`            | Font size of tag text                    |
| \`--icon-button-tag-font-weight\`          | Font weight of tag text                  |
| \`--icon-button-tag-font-family\`          | Font family of tag text                  |
| \`--icon-button-tag-color\`                | Text color of tag                        |
| \`--icon-button-tag-text-shadow\`          | Shadow applied to tag text               |
| \`--icon-button-tag-text-transform\`       | Text transform for tag                   |
| \`--icon-button-tag-text-align\`           | Text alignment in tag                    |
| \`--icon-button-tag-text-delay\`           | Fade-in delay of tag on hover            |
        `,
      },
    },
  },
  argTypes: {
    compHeight: {
      control: 'text',
      description: 'Height of the outer component container',
      table: { category: 'Props', defaultValue: { summary: '60px' } },
    },
    compWidth: {
      control: 'text',
      description: 'Width of the outer component container',
      table: { category: 'Props', defaultValue: { summary: 'fit-content' } },
    },
    buttonSize: {
      control: 'text',
      description:
        'Size of the button (applies to height or width depending on sizeBy)',
      table: { category: 'Props', defaultValue: { summary: '100%' } },
    },
    sizeBy: {
      control: 'radio',
      options: ['height', 'width'],
      description: 'Whether to size the button by height or width',
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
      description: 'Background color of the button on hover',
      table: { category: 'Props', defaultValue: { summary: '#b0bec5' } },
    },
    buttonActiveColor: {
      control: 'color',
      description: 'Background color of the button when active',
      table: { category: 'Props', defaultValue: { summary: '#cfd8dc' } },
    },
    buttonShadow: {
      control: 'text',
      description: 'Box shadow of the button',
      table: {
        category: 'Props',
        defaultValue: { summary: '0px 2px 5px #d0d0d0' },
      },
    },
    iconSize: {
      control: 'text',
      description: 'Size of the icon inside the button',
      table: { category: 'Props', defaultValue: { summary: '70%' } },
    },
    onClick: {
      action: 'clicked',
      description: 'Click event handler',
      table: { type: { summary: '() => void' }, category: 'Events' },
      control: false,
    },
    iconSrc: {
      control: 'text',
      description: 'Source URL for the icon image',
      table: { category: 'Props' },
    },
    iconAlt: {
      control: 'text',
      description: 'Alt text for the icon image',
      table: { category: 'Props', defaultValue: { summary: 'icon' } },
    },
    showTag: {
      control: 'boolean',
      description: 'Whether to show the tag/label',
      table: { category: 'Props', defaultValue: { summary: 'false' } },
    },
    tagText: {
      control: 'text',
      description: 'Text content of the tag/label',
      table: { category: 'Props' },
    },
    tagWidth: {
      control: 'text',
      description: 'Width of the tag/label',
      table: { category: 'Props', defaultValue: { summary: '272px' } },
    },
    tagPadX: {
      control: 'text',
      description: 'Horizontal padding of the tag/label',
      table: { category: 'Props', defaultValue: { summary: '10px' } },
    },
    tagLineHeight: {
      control: 'text',
      description: 'Line height of the tag text',
      table: { category: 'Props', defaultValue: { summary: '25px' } },
    },
    tagTextFontSize: {
      control: 'text',
      description: 'Font size of the tag text',
      table: { category: 'Props', defaultValue: { summary: '20px' } },
    },
    tagTextFontWeight: {
      control: 'text',
      description: 'Font weight of the tag text',
      table: { category: 'Props', defaultValue: { summary: 'bold' } },
    },
    tagTextFontFamily: {
      control: 'text',
      description: 'Font family of the tag text',
      table: {
        category: 'Props',
        defaultValue: { summary: "'Helvetica', 'Arial', sans-serif" },
      },
    },
    tagTextColor: {
      control: 'color',
      description: 'Color of the tag text',
      table: { category: 'Props', defaultValue: { summary: 'black' } },
    },
    tagTextShadow: {
      control: 'text',
      description: 'Text shadow for the tag text',
      table: {
        category: 'Props',
        defaultValue: { summary: '0px 2px 5px #d0d0d0' },
      },
    },
    tagTextTransform: {
      control: 'text',
      description:
        'Text transformation (e.g., uppercase, lowercase) for the tag text',
      table: { category: 'Props', defaultValue: { summary: 'none' } },
    },
    tagTextAlign: {
      control: 'text',
      description: 'Text alignment within the tag',
      table: { category: 'Props', defaultValue: { summary: 'center' } },
    },
    tagTextDelay: {
      control: 'text',
      description: 'Fade-in delay for the tag text on hover',
      table: { category: 'Props', defaultValue: { summary: '0.1s' } },
    },
    isActive: {
      control: 'boolean',
      description: 'Whether the button is in the active state',
      table: { category: 'Props', defaultValue: { summary: 'false' } },
    },
  },
};

export default meta;

export const Default: StoryFn<IconButtonProps> = (args) => html`
  <icon-button
    .compHeight=${args.compHeight}
    .compWidth=${args.compWidth}
    .buttonSize=${args.buttonSize}
    .sizeBy=${args.sizeBy}
    .buttonBorderRadius=${args.buttonBorderRadius}
    .buttonColor=${args.buttonColor}
    .buttonHoverColor=${args.buttonHoverColor}
    .buttonActiveColor=${args.buttonActiveColor}
    .buttonShadow=${args.buttonShadow}
    .iconSize=${args.iconSize}
    .onClick=${args.onClick}
    .iconSrc=${args.iconSrc}
    .iconAlt=${args.iconAlt}
    .showTag=${args.showTag}
    .tagText=${args.tagText}
    .tagWidth=${args.tagWidth}
    .tagPadX=${args.tagPadX}
    .tagLineHeight=${args.tagLineHeight}
    .tagTextFontSize=${args.tagTextFontSize}
    .tagTextFontWeight=${args.tagTextFontWeight}
    .tagTextFontFamily=${args.tagTextFontFamily}
    .tagTextColor=${args.tagTextColor}
    .tagTextShadow=${args.tagTextShadow}
    .tagTextTransform=${args.tagTextTransform}
    .tagTextAlign=${args.tagTextAlign}
    .tagTextDelay=${args.tagTextDelay}
    .isActive=${args.isActive}
  ></icon-button>
`;

Default.args = {
  compHeight: '60px',
  compWidth: 'fit-content',
  buttonSize: '100%',
  sizeBy: 'height',
  buttonBorderRadius: '24px',
  buttonColor: '#eceff1',
  buttonHoverColor: '#b0bec5',
  buttonActiveColor: '#cfd8dc',
  buttonShadow: '0px 2px 5px #d0d0d0',
  iconSize: '70%',
  iconSrc: '/assets/file_copy-48px.svg',
  iconAlt: 'file icon',
  showTag: true,
  tagText: 'Import/Export',
  tagWidth: '272px',
  tagPadX: '10px',
  tagLineHeight: '25px',
  tagTextFontSize: '20px',
  tagTextFontWeight: 'bold',
  tagTextFontFamily: "'Helvetica', 'Arial', sans-serif",
  tagTextColor: 'black',
  tagTextShadow: '0px 2px 5px #d0d0d0',
  tagTextTransform: 'none',
  tagTextAlign: 'center',
  tagTextDelay: '0.1s',
  isActive: false,
};
