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

  topContentHeight?: string;
  topContentWidth?: string;
  topContentMaxHeight?: string;
  topContentMaxWidth?: string;
  topContentJustifyC?: string;
  topContentAlignI?: string;
  topContentOverflowX?: string;
  topContentOverflowY?: string;

  extendContentHeight?: string;
  extendContentWidth?: string;
  extendContentMaxHeight?: string;
  extendContentMaxWidth?: string;
  extendContentJustifyC?: string;
  extendContentAlignI?: string;
  extendContentOverflowX?: string;
  extendContentOverflowY?: string;

  buttonHeight?: string;
  buttonWidth?: string;
  buttonMaxHeight?: string;
  buttonMaxWidth?: string;
  buttonBorderRadius?: string;
  buttonColor?: string;
  buttonHoverColor?: string;
  buttonIconSrc?: string;
  buttonIconHeight?: string;
  buttonIconWidth?: string;

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

Container component that can toggle between collapsed and extended states.

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
| \`--extendable-content-top-bottom-gap\`   | Gap between top and bottom sections              |
| \`--extendable-content-top-height\`       | Height of the top container                      |
| \`--extendable-content-top-width\`        | Width of the top container                       |
| \`--extendable-content-top-max-height\`   | Max height of the top container                  |
| \`--extendable-content-top-max-width\`    | Max width of the top container                   |
| \`--extendable-content-top-justify-content\` | Justify content of the top container         |
| \`--extendable-content-top-align-items\`  | Align items of the top container                 |
| \`--extendable-content-top-overflow-x\`   | Overflow-x of the top container                  |
| \`--extendable-content-top-overflow-y\`   | Overflow-y of the top container                  |
| \`--extendable-content-top-content-height\` | Height of the top content                     |
| \`--extendable-content-top-content-width\` | Width of the top content                       |
| \`--extendable-content-top-content-max-height\` | Max height of the top content             |
| \`--extendable-content-top-content-max-width\` | Max width of the top content               |
| \`--extendable-content-top-content-justify-content\` | Justify content of the top content      |
| \`--extendable-content-top-content-align-items\` | Align items of the top content            |
| \`--extendable-content-top-content-overflow-x\` | Overflow-x of the top content             |
| \`--extendable-content-top-content-overflow-y\` | Overflow-y of the top content             |
| \`--extendable-content-extended-content-height\` | Height of the extended content           |
| \`--extendable-content-extended-content-width\` | Width of the extended content             |
| \`--extendable-content-extended-content-max-height\` | Max height of the extended content   |
| \`--extendable-content-extended-content-max-width\` | Max width of the extended content     |
| \`--extendable-content-extended-content-justify-content\` | Justify content of the extended content |
| \`--extendable-content-extended-content-align-items\` | Align items of the extended content     |
| \`--extendable-content-extended-content-overflow-x\` | Overflow-x of the extended content      |
| \`--extendable-content-extended-content-overflow-y\` | Overflow-y of the extended content      |
| \`--extendable-content-button-height\`    | Height of the extend button                   |
| \`--extendable-content-button-width\`     | Width of the extend button                    |
| \`--extendable-content-button-max-height\`| Max height of the extend button               |
| \`--extendable-content-button-max-width\` | Max width of the extend button                |
| \`--extendable-content-button-border-radius\` | Border radius of the extend button        |
| \`--extendable-content-button-bg-color\`  | Background color of the extend button         |
| \`--extendable-content-button-hover-bg-color\` | Hover background color of the button     |
| \`--extendable-content-button-icon-height\` | Height of the button icon                 |
| \`--extendable-content-button-icon-width\` | Width of the button icon                  |
        
#### Shadow DOM Parts

| Part Name         | Description                                 |
|-------------------|---------------------------------------------|
| \`container\`         | The main container wrapping all content.      |
| \`top-container\`     | The top section container (button + content). |
| \`top-content\`       | The slot for the top content area.            |
| \`extend-button\`     | The button used to toggle extension.          |
| \`extended-content\`  | The slot for the extended content area.       |
`,
      },
    },
  },
  argTypes: {
    compHeight: {
      control: 'text',
      description: 'Height of the outer component container',
      table: { defaultValue: { summary: 'fit-content' }, category: 'Layout' },
    },
    compWidth: {
      control: 'text',
      description: 'Width of the outer component container',
      table: { defaultValue: { summary: '500px' }, category: 'Layout' },
    },
    contHeight: {
      control: 'text',
      description: 'Height of the main container',
      table: {
        defaultValue: { summary: 'fit-content' },
        category: 'Container',
      },
    },
    contWidth: {
      control: 'text',
      description: 'Width of the main container',
      table: { defaultValue: { summary: '100%' }, category: 'Container' },
    },
    contMaxHeight: {
      control: 'text',
      description: 'Max height of the main container',
      table: {
        defaultValue: { summary: 'fit-content' },
        category: 'Container',
      },
    },
    contMaxWidth: {
      control: 'text',
      description: 'Max width of the main container',
      table: { defaultValue: { summary: '100%' }, category: 'Container' },
    },
    contOverflowX: {
      control: 'text',
      description: 'Horizontal overflow of the main container',
      table: { defaultValue: { summary: 'hidden' }, category: 'Container' },
    },
    contOverflowY: {
      control: 'text',
      description: 'Vertical overflow of the main container',
      table: { defaultValue: { summary: 'hidden' }, category: 'Container' },
    },
    contBorder: {
      control: 'text',
      description: 'Border styling of the container',
      table: {
        defaultValue: { summary: '2px #fafafa solid' },
        category: 'Container',
      },
    },
    contBorderRadius: {
      control: 'text',
      description: 'Border radius of the container',
      table: { defaultValue: { summary: '8px' }, category: 'Container' },
    },
    contColor: {
      control: 'color',
      description: 'Background color of the container',
      table: { defaultValue: { summary: '#f5f5f5' }, category: 'Container' },
    },
    contShadow: {
      control: 'text',
      description: 'Box shadow of the container',
      table: {
        defaultValue: { summary: '0px 2px 5px #d0d0d0' },
        category: 'Container',
      },
    },
    contPadding: {
      control: 'text',
      description: 'Padding inside the container',
      table: { defaultValue: { summary: '5px' }, category: 'Container' },
    },
    contHoverBorder: {
      control: 'text',
      description: 'Border style on hover',
      table: {
        defaultValue: { summary: '2px #6a7ea5 dashed' },
        category: 'Container: Hover',
      },
    },
    contHoverColor: {
      control: 'color',
      description: 'Background color on hover',
      table: {
        defaultValue: { summary: '#f5f5f5' },
        category: 'Container: Hover',
      },
    },
    contActiveBorder: {
      control: 'text',
      description: 'Border style when active',
      table: {
        defaultValue: { summary: '2px #6a7ea5 solid' },
        category: 'Container: Active',
      },
    },
    contActiveColor: {
      control: 'color',
      description: 'Background color when active',
      table: {
        defaultValue: { summary: '#add8e6' },
        category: 'Container: Active',
      },
    },
    contExtendedHeight: {
      control: 'text',
      description: 'Height when extended',
      table: {
        defaultValue: { summary: '200px' },
        category: 'Container: Extended',
      },
    },
    contExtendedMaxHeight: {
      control: 'text',
      description: 'Max height when extended',
      table: {
        defaultValue: { summary: '200px' },
        category: 'Container: Extended',
      },
    },
    topBottomGap: {
      control: 'text',
      description: 'Gap between top and bottom sections',
      table: { defaultValue: { summary: '5px' }, category: 'Top Section' },
    },
    topHeight: {
      control: 'text',
      description: 'Height of the top container',
      table: { defaultValue: { summary: '25px' }, category: 'Top Section' },
    },
    topWidth: {
      control: 'text',
      description: 'Width of the top container',
      table: { defaultValue: { summary: '100%' }, category: 'Top Section' },
    },
    topMaxHeight: {
      control: 'text',
      description: 'Max height of the top container',
      table: { defaultValue: { summary: '25px' }, category: 'Top Section' },
    },
    topMaxWidth: {
      control: 'text',
      description: 'Max width of the top container',
      table: { defaultValue: { summary: '100%' }, category: 'Top Section' },
    },
    topJustifyC: {
      control: 'text',
      description: 'Justify content of the top container',
      table: {
        defaultValue: { summary: 'space-between' },
        category: 'Top Section',
      },
    },
    topAlignI: {
      control: 'text',
      description: 'Align items of the top container',
      table: { defaultValue: { summary: 'center' }, category: 'Top Section' },
    },
    topOverflowX: {
      control: 'text',
      description: 'Overflow-x of the top container',
      table: { defaultValue: { summary: 'hidden' }, category: 'Top Section' },
    },
    topOverflowY: {
      control: 'text',
      description: 'Overflow-y of the top container',
      table: { defaultValue: { summary: 'hidden' }, category: 'Top Section' },
    },
    topContentHeight: {
      control: 'text',
      description: 'Height of the top content',
      table: { defaultValue: { summary: '100%' }, category: 'Top Content' },
    },
    topContentWidth: {
      control: 'text',
      description: 'Width of the top content',
      table: {
        defaultValue: { summary: 'calc(100% - 30px)' },
        category: 'Top Content',
      },
    },
    topContentMaxHeight: {
      control: 'text',
      description: 'Max height of the top content',
      table: { defaultValue: { summary: '100%' }, category: 'Top Content' },
    },
    topContentMaxWidth: {
      control: 'text',
      description: 'Max width of the top content',
      table: {
        defaultValue: { summary: 'calc(100% - 30px)' },
        category: 'Top Content',
      },
    },
    topContentJustifyC: {
      control: 'text',
      description: 'Justify content of the top content',
      table: {
        defaultValue: { summary: 'space-between' },
        category: 'Top Content',
      },
    },
    topContentAlignI: {
      control: 'text',
      description: 'Align items of the top content',
      table: { defaultValue: { summary: 'center' }, category: 'Top Content' },
    },
    topContentOverflowX: {
      control: 'text',
      description: 'Overflow-x of the top content',
      table: { defaultValue: { summary: 'hidden' }, category: 'Top Content' },
    },
    topContentOverflowY: {
      control: 'text',
      description: 'Overflow-y of the top content',
      table: { defaultValue: { summary: 'hidden' }, category: 'Top Content' },
    },
    extendContentHeight: {
      control: 'text',
      description: 'Height of the extended content',
      table: {
        defaultValue: { summary: 'calc(100% - 30px)' },
        category: 'Extended Content',
      },
    },
    extendContentWidth: {
      control: 'text',
      description: 'Width of the extended content',
      table: {
        defaultValue: { summary: '100%' },
        category: 'Extended Content',
      },
    },
    extendContentMaxHeight: {
      control: 'text',
      description: 'Max height of the extended content',
      table: {
        defaultValue: { summary: 'calc(100% - 30px)' },
        category: 'Extended Content',
      },
    },
    extendContentMaxWidth: {
      control: 'text',
      description: 'Max width of the extended content',
      table: {
        defaultValue: { summary: '100%' },
        category: 'Extended Content',
      },
    },
    extendContentJustifyC: {
      control: 'text',
      description: 'Justify content of the extended content',
      table: {
        defaultValue: { summary: 'start' },
        category: 'Extended Content',
      },
    },
    extendContentAlignI: {
      control: 'text',
      description: 'Align items of the extended content',
      table: {
        defaultValue: { summary: 'center' },
        category: 'Extended Content',
      },
    },
    extendContentOverflowX: {
      control: 'text',
      description: 'Overflow-x of the extended content',
      table: {
        defaultValue: { summary: 'hidden' },
        category: 'Extended Content',
      },
    },
    extendContentOverflowY: {
      control: 'text',
      description: 'Overflow-y of the extended content',
      table: {
        defaultValue: { summary: 'hidden' },
        category: 'Extended Content',
      },
    },
    buttonHeight: {
      control: 'text',
      description: 'Height of the extend button',
      table: { defaultValue: { summary: '24px' }, category: 'Button' },
    },
    buttonWidth: {
      control: 'text',
      description: 'Width of the extend button',
      table: { defaultValue: { summary: '24px' }, category: 'Button' },
    },
    buttonMaxHeight: {
      control: 'text',
      description: 'Max height of the extend button',
      table: { defaultValue: { summary: '24px' }, category: 'Button' },
    },
    buttonMaxWidth: {
      control: 'text',
      description: 'Max width of the extend button',
      table: { defaultValue: { summary: '24px' }, category: 'Button' },
    },
    buttonBorderRadius: {
      control: 'text',
      description: 'Border radius of the extend button',
      table: { defaultValue: { summary: '24px' }, category: 'Button' },
    },
    buttonColor: {
      control: 'color',
      description: 'Background color of the extend button',
      table: { defaultValue: { summary: '#eceff1' }, category: 'Button' },
    },
    buttonHoverColor: {
      control: 'color',
      description: 'Hover background color of the extend button',
      table: { defaultValue: { summary: '#b0bec5' }, category: 'Button' },
    },
    buttonIconSrc: {
      control: 'text',
      description: 'Source URL for the button icon image',
      table: { defaultValue: { summary: undefined }, category: 'Button' },
    },
    buttonIconHeight: {
      control: 'text',
      description: 'Height of the button icon',
      table: { defaultValue: { summary: '12px' }, category: 'Button' },
    },
    buttonIconWidth: {
      control: 'text',
      description: 'Width of the button icon',
      table: { defaultValue: { summary: '12px' }, category: 'Button' },
    },
    extended: {
      control: 'boolean',
      description: 'Toggle extended state',
      table: { defaultValue: { summary: 'false' }, category: 'State' },
    },
    active: {
      control: 'boolean',
      description: 'Toggle active state',
      table: { defaultValue: { summary: 'false' }, category: 'State' },
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
    .contOverflowX=${args.contOverflowX}
    .contOverflowY=${args.contOverflowY}
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
    .topHeight=${args.topHeight}
    .topWidth=${args.topWidth}
    .topMaxHeight=${args.topMaxHeight}
    .topMaxWidth=${args.topMaxWidth}
    .topJustifyC=${args.topJustifyC}
    .topAlignI=${args.topAlignI}
    .topOverflowX=${args.topOverflowX}
    .topOverflowY=${args.topOverflowY}
    .topContentHeight=${args.topContentHeight}
    .topContentWidth=${args.topContentWidth}
    .topContentMaxHeight=${args.topContentMaxHeight}
    .topContentMaxWidth=${args.topContentMaxWidth}
    .topContentJustifyC=${args.topContentJustifyC}
    .topContentAlignI=${args.topContentAlignI}
    .topContentOverflowX=${args.topContentOverflowX}
    .topContentOverflowY=${args.topContentOverflowY}
    .extendContentHeight=${args.extendContentHeight}
    .extendContentWidth=${args.extendContentWidth}
    .extendContentMaxHeight=${args.extendContentMaxHeight}
    .extendContentMaxWidth=${args.extendContentMaxWidth}
    .extendContentJustifyC=${args.extendContentJustifyC}
    .extendContentAlignI=${args.extendContentAlignI}
    .extendContentOverflowX=${args.extendContentOverflowX}
    .extendContentOverflowY=${args.extendContentOverflowY}
    .buttonHeight=${args.buttonHeight}
    .buttonWidth=${args.buttonWidth}
    .buttonMaxHeight=${args.buttonMaxHeight}
    .buttonMaxWidth=${args.buttonMaxWidth}
    .buttonBorderRadius=${args.buttonBorderRadius}
    .buttonColor=${args.buttonColor}
    .buttonHoverColor=${args.buttonHoverColor}
    .buttonIconSrc=${args.buttonIconSrc}
    .buttonIconHeight=${args.buttonIconHeight}
    .buttonIconWidth=${args.buttonIconWidth}
    .extended=${args.extended}
    .active=${args.active}
  >
    <div slot="top-content">Top Content Area</div>
    ${args.extended
      ? html`<div slot="extended-content">Extended Content Area</div>`
      : ''}
  </extendable-content>
`;

Default.args = {
  compHeight: 'fit-content',
  compWidth: '500px',
  contHeight: 'fit-content',
  contWidth: '100%',
  contMaxHeight: 'fit-content',
  contMaxWidth: '100%',
  contOverflowX: 'hidden',
  contOverflowY: 'hidden',
  contBorder: '2px #fafafa solid',
  contBorderRadius: '8px',
  contColor: '#f5f5f5',
  contShadow: '0px 2px 5px #d0d0d0',
  contPadding: '5px',
  contHoverBorder: '2px #6a7ea5 dashed',
  contHoverColor: '#f5f5f5',
  contActiveBorder: '2px #6a7ea5 solid',
  contActiveColor: '#add8e6',
  contExtendedHeight: '200px',
  contExtendedMaxHeight: '200px',
  topBottomGap: '5px',
  topHeight: '25px',
  topWidth: '100%',
  topMaxHeight: '25px',
  topMaxWidth: '100%',
  topJustifyC: 'space-between',
  topAlignI: 'center',
  topOverflowX: 'hidden',
  topOverflowY: 'hidden',
  topContentHeight: '100%',
  topContentWidth: 'calc(100% - 30px)',
  topContentMaxHeight: '100%',
  topContentMaxWidth: 'calc(100% - 30px)',
  topContentJustifyC: 'space-between',
  topContentAlignI: 'center',
  topContentOverflowX: 'hidden',
  topContentOverflowY: 'hidden',
  extendContentHeight: 'calc(100% - 30px)',
  extendContentWidth: '100%',
  extendContentMaxHeight: 'calc(100% - 30px)',
  extendContentMaxWidth: '100%',
  extendContentJustifyC: 'start',
  extendContentAlignI: 'center',
  extendContentOverflowX: 'hidden',
  extendContentOverflowY: 'hidden',
  buttonHeight: '24px',
  buttonWidth: '24px',
  buttonMaxHeight: '24px',
  buttonMaxWidth: '24px',
  buttonBorderRadius: '24px',
  buttonColor: '#eceff1',
  buttonHoverColor: '#b0bec5',
  buttonIconSrc: undefined,
  buttonIconHeight: '12px',
  buttonIconWidth: '12px',
  extended: false,
  active: false,
};
