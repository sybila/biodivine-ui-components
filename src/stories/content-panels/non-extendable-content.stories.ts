import { html } from 'lit';
import type { Meta, StoryFn } from '@storybook/web-components';
import '../../components/content-panels/non-extendable-content';

type NonExtendableContentProps = {
  compHeight?: string;
  compWidth?: string;

  contHeight?: string;
  contWidth?: string;
  contJustifyC?: string;
  contAlignI?: string;
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

  contentHeight?: string;
  contentWidth?: string;
  contentMaxHeight?: string;
  contentMaxWidth?: string;
  contentJustifyC?: string;
  contentAlignI?: string;
  contentOverflowX?: string;
  contentOverflowY?: string;

  active?: boolean;
  hover?: boolean;
};

const meta: Meta<NonExtendableContentProps> = {
  title: 'Components/Content Panels/Non Extendable Content',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### \`<non-extendable-content>\`

Content panel with customizable layout, hover, and active status.

Behaves the same as \`extendable-content\`, but does not allow extending the content area.

#### CSS Custom Properties

| Variable                                         | Description                              |
|--------------------------------------------------|------------------------------------------|
| \`--non-extendable-content-comp-height\`          | Component height                         |
| \`--non-extendable-content-comp-width\`           | Component width                          |
| \`--non-extendable-content-cont-height\`          | Container height                         |
| \`--non-extendable-content-cont-width\`           | Container width                          |
| \`--non-extendable-content-cont-justify-content\` | Container justify-content                |
| \`--non-extendable-content-cont-align-items\`     | Container align-items                    |
| \`--non-extendable-content-cont-overflow-x\`      | Container overflow-x                     |
| \`--non-extendable-content-cont-overflow-y\`      | Container overflow-y                     |
| \`--non-extendable-content-cont-border\`          | Container border                         |
| \`--non-extendable-content-cont-border-radius\`   | Container border radius                  |
| \`--non-extendable-content-cont-bg-color\`        | Container background color               |
| \`--non-extendable-content-cont-shadow\`          | Container box shadow                     |
| \`--non-extendable-content-cont-padding\`         | Container padding                        |
| \`--non-extendable-content-cont-hover-border\`    | Container border on hover                |
| \`--non-extendable-content-hover-bg-color\`       | Container background color on hover      |
| \`--non-extendable-content-active-border\`        | Container border when active             |
| \`--non-extendable-content-active-bg-color\`      | Container background color when active   |
| \`--non-extendable-content-content-height\`       | Content height                           |
| \`--non-extendable-content-content-width\`        | Content width                            |
| \`--non-extendable-content-content-max-height\`   | Content max height                       |
| \`--non-extendable-content-content-max-width\`    | Content max width                        |
| \`--non-extendable-content-content-justify-content\` | Content justify-content              |
| \`--non-extendable-content-content-align-items\`  | Content align-items                      |
| \`--non-extendable-content-content-overflow-x\`   | Content overflow-x                       |
| \`--non-extendable-content-content-overflow-y\`   | Content overflow-y                       |

#### Shadow DOM Parts

| Part Name    | Element      | Description           |
|--------------|--------------|-----------------------|
| \`container\` | \`#container\` | Main container        |
| \`content\`   | slot         | Content slot          |
        `,
      },
    },
  },
  argTypes: {
    // Layout
    compHeight: {
      control: 'text',
      description: 'Height of the outer component container',
      table: { category: 'Layout', defaultValue: { summary: '39px' } },
    },
    compWidth: {
      control: 'text',
      description: 'Width of the outer component container',
      table: { category: 'Layout', defaultValue: { summary: '500px' } },
    },

    // Container
    contHeight: {
      control: 'text',
      description: 'Height of the container',
      table: { category: 'Container', defaultValue: { summary: '100%' } },
    },
    contWidth: {
      control: 'text',
      description: 'Width of the container',
      table: { category: 'Container', defaultValue: { summary: '100%' } },
    },
    contJustifyC: {
      control: 'text',
      description: 'Justify content of the container',
      table: { category: 'Container', defaultValue: { summary: 'center' } },
    },
    contAlignI: {
      control: 'text',
      description: 'Align items of the container',
      table: { category: 'Container', defaultValue: { summary: 'center' } },
    },
    contOverflowX: {
      control: 'text',
      description: 'Overflow-x of the container',
      table: { category: 'Container', defaultValue: { summary: 'hidden' } },
    },
    contOverflowY: {
      control: 'text',
      description: 'Overflow-y of the container',
      table: { category: 'Container', defaultValue: { summary: 'hidden' } },
    },
    contBorder: {
      control: 'text',
      description: 'Border of the container',
      table: {
        category: 'Container',
        defaultValue: { summary: '2px #fafafa solid' },
      },
    },
    contBorderRadius: {
      control: 'text',
      description: 'Border radius of the container',
      table: { category: 'Container', defaultValue: { summary: '8px' } },
    },
    contColor: {
      control: 'color',
      description: 'Background color of the container',
      table: { category: 'Container', defaultValue: { summary: '#f5f5f5' } },
    },
    contShadow: {
      control: 'text',
      description: 'Box shadow of the container',
      table: {
        category: 'Container',
        defaultValue: { summary: '0px 2px 5px #d0d0d0' },
      },
    },
    contPadding: {
      control: 'text',
      description: 'Padding of the container',
      table: { category: 'Container', defaultValue: { summary: '5px' } },
    },
    contHoverBorder: {
      control: 'text',
      description: 'Border of the container on hover',
      table: {
        category: 'Container',
        defaultValue: { summary: '2px #6a7ea5 dashed' },
      },
    },
    contHoverColor: {
      control: 'color',
      description: 'Background color of the container on hover',
      table: { category: 'Container', defaultValue: { summary: '#f5f5f5' } },
    },
    contActiveBorder: {
      control: 'text',
      description: 'Border of the container when active',
      table: {
        category: 'Container',
        defaultValue: { summary: '2px #6a7ea5 solid' },
      },
    },
    contActiveColor: {
      control: 'color',
      description: 'Background color of the container when active',
      table: { category: 'Container', defaultValue: { summary: '#add8e6' } },
    },

    // Content
    contentHeight: {
      control: 'text',
      description: 'Height of the content area',
      table: { category: 'Content', defaultValue: { summary: '100%' } },
    },
    contentWidth: {
      control: 'text',
      description: 'Width of the content area',
      table: {
        category: 'Content',
        defaultValue: { summary: 'calc(100% - 8px)' },
      },
    },
    contentMaxHeight: {
      control: 'text',
      description: 'Max height of the content area',
      table: { category: 'Content', defaultValue: { summary: '100%' } },
    },
    contentMaxWidth: {
      control: 'text',
      description: 'Max width of the content area',
      table: { category: 'Content', defaultValue: { summary: '100%' } },
    },
    contentJustifyC: {
      control: 'text',
      description: 'Justify content of the content area',
      table: {
        category: 'Content',
        defaultValue: { summary: 'space-between' },
      },
    },
    contentAlignI: {
      control: 'text',
      description: 'Align items of the content area',
      table: { category: 'Content', defaultValue: { summary: 'center' } },
    },
    contentOverflowX: {
      control: 'text',
      description: 'Overflow-x of the content area',
      table: { category: 'Content', defaultValue: { summary: 'hidden' } },
    },
    contentOverflowY: {
      control: 'text',
      description: 'Overflow-y of the content area',
      table: { category: 'Content', defaultValue: { summary: 'hidden' } },
    },

    // State
    active: {
      control: 'boolean',
      description: 'Whether the panel is active (shows active border/color)',
      table: { category: 'State', defaultValue: { summary: 'false' } },
    },
    hover: {
      control: 'boolean',
      description: 'Whether the panel is hovered (shows hover border/color)',
      table: { category: 'State', defaultValue: { summary: 'false' } },
    },
  },
};

