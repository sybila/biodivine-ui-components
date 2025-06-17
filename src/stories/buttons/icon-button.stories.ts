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
};

const meta: Meta<IconButtonProps> = {
  title: 'Components/Buttons/Icon Button',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### \`<icon-button>\`

A square button web component with an optional icon.

#### CSS Custom Properties

| Variable                          | Description                                  |
|----------------------------------|----------------------------------------------|
| \`--icon-button-comp-height\`      | Height of the component container            |
| \`--icon-button-comp-width\`       | Width of the component container             |
| \`--icon-button-size\`             | Size applied based on \`sizeBy\` prop         |
| \`--icon-button-bg-color\`         | Background color of the button               |
| \`--icon-button-hover-bg-color\`   | Background color on hover                    |
| \`--icon-button-icon-size\`        | Size of the icon image inside the button    |

#### Shadow DOM Parts

This component exposes the following Shadow DOM parts for external styling (use predefined props instead of styling parts):

| Part Name | Element               | Description                     |
|-----------|-----------------------|---------------------------------|
| \`button\` | Inner \`<button>\`       | The clickable button element     |
| \`icon\`   | \`<img>\` inside button | The icon image inside the button |
        `,
      },
    },
  },

  argTypes: {
    compHeight: {
      control: 'text',
      name: 'compHeight',
      description: 'Height of the component container',
      table: {
        defaultValue: { summary: 'fit-content' },
        category: 'Props',
      },
    },
    compWidth: {
      control: 'text',
      name: 'compWidth',
      description: 'Width of the component container',
      table: {
        defaultValue: { summary: 'fit-content' },
        category: 'Props',
      },
    },
    buttonSize: {
      control: 'text',
      name: 'buttonSize',
      description: 'Size of the button (applied to height or width)',
      table: {
        defaultValue: { summary: '30px' },
        category: 'Props',
      },
    },
    sizeBy: {
      control: 'radio',
      options: ['height', 'width'],
      name: 'sizeBy',
      description:
        'Controls whether buttonSize is applied to height or width',
      table: {
        defaultValue: { summary: 'height' },
        category: 'Props',
      },
    },
    buttonColor: {
      control: 'color',
      name: 'buttonColor',
      description: 'Background color of the button',
      table: {
        defaultValue: { summary: '#eceff1' },
        category: 'Props',
      },
    },
    buttonHoverColor: {
      control: 'color',
      name: 'buttonHoverColor',
      description: 'Background color on hover',
      table: {
        defaultValue: { summary: '#cfd8dc' },
        category: 'Props',
      },
    },
    iconSrc: {
      control: 'text',
      name: 'iconSrc',
      description: 'Path to the icon image (SVG or PNG recommended)',
      table: {
        defaultValue: { summary: '' },
        category: 'Props',
      },
    },
    iconAlt: {
      control: 'text',
      name: 'iconAlt',
      description: 'Alternative text for the icon image',
      table: {
        defaultValue: { summary: 'icon' },
        category: 'Props',
      },
    },
    iconSize: {
      control: 'text',
      name: 'iconSize',
      description: 'Size of the icon image inside the button',
      table: {
        defaultValue: { summary: '70%' },
        category: 'Props',
      },
    },
    onClick: {
      action: 'clicked',
      name: 'onClick',
      description: 'Event fired when the button is clicked',
      table: {
        type: { summary: '() => void' },
        defaultValue: { summary: 'undefined' },
        category: 'Events',
      },
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
};
