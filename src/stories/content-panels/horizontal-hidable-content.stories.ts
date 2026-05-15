import { html } from 'lit';
import type { Meta, StoryFn } from '@storybook/web-components-vite';
import '../../components/content-panels/horizontal-hidable-content';

type HorizontalHidableContentProps = {
  compHeight?: string;
  compBgColor?: string;
  compBorder?: string;
  compBorderRadius?: string;
  compShadow?: string;

  contentWidth?: string;
  contentJustifyContent?: string;
  contentAlignItems?: string;
  contentPadding?: string;
  contentOverflowX?: string;
  contentOverflowY?: string;

  buttonWidth?: string;
  buttonHoverColor?: string;

  iconHeight?: string;
  iconWidth?: string;
  iconSrc?: string;
  iconAlt?: string;
  iconVisibilityTransform?: string;

  buttonRight?: boolean;
  contentVisible?: boolean;
};

const meta: Meta<HorizontalHidableContentProps> = {
  title: 'Components/Content Panels/Horizontal Hidable Content',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### <horizontal-hidable-content>

Container component with a button to toggle horizontal content visibility.

#### CSS Custom Properties

| Variable | Description |
|-------------------------------|-------------------------------|
| --hidable-content-component-height | Height of the component |
| --hidable-content-comp-bg-color | Background color of the component |
| --hidable-content-comp-border | Border of the component |
| --hidable-content-comp-border-radius | Border radius of the component |
| --hidable-content-comp-shadow | Box shadow of the component |
| --hidable-content-content-width | Width of the content area |
| --hidable-content-content-justify-content | Justify content in content area |
| --hidable-content-content-align-items | Align items in content area |
| --hidable-content-content-padding | Padding in content area |
| --hidable-content-content-overflow-x | Horizontal overflow of content |
| --hidable-content-content-overflow-y | Vertical overflow of content |
| --hidable-content-button-width | Width of the visibility button |
| --hidable-content-button-hover-bg-color | Hover background color of button |
| --hidable-content-button-icon-height | Height of the button icon |
| --hidable-content-button-icon-width | Width of the button icon |
| --hidable-content-icon-visibility-transform | Transform for icon when visible |

#### Shadow DOM Parts

| Part Name | Description |
|---------------------|-------------------------------|
| content | The slot for the main content |
| visibility-button | The button to toggle visibility |
| visibility-icon | The icon in the button |
`,
      },
    },
  },
  argTypes: {
    compHeight: {
      control: 'text',
      description: 'Height of the component',
      table: { defaultValue: { summary: '200px' }, category: 'Component' },
    },
    compBgColor: {
      control: 'color',
      description: 'Background color of the component',
      table: { defaultValue: { summary: '#eceff1' }, category: 'Component' },
    },
    compBorder: {
      control: 'text',
      description: 'Border of the component',
      table: { defaultValue: { summary: 'none' }, category: 'Component' },
    },
    compBorderRadius: {
      control: 'text',
      description: 'Border radius of the component',
      table: { defaultValue: { summary: '5px' }, category: 'Component' },
    },
    compShadow: {
      control: 'text',
      description: 'Box shadow of the component',
      table: { defaultValue: { summary: 'none' }, category: 'Component' },
    },
    contentWidth: {
      control: 'text',
      description: 'Width of the content area',
      table: { defaultValue: { summary: '200px' }, category: 'Content' },
    },
    contentJustifyContent: {
      control: 'text',
      description: 'Justify content in content area',
      table: { defaultValue: { summary: 'start' }, category: 'Content' },
    },
    contentAlignItems: {
      control: 'text',
      description: 'Align items in content area',
      table: { defaultValue: { summary: 'center' }, category: 'Content' },
    },
    contentPadding: {
      control: 'text',
      description: 'Padding in content area',
      table: { defaultValue: { summary: '8px' }, category: 'Content' },
    },
    contentOverflowX: {
      control: 'text',
      description: 'Horizontal overflow of content',
      table: { defaultValue: { summary: 'hidden' }, category: 'Content' },
    },
    contentOverflowY: {
      control: 'text',
      description: 'Vertical overflow of content',
      table: { defaultValue: { summary: 'hidden' }, category: 'Content' },
    },
    buttonWidth: {
      control: 'text',
      description: 'Width of the visibility button',
      table: { defaultValue: { summary: '20px' }, category: 'Button' },
    },
    buttonHoverColor: {
      control: 'color',
      description: 'Hover background color of button',
      table: { defaultValue: { summary: '#b0bec5' }, category: 'Button' },
    },
    iconHeight: {
      control: 'text',
      description: 'Height of the button icon',
      table: { defaultValue: { summary: '12px' }, category: 'Icon' },
    },
    iconWidth: {
      control: 'text',
      description: 'Width of the button icon',
      table: { defaultValue: { summary: '12px' }, category: 'Icon' },
    },
    iconSrc: {
      control: 'text',
      description: 'Source for the button icon',
      table: { defaultValue: { summary: 'default arrow' }, category: 'Icon' },
    },
    iconAlt: {
      control: 'text',
      description: 'Alt text for the button icon',
      table: { defaultValue: { summary: '' }, category: 'Icon' },
    },
    iconVisibilityTransform: {
      control: 'text',
      description: 'Transform for icon when visible',
      table: { defaultValue: { summary: 'rotate(180deg)' }, category: 'Icon' },
    },
    buttonRight: {
      control: 'boolean',
      description:
        'If is true then the button is moved to the right edge of the component and the icon is transformed the same way as if contentVisible is true.',
      table: { defaultValue: { summary: 'false' }, category: 'State' },
    },
    contentVisible: {
      control: 'boolean',
      description: 'If true, content is visible',
      table: { defaultValue: { summary: 'false' }, category: 'State' },
    },
  },
};

export default meta;

export const Default: StoryFn<HorizontalHidableContentProps> = (args) => html`
  <horizontal-hidable-content
    .compHeight=${args.compHeight}
    .compBgColor=${args.compBgColor}
    .compBorder=${args.compBorder}
    .compBorderRadius=${args.compBorderRadius}
    .compShadow=${args.compShadow}
    .contentWidth=${args.contentWidth}
    .contentJustifyContent=${args.contentJustifyContent}
    .contentAlignItems=${args.contentAlignItems}
    .contentPadding=${args.contentPadding}
    .contentOverflowX=${args.contentOverflowX}
    .contentOverflowY=${args.contentOverflowY}
    .buttonWidth=${args.buttonWidth}
    .buttonHoverColor=${args.buttonHoverColor}
    .iconHeight=${args.iconHeight}
    .iconWidth=${args.iconWidth}
    .iconSrc=${args.iconSrc}
    .iconAlt=${args.iconAlt}
    .iconVisibilityTransform=${args.iconVisibilityTransform}
    .buttonRight=${args.buttonRight}
    .contentVisible=${args.contentVisible}
  >
    <div slot="content">This is the horizontally hidable content area.</div>
  </horizontal-hidable-content>
`;

Default.args = {
  compHeight: '200px',
  compBgColor: '#eceff1',
  compBorder: 'none',
  compBorderRadius: '5px',
  compShadow: 'none',
  contentWidth: '200px',
  contentJustifyContent: 'start',
  contentAlignItems: 'center',
  contentPadding: '8px',
  contentOverflowX: 'hidden',
  contentOverflowY: 'hidden',
  buttonWidth: '20px',
  buttonHoverColor: '#b0bec5',
  iconHeight: '12px',
  iconWidth: '12px',
  iconSrc: undefined,
  iconAlt: undefined,
  iconVisibilityTransform: 'rotate(180deg)',
  buttonRight: false,
  contentVisible: false,
};