export default meta;

export const Default: StoryFn<NonExtendableContentProps> = (args) => html`
  <non-extendable-content
    .compHeight=${args.compHeight}
    .compWidth=${args.compWidth}
    .contHeight=${args.contHeight}
    .contWidth=${args.contWidth}
    .contJustifyC=${args.contJustifyC}
    .contAlignI=${args.contAlignI}
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
    .contentHeight=${args.contentHeight}
    .contentWidth=${args.contentWidth}
    .contentMaxHeight=${args.contentMaxHeight}
    .contentMaxWidth=${args.contentMaxWidth}
    .contentJustifyC=${args.contentJustifyC}
    .contentAlignI=${args.contentAlignI}
    .contentOverflowX=${args.contentOverflowX}
    .contentOverflowY=${args.contentOverflowY}
    .active=${args.active}
    .hover=${args.hover}
  >
    <div>This is non-extendable content.</div>
  </non-extendable-content>
`;

Default.args = {
  compHeight: '39px',
  compWidth: '500px',
  contHeight: '100%',
  contWidth: '100%',
  contJustifyC: 'center',
  contAlignI: 'center',
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
  contentHeight: '100%',
  contentWidth: 'calc(100% - 8px)',
  contentMaxHeight: '100%',
  contentMaxWidth: '100%',
  contentJustifyC: 'space-between',
  contentAlignI: 'center',
  contentOverflowX: 'hidden',
  contentOverflowY: 'hidden',
  active: false,
  hover: false,
};
