import { html } from 'lit';
import type { Meta, StoryFn } from '@storybook/web-components';
import '../../components/content-panels/extendable-content';

type ExtendableContentProps = {
  compHeight?: string;
  compWidth?: string;

  contHeight?: string;
  contWidth?: string;
  contMaxHeight?: string;
  contMaxWidth?: string;
  contOverflowX?: string;
  contOverflowY?: string;
  contBorder?: string;
  contBorderRadius?: string;
  contColor?: string;
  contShadow?: string;
  contPadding?: string;

  contHoverBorder?: string;
  contHoverColor?: string;

  contActiveBorder?: string;
  contActiveColor?: string;

  contExtendedHeight?: string;
  contExtendedMaxHeight?: string;

  topBottomGap?: string;

  topHeight?: string;
  topWidth?: string;
  topMaxHeight?: string;
  topMaxWidth?: string;
  topJustifyC?: string;
  topAlignI?: string;
  topOverflowX?: string;
  topOverflowY?: string;

  extended?: boolean;
  active?: boolean;
};

const meta: Meta<ExtendableContentProps> = {
  title: 'Components/Content Panels/Extendable Content',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### \`<extendable-content>\`

A flexible container component that can toggle between collapsed and extended states.

#### CSS Custom Properties

| Variable                                 | Description                                   |
|------------------------------------------|-----------------------------------------------|
| \`--extendable-content-comp-height\`      | Height of the outer component                  |
| \`--extendable-content-comp-width\`       | Width of the outer component                   |
| \`--extendable-content-cont-height\`      | Height of the main container                    |
| \`--extendable-content-cont-width\`       | Width of the main container                     |
| \`--extendable-content-cont-max-height\`  | Max height of the main container                |
| \`--extendable-content-cont-max-width\`   | Max width of the main container                 |
| \`--extendable-content-cont-overflow-x\`  | Horizontal overflow behavior                     |
| \`--extendable-content-cont-overflow-y\`  | Vertical overflow behavior                       |
| \`--extendable-content-cont-border\`      | Border styling of the container                  |
| \`--extendable-content-cont-border-radius\` | Border radius of the container                   |
| \`--extendable-content-cont-bg-color\`    | Background color of the container                |
| \`--extendable-content-cont-shadow\`      | Box shadow of the container                       |
| \`--extendable-content-cont-padding\`     | Padding inside the container                      |
| \`--extendable-content-cont-hover-border\`| Border on hover                                  |
| \`--extendable-content-hover-bg-color\`   | Background color on hover                         |
| \`--extendable-content-active-border\`    | Border when active                                |
| \`--extendable-content-active-bg-color\`  | Background color when active                       |
| \`--extendable-content-cont-extended-height\` | Height when extended                           |
| \`--extendable-content-cont-extended-max-height\` | Max height when extended                  |
| ...                                      | (More variables available, see component CSS)   |

#### Shadow DOM Parts

| Part Name       | Element           | Description                        |
|-----------------|-------------------|----------------------------------|
| \`container\`     | Outer container div | Main wrapper                     |
| \`top-container\` | Top flex container  | Holds top content and toggle button |
| \`top-content\`   | Slot               | Slot for top-level content       |
| \`extended-content\` | Slot             | Slot for extended content (shown when expanded) |
| \`extend-button\` | Button             | Toggle expand/collapse button    |
| \`extend-icon\`   | Img inside button   | Icon that rotates on toggle      |
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
    contHeight: {
      control: 'text',
      description: 'Height of the main container',
      table: { defaultValue: { summary: '30px' }, category: 'Props' },
    },
    contWidth: {
      control: 'text',
      description: 'Width of the main container',
      table: { defaultValue: { summary: '200px' }, category: 'Props' },
    },
    contMaxHeight: {
      control: 'text',
      description: 'Max height of the main container',
      table: { defaultValue: { summary: '30px' }, category: 'Props' },
    },
    contMaxWidth: {
      control: 'text',
      description: 'Max width of the main container',
      table: { defaultValue: { summary: '200px' }, category: 'Props' },
    },
    contBorder: {
      control: 'text',
      description: 'Border styling of the container',
      table: { defaultValue: { summary: '2px #fafafa solid' }, category: 'Props' },
    },
    contBorderRadius: {
      control: 'text',
      description: 'Border radius of the container',
      table: { defaultValue: { summary: '8px' }, category: 'Props' },
    },
    contColor: {
      control: 'color',
      description: 'Background color of the container',
      table: { defaultValue: { summary: '#f5f5f5' }, category: 'Props' },
    },
    contShadow: {
      control: 'text',
      description: 'Box shadow of the container',
      table: { defaultValue: { summary: '0px 2px 5px #d0d0d0' }, category: 'Props' },
    },
    contPadding: {
      control: 'text',
      description: 'Padding inside the container',
      table: { defaultValue: { summary: '8px' }, category: 'Props' },
    },
    contHoverBorder: {
      control: 'text',
      description: 'Border style on hover',
      table: { defaultValue: { summary: '2px #6a7ea5 dashed' }, category: 'Props' },
    },
    contHoverColor: {
      control: 'color',
      description: 'Background color on hover',
      table: { defaultValue: { summary: '#f5f5f5' }, category: 'Props' },
    },
    contActiveBorder: {
      control: 'text',
      description: 'Border style when active',
      table: { defaultValue: { summary: '2px #6a7ea5 solid' }, category: 'Props' },
    },
    contActiveColor: {
      control: 'color',
      description: 'Background color when active',
      table: { defaultValue: { summary: '#add8e6' }, category: 'Props' },
    },
    contExtendedHeight: {
      control: 'text',
      description: 'Height when extended',
      table: { defaultValue: { summary: '200px' }, category: 'Props' },
    },
    contExtendedMaxHeight: {
      control: 'text',
      description: 'Max height when extended',
      table: { defaultValue: { summary: '200px' }, category: 'Props' },
    },
    topBottomGap: {
      control: 'text',
      description: 'Gap between top and bottom sections',
      table: { defaultValue: { summary: '0' }, category: 'Props' },
    },
    extended: {
      control: 'boolean',
      description: 'Toggle extended state',
      table: { defaultValue: { summary: 'false' }, category: 'Props' },
    },
    active: {
      control: 'boolean',
      description: 'Toggle active state',
      table: { defaultValue: { summary: 'false' }, category: 'Props' },
    },
  },
};

export default meta;

export const Default: StoryFn<ExtendableContentProps> = (args) => html`
  <extendable-content
    .compHeight=${args.compHeight}
    .compWidth=${args.compWidth}
    .contHeight=${args.contHeight}
    .contWidth=${args.contWidth}
    .contMaxHeight=${args.contMaxHeight}
    .contMaxWidth=${args.contMaxWidth}
    .contBorder=${args.contBorder}
    .contBorderRadius=${args.contBorderRadius}
    .contColor=${args.contColor}
    .contShadow=${args.contShadow}
    .contPadding=${args.contPadding}
    .contHoverBorder=${args.contHoverBorder}
    .contHoverColor=${args.contHoverColor}
    .contActiveBorder=${args.contActiveBorder}
    .contActiveColor=${args.contActiveColor}
    .contExtendedHeight=${args.contExtendedHeight}
    .contExtendedMaxHeight=${args.contExtendedMaxHeight}
    .topBottomGap=${args.topBottomGap}
    .extended=${args.extended}
    .active=${args.active}
  >
    <div slot="top-content">Top Content Area</div>
    ${
      args.extended
        ? html`<div slot="extended-content">Extended Content Area</div>`
        : ''
    }
  </extendable-content>
`;

Default.args = {
  compHeight: 'fit-content',
  compWidth: '300px',
  contHeight: '40px',
  contWidth: '280px',
  contMaxHeight: '40px',
  contMaxWidth: '280px',
  contBorder: '2px solid #fafafa',
  contBorderRadius: '8px',
  contColor: '#f5f5f5',
  contShadow: '0 2px 5px #d0d0d0',
  contPadding: '8px',
  contHoverBorder: '2px dashed #6a7ea5',
  contHoverColor: '#f5f5f5',
  contActiveBorder: '2px solid #6a7ea5',
  contActiveColor: '#add8e6',
  contExtendedHeight: '150px',
  contExtendedMaxHeight: '150px',
  topBottomGap: '4px',
  extended: false,
  active: false,
};
