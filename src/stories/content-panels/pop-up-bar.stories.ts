import '../../components/content-panels/pop-up-bar';
import '../../components/buttons/icon-button';
import { html } from 'lit';
import type { Meta, StoryFn } from '@storybook/web-components';

type PopUpBarProps = {
  compHeight?: string;
  compWidth?: string;
  barHeight?: string;
  barWidth?: string;
  barColor?: string;
  butHeight?: string;
  butWidth?: string;
  butColor?: string;
  butHoverColor?: string;
  iconHeight?: string;
  iconWidth?: string;
  iconSrc?: string;
  iconAlt?: string;
  gapSize?: string;
};

const meta: Meta<PopUpBarProps> = {
  title: 'Components/Content Panels/Pop-Up Bar',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### \`<pop-up-bar>\`

A configurable button that reveals a horizontal bar of slot content (e.g., icons) when hovered.

#### CSS Custom Properties

| Variable                             | Description                        |
|-------------------------------------|------------------------------------|
| \`--pop-up-bar-comp-height\`        | Component container height         |
| \`--pop-up-bar-comp-width\`         | Component container width          |
| \`--pop-up-bar-height\`             | Pop-up bar height                  |
| \`--pop-up-bar-width\`              | Pop-up bar width                   |
| \`--pop-up-bar-color\`              | Pop-up bar background color        |
| \`--pop-up-bar-button-height\`      | Toggle button height               |
| \`--pop-up-bar-button-width\`       | Toggle button width                |
| \`--pop-up-bar-button-color\`       | Button background color            |
| \`--pop-up-bar-button-hover-color\` | Button background color on hover   |
| \`--pop-up-bar-icon-height\`        | Icon height                        |
| \`--pop-up-bar-icon-width\`         | Icon width                         |
| \`--pop-up-bar-gap\`                | Gap between bar and button         |

#### Shadow DOM Parts

| Part Name      | Element          | Description                       |
|----------------|------------------|---------------------------------|
| \`container\`   | \`<div id="container">\`  | Main wrapper container            |
| \`button\`      | \`<div id="display-button">\` | The toggle button                  |
| \`icon\`        | \`<img>\` inside button | The icon image inside the button  |
| \`arrow\`       | \`<span id="arrow-up">\` | The fallback arrow icon (if no image) |
| \`bar-container\` | \`<div id="bar-container">\` | Container wrapping the pop-up bar |
| \`bar\`        | \`<div id="bar">\`      | The pop-up bar that holds slotted content |
        `,
      },
    },
  },
  argTypes: {
    compHeight: {
      control: 'text',
      description: 'Height of the entire component container',
      table: { defaultValue: { summary: 'fit-content' }, category: 'Props' },
    },
    compWidth: {
      control: 'text',
      description: 'Width of the entire component container',
      table: { defaultValue: { summary: 'fit-content' }, category: 'Props' },
    },
    barHeight: {
      control: 'text',
      description: 'Height of the pop-up bar',
      table: { defaultValue: { summary: '30px' }, category: 'Props' },
    },
    barWidth: {
      control: 'text',
      description: 'Width of the pop-up bar',
      table: { defaultValue: { summary: '200px' }, category: 'Props' },
    },
    barColor: {
      control: 'color',
      description: 'Background color of the pop-up bar',
      table: { defaultValue: { summary: '#eceff1' }, category: 'Props' },
    },
    butHeight: {
      control: 'text',
      description: 'Height of the toggle button',
      table: { defaultValue: { summary: '30px' }, category: 'Props' },
    },
    butWidth: {
      control: 'text',
      description: 'Width of the toggle button',
      table: { defaultValue: { summary: '200px' }, category: 'Props' },
    },
    butColor: {
      control: 'color',
      description: 'Background color of the toggle button',
      table: { defaultValue: { summary: '#eceff1' }, category: 'Props' },
    },
    butHoverColor: {
      control: 'color',
      description: 'Background color on button hover',
      table: { defaultValue: { summary: '#cfd8dc' }, category: 'Props' },
    },
    iconHeight: {
      control: 'text',
      description: 'Height of the icon inside the button',
      table: { defaultValue: { summary: '70%' }, category: 'Props' },
    },
    iconWidth: {
      control: 'text',
      description: 'Width of the icon inside the button',
      table: { defaultValue: { summary: '70%' }, category: 'Props' },
    },
    iconSrc: {
      control: 'text',
      description: 'Source URL or path of the icon image',
      table: { category: 'Props' },
    },
    iconAlt: {
      control: 'text',
      description: 'Alternative text for the icon image',
      table: { category: 'Props' },
    },
    gapSize: {
      control: 'text',
      description: 'Gap between the toggle button and the bar',
      table: { defaultValue: { summary: '4px' }, category: 'Props' },
    },
  },
};

export default meta;

export const Default: StoryFn<PopUpBarProps> = (args) => html`
  <pop-up-bar
    .compHeight=${args.compHeight}
    .compWidth=${args.compWidth}
    .barHeight=${args.barHeight}
    .barWidth=${args.barWidth}
    .barColor=${args.barColor}
    .butHeight=${args.butHeight}
    .butWidth=${args.butWidth}
    .butColor=${args.butColor}
    .butHoverColor=${args.butHoverColor}
    .iconHeight=${args.iconHeight}
    .iconWidth=${args.iconWidth}
    .iconSrc=${args.iconSrc}
    .iconAlt=${args.iconAlt}
    .gapSize=${args.gapSize}
  >
    <icon-button buttonSize="30px"></icon-button>
    <icon-button buttonSize="30px"></icon-button>
    <icon-button buttonSize="30px"></icon-button>
  </pop-up-bar>
`;

Default.args = {
  compHeight: '60px',
  compWidth: '100%',
  barHeight: '40px',
  barWidth: '100%',
  barColor: '#cfd8dc',
  butHeight: '40px',
  butWidth: '100%',
  butColor: '#eceff1',
  butHoverColor: '#b0bec5',
  iconHeight: '80%',
  iconWidth: '80%',
  iconAlt: 'Arrow up',
  gapSize: '6px',
};
