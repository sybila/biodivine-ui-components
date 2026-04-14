import { html } from 'lit';
import type { Meta, StoryFn } from '@storybook/web-components-vite';
import '../../components/content-panels/extendable-content';

type ExtendableContentProps = {
  contWidth?: string;
  contBorder?: string;
  contBorderRadius?: string;
  contColor?: string;
  contShadow?: string;
  contPadding?: string;

  contHoverBorder?: string;
  contHoverColor?: string;

  contActiveBorder?: string;
  contActiveColor?: string;

  topBottomGap?: string;

  topHeight?: string;
  topWidth?: string;

  topContentMinHeight?: string;
  topContentMinWidth?: string;
  topContentMaxHeight?: string;
  topContentMaxWidth?: string;
  topContentJustifyC?: string;
  topContentAlignI?: string;
  topContentOverflowX?: string;
  topContentOverflowY?: string;

  extendContentMinHeight?: string;
  extendContentMinWidth?: string;
  extendContentMaxHeight?: string;
  extendContentMaxWidth?: string;
  extendContentJustifyC?: string;
  extendContentAlignI?: string;
  extendContentOverflowX?: string;
  extendContentOverflowY?: string;

  buttonHeight?: string;
  buttonWidth?: string;
  buttonBorderRadius?: string;
  buttonColor?: string;
  buttonHoverColor?: string;
  buttonIconSrc?: string;
  buttonIconHeight?: string;
  buttonIconWidth?: string;

  extended?: boolean;
  active?: boolean;
  hover?: boolean;
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
| \`--extendable-content-cont-width\`       | Width of the host and container               |
| \`--extendable-content-cont-border\`      | Border of the container                       |
| \`--extendable-content-cont-border-radius\` | Border radius of the container              |
| \`--extendable-content-cont-bg-color\`    | Background color of the container             |
| \`--extendable-content-cont-shadow\`      | Box shadow of the container                   |
| \`--extendable-content-cont-padding\`     | Padding inside the container                  |
| \`--extendable-content-cont-hover-border\`| Border while hovered                          |
| \`--extendable-content-hover-bg-color\`   | Background color while hovered                |
| \`--extendable-content-active-border\`    | Border while active                           |
| \`--extendable-content-active-bg-color\`  | Background color while active                 |
| \`--extendable-content-top-bottom-gap\`   | Gap between top container and extended content         |
| \`--extendable-content-top-height\`       | Height of top container                       |
| \`--extendable-content-top-width\`        | Width of top container                        |
| \`--extendable-content-top-content-min-height\` | Min height of top-content slot         |
| \`--extendable-content-top-content-min-width\` | Min width of top-content slot           |
| \`--extendable-content-top-content-max-height\` | Max height of top-content slot         |
| \`--extendable-content-top-content-max-width\` | Max width of top-content slot           |
| \`--extendable-content-top-content-justify-content\` | Justify content for top-content slot |
| \`--extendable-content-top-content-align-items\` | Align items for top-content slot       |
| \`--extendable-content-top-content-overflow-x\` | Horizontal overflow of top-content slot |
| \`--extendable-content-top-content-overflow-y\` | Vertical overflow of top-content slot   |
| \`--extendable-content-extended-content-min-height\` | Min height of extended-content slot |
| \`--extendable-content-extended-content-min-width\` | Min width of extended-content slot   |
| \`--extendable-content-extended-content-max-height\` | Max height of extended-content slot |
| \`--extendable-content-extended-content-max-width\` | Max width of extended-content slot   |
| \`--extendable-content-extended-content-justify-content\` | Justify content for extended-content slot |
| \`--extendable-content-extended-content-align-items\` | Align items for extended-content slot |
| \`--extendable-content-extended-content-overflow-x\` | Horizontal overflow of extended-content slot |
| \`--extendable-content-extended-content-overflow-y\` | Vertical overflow of extended-content slot |
| \`--extendable-content-button-height\`    | Height of extend button                       |
| \`--extendable-content-button-width\`     | Width of extend button                        |
| \`--extendable-content-button-border-radius\` | Border radius of extend button            |
| \`--extendable-content-button-bg-color\`  | Background color of extend button             |
| \`--extendable-content-button-hover-bg-color\` | Hover background of extend button       |
| \`--extendable-content-button-icon-height\` | Height of button icon                       |
| \`--extendable-content-button-icon-width\` | Width of button icon                        |
        
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
    contWidth: {
      control: 'text',
      description: 'Width of the main container',
      table: { defaultValue: { summary: '500px' }, category: 'Container' },
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
    topBottomGap: {
      control: 'text',
      description: 'Gap between top container and extended content',
      table: { defaultValue: { summary: '5px' }, category: 'Top Container' },
    },
    topHeight: {
      control: 'text',
      description: 'Height of the top container',
      table: { defaultValue: { summary: '25px' }, category: 'Top Container' },
    },
    topWidth: {
      control: 'text',
      description: 'Width of the top container',
      table: { defaultValue: { summary: '100%' }, category: 'Top Container' },
    },
    topContentMinHeight: {
      control: 'text',
      description: 'Min height of the top content',
      table: { defaultValue: { summary: '100%' }, category: 'Top Content' },
    },
    topContentMinWidth: {
      control: 'text',
      description: 'Min width of the top content',
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
    extendContentMinHeight: {
      control: 'text',
      description: 'Min height of the extended content',
      table: {
        defaultValue: { summary: '0px' },
        category: 'Extended Content',
      },
    },
    extendContentMinWidth: {
      control: 'text',
      description: 'Min width of the extended content',
      table: {
        defaultValue: { summary: '100%' },
        category: 'Extended Content',
      },
    },
    extendContentMaxHeight: {
      control: 'text',
      description: 'Max height of the extended content',
      table: {
        defaultValue: { summary: 'fit-content' },
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
    hover: {
      control: 'boolean',
      description: 'Toggle hover style class',
      table: { defaultValue: { summary: 'false' }, category: 'State' },
    },
  },
};

export default meta;

export const Default: StoryFn<ExtendableContentProps> = (args) => html`
  <extendable-content
    .contWidth=${args.contWidth}
    .contBorder=${args.contBorder}
    .contBorderRadius=${args.contBorderRadius}
    .contColor=${args.contColor}
    .contShadow=${args.contShadow}
    .contPadding=${args.contPadding}
    .contHoverBorder=${args.contHoverBorder}
    .contHoverColor=${args.contHoverColor}
    .contActiveBorder=${args.contActiveBorder}
    .contActiveColor=${args.contActiveColor}
    .topBottomGap=${args.topBottomGap}
    .topHeight=${args.topHeight}
    .topWidth=${args.topWidth}
    .topContentMinHeight=${args.topContentMinHeight}
    .topContentMinWidth=${args.topContentMinWidth}
    .topContentMaxHeight=${args.topContentMaxHeight}
    .topContentMaxWidth=${args.topContentMaxWidth}
    .topContentJustifyC=${args.topContentJustifyC}
    .topContentAlignI=${args.topContentAlignI}
    .topContentOverflowX=${args.topContentOverflowX}
    .topContentOverflowY=${args.topContentOverflowY}
    .extendContentMinHeight=${args.extendContentMinHeight}
    .extendContentMinWidth=${args.extendContentMinWidth}
    .extendContentMaxHeight=${args.extendContentMaxHeight}
    .extendContentMaxWidth=${args.extendContentMaxWidth}
    .extendContentJustifyC=${args.extendContentJustifyC}
    .extendContentAlignI=${args.extendContentAlignI}
    .extendContentOverflowX=${args.extendContentOverflowX}
    .extendContentOverflowY=${args.extendContentOverflowY}
    .buttonHeight=${args.buttonHeight}
    .buttonWidth=${args.buttonWidth}
    .buttonBorderRadius=${args.buttonBorderRadius}
    .buttonColor=${args.buttonColor}
    .buttonHoverColor=${args.buttonHoverColor}
    .buttonIconSrc=${args.buttonIconSrc}
    .buttonIconHeight=${args.buttonIconHeight}
    .buttonIconWidth=${args.buttonIconWidth}
    .extended=${args.extended}
    .active=${args.active}
    .hover=${args.hover}
  >
    <div slot="top-content">Top Content Area</div>
    <div slot="extended-content">Extended Content Area</div>
  </extendable-content>
`;

Default.args = {
  contWidth: '500px',
  contBorder: '2px #fafafa solid',
  contBorderRadius: '8px',
  contColor: '#f5f5f5',
  contShadow: '0px 2px 5px #d0d0d0',
  contPadding: '5px',
  contHoverBorder: '2px #6a7ea5 dashed',
  contHoverColor: '#f5f5f5',
  contActiveBorder: '2px #6a7ea5 solid',
  contActiveColor: '#add8e6',
  topBottomGap: '5px',
  topHeight: '25px',
  topWidth: '100%',
  topContentMinHeight: '100%',
  topContentMinWidth: 'calc(100% - 30px)',
  topContentMaxHeight: '100%',
  topContentMaxWidth: 'calc(100% - 30px)',
  topContentJustifyC: 'space-between',
  topContentAlignI: 'center',
  topContentOverflowX: 'hidden',
  topContentOverflowY: 'hidden',
  extendContentMinHeight: '0px',
  extendContentMinWidth: '100%',
  extendContentMaxHeight: 'fit-content',
  extendContentMaxWidth: '100%',
  extendContentJustifyC: 'start',
  extendContentAlignI: 'center',
  extendContentOverflowX: 'hidden',
  extendContentOverflowY: 'hidden',
  buttonHeight: '24px',
  buttonWidth: '24px',
  buttonBorderRadius: '24px',
  buttonColor: '#eceff1',
  buttonHoverColor: '#b0bec5',
  buttonIconSrc: undefined,
  buttonIconHeight: '12px',
  buttonIconWidth: '12px',
  extended: false,
  active: false,
  hover: false,
};
