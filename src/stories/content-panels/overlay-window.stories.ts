import { html } from 'lit';
import type { Meta, StoryFn } from '@storybook/web-components';
import '../../components/content-panels/overlay-window';

type OverlayWindowProps = {
  compHeight?: string;
  compWidth?: string;
  compMaxHeight?: string;
  compMaxWidth?: string;
  compZIndex?: string;

  compBackgroundColor?: string;
  compBackgroundWidth?: string;
  compBackgroundHeight?: string;
  handleBackgroundClick?: () => void;

  windHeight?: string;
  windWidth?: string;
  windMaxHeight?: string;
  windMaxWidth?: string;
  windPad?: string;
  windColor?: string;
  windShadow?: string;
  windOverflowX?: string;
  windOverflowY?: string;
  windResize?: string;

  showHeader?: boolean;
  headerHeight?: string;
  headerWidth?: string;
  headerGap?: string;
  headerText?: string;
  headerTextFontSize?: string;
  headerTextFontWeight?: string;
  headerTextFontFamily?: string;
  headerTextColor?: string;
  headerTextShadow?: string;
  headerTextTransform?: string;

  showCloseButton?: boolean;
  handleCloseClick?: () => void;
  closeButtonSrc?: string;
  closeHeight?: string;
  closeWidth?: string;
  closeHoverColor?: string;
  closeIconHeight?: string;
  closeIconWidth?: string;

  contentHeight?: string;
  contentWidth?: string;
  contentMaxHeight?: string;
  contentMaxWidth?: string;
  contentJustifyC?: string;
  contentAlignI?: string;
  contentGap?: string;

  gapSize?: string;
};

const meta: Meta<OverlayWindowProps> = {
  title: 'Components/Content Panels/Overlay Window',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### \`<overlay-window>\`

A flexible overlay/modal window component.

#### CSS Custom Properties

| Variable | Description |
|----------|-------------|
| \`--overlay-window-comp-height\` | Height of the overlay window component |
| \`--overlay-window-comp-width\` | Width of the overlay window component |
| \`--overlay-window-comp-max-height\` | Max height of the overlay window component |
| \`--overlay-window-comp-max-width\` | Max width of the overlay window component |
| \`--overlay-window-comp-z-index\` | Z-index of the overlay window |
| \`--overlay-window-background-color\` | Background color of the overlay |
| \`--overlay-window-background-width\` | Width of the overlay background |
| \`--overlay-window-background-height\` | Height of the overlay background |
| \`--overlay-window-height\` | Height of the window panel |
| \`--overlay-window-width\` | Width of the window panel |
| \`--overlay-window-max-height\` | Max height of the window panel |
| \`--overlay-window-max-width\` | Max width of the window panel |
| \`--overlay-window-padding\` | Padding of the window panel |
| \`--overlay-window-gap\` | Gap between window sections |
| \`--overlay-window-bg-color\` | Background color of the window panel |
| \`--overlay-window-shadow\` | Box shadow of the window panel |
| \`--overlay-window-overflow-x\` | Overflow-x of the window panel |
| \`--overlay-window-overflow-y\` | Overflow-y of the window panel |
| \`--overlay-window-resize\` | Resize property of the window panel |
| \`--overlay-window-header-height\` | Height of the header |
| \`--overlay-window-header-width\` | Width of the header |
| \`--overlay-window-header-gap\` | Gap in the header |
| \`--overlay-window-tag-font-size\` | Header text font size |
| \`--overlay-window-tag-font-weight\` | Header text font weight |
| \`--overlay-window-tag-font-family\` | Header text font family |
| \`--overlay-window-tag-text-shadow\` | Header text shadow |
| \`--overlay-window-tag-color\` | Header text color |
| \`--overlay-window-tag-text-transform\` | Header text transform |
| \`--overlay-window-close-height\` | Height of the close button |
| \`--overlay-window-close-width\` | Width of the close button |
| \`--overlay-window-close-hover-color\` | Hover color of the close button |
| \`--overlay-window-close-icon-height\` | Height of the close icon |
| \`--overlay-window-close-icon-width\` | Width of the close icon |
| \`--overlay-window-content-height\` | Height of the content area |
| \`--overlay-window-content-width\` | Width of the content area |
| \`--overlay-window-content-max-height\` | Max height of the content area |
| \`--overlay-window-content-max-width\` | Max width of the content area |
| \`--overlay-window-content-justify-content\` | Justify content in the content area |
| \`--overlay-window-content-align-items\` | Align items in the content area |
| \`--overlay-window-content-gap\` | Gap in the content area |

#### Shadow DOM Parts

| Part Name         | Description                                 |
|-------------------|---------------------------------------------|
| \`background\`    | The overlay background                      |
| \`window\`        | The main window panel                       |
| \`header\`        | The header area                             |
| \`header-text\`   | The header text element                     |
| \`close-button\`  | The close button container                  |
| \`close-button-icon\` | The close icon image                   |
| \`content\`       | The slot for window content                 |
        `,
      },
    },
  },
  argTypes: {
    compHeight: {
      control: 'text',
      description: 'Height of the overlay window component',
      table: { defaultValue: { summary: '100vh' }, category: 'Layout' },
    },
    compWidth: {
      control: 'text',
      description: 'Width of the overlay window component',
      table: { defaultValue: { summary: '100vw' }, category: 'Layout' },
    },
    compMaxHeight: {
      control: 'text',
      description: 'Max height of the overlay window component',
      table: { defaultValue: { summary: '100vh' }, category: 'Layout' },
    },
    compMaxWidth: {
      control: 'text',
      description: 'Max width of the overlay window component',
      table: { defaultValue: { summary: '100vw' }, category: 'Layout' },
    },
    compZIndex: {
      control: 'text',
      description: 'Z-index of the overlay window',
      table: { defaultValue: { summary: '999999990' }, category: 'Layout' },
    },
    compBackgroundColor: {
      control: 'color',
      description: 'Background color of the overlay',
      table: {
        defaultValue: { summary: 'rgba(0, 0, 0, 0.3)' },
        category: 'Background',
      },
    },
    compBackgroundWidth: {
      control: 'text',
      description: 'Width of the overlay background',
      table: { defaultValue: { summary: '100%' }, category: 'Background' },
    },
    compBackgroundHeight: {
      control: 'text',
      description: 'Height of the overlay background',
      table: { defaultValue: { summary: '100%' }, category: 'Background' },
    },
    handleBackgroundClick: {
      action: 'backgroundClick',
      description: 'Function to handle background click',
      table: { category: 'Events' },
    },
    windHeight: {
      control: 'text',
      description: 'Height of the window panel',
      table: { defaultValue: { summary: 'fit-content' }, category: 'Window' },
    },
    windWidth: {
      control: 'text',
      description: 'Width of the window panel',
      table: { defaultValue: { summary: '400px' }, category: 'Window' },
    },
    windMaxHeight: {
      control: 'text',
      description: 'Max height of the window panel',
      table: { defaultValue: { summary: '100%' }, category: 'Window' },
    },
    windMaxWidth: {
      control: 'text',
      description: 'Max width of the window panel',
      table: { defaultValue: { summary: '400px' }, category: 'Window' },
    },
    windPad: {
      control: 'text',
      description: 'Padding of the window panel',
      table: { defaultValue: { summary: '8px' }, category: 'Window' },
    },
    windColor: {
      control: 'color',
      description: 'Background color of the window panel',
      table: { defaultValue: { summary: '#f5f5f5' }, category: 'Window' },
    },
    windShadow: {
      control: 'text',
      description: 'Box shadow of the window panel',
      table: {
        defaultValue: { summary: '0px 2px 5px #d0d0d0' },
        category: 'Window',
      },
    },
    windOverflowX: {
      control: 'text',
      description: 'Overflow-x of the window panel',
      table: { defaultValue: { summary: 'auto' }, category: 'Window' },
    },
    windOverflowY: {
      control: 'text',
      description: 'Overflow-y of the window panel',
      table: { defaultValue: { summary: 'auto' }, category: 'Window' },
    },
    windResize: {
      control: 'text',
      description: 'Resize property of the window panel',
      table: { defaultValue: { summary: 'none' }, category: 'Window' },
    },
    showHeader: {
      control: 'boolean',
      description: 'Show the header section',
      table: { defaultValue: { summary: 'true' }, category: 'Header' },
    },
    headerHeight: {
      control: 'text',
      description: 'Height of the header',
      table: { defaultValue: { summary: 'fit-content' }, category: 'Header' },
    },
    headerWidth: {
      control: 'text',
      description: 'Width of the header',
      table: { defaultValue: { summary: '100%' }, category: 'Header' },
    },
    headerGap: {
      control: 'text',
      description: 'Gap in the header',
      table: { defaultValue: { summary: '5px' }, category: 'Header' },
    },
    headerText: {
      control: 'text',
      description: 'Header text',
      table: { defaultValue: { summary: '' }, category: 'Header' },
    },
    headerTextFontSize: {
      control: 'text',
      description: 'Header text font size',
      table: { defaultValue: { summary: '24px' }, category: 'Header' },
    },
    headerTextFontWeight: {
      control: 'text',
      description: 'Header text font weight',
      table: { defaultValue: { summary: 'bold' }, category: 'Header' },
    },
    headerTextFontFamily: {
      control: 'text',
      description: 'Header text font family',
      table: {
        defaultValue: { summary: "'Helvetica', 'Arial', sans-serif" },
        category: 'Header',
      },
    },
    headerTextColor: {
      control: 'color',
      description: 'Header text color',
      table: { defaultValue: { summary: 'black' }, category: 'Header' },
    },
    headerTextShadow: {
      control: 'text',
      description: 'Header text shadow',
      table: {
        defaultValue: { summary: '0px 2px 5px #d0d0d0' },
        category: 'Header',
      },
    },
    headerTextTransform: {
      control: 'text',
      description: 'Header text transform',
      table: { defaultValue: { summary: 'none' }, category: 'Header' },
    },
    showCloseButton: {
      control: 'boolean',
      description: 'Show the close button',
      table: { defaultValue: { summary: 'true' }, category: 'Header' },
    },
    handleCloseClick: {
      action: 'closeClick',
      description: 'Function to handle close button click',
      table: { category: 'Events' },
    },
    closeButtonSrc: {
      control: 'text',
      description: 'Source URL for the close button icon',
      table: { defaultValue: { summary: undefined }, category: 'Header' },
    },
    closeHeight: {
      control: 'text',
      description: 'Height of the close button',
      table: { defaultValue: { summary: 'fit-content' }, category: 'Header' },
    },
    closeWidth: {
      control: 'text',
      description: 'Width of the close button',
      table: { defaultValue: { summary: 'fit-content' }, category: 'Header' },
    },
    closeHoverColor: {
      control: 'color',
      description: 'Hover color of the close button',
      table: { defaultValue: { summary: '#cfd8dc' }, category: 'Header' },
    },
    closeIconHeight: {
      control: 'text',
      description: 'Height of the close icon',
      table: { defaultValue: { summary: 'fit-content' }, category: 'Header' },
    },
    closeIconWidth: {
      control: 'text',
      description: 'Width of the close icon',
      table: { defaultValue: { summary: 'fit-content' }, category: 'Header' },
    },
    contentHeight: {
      control: 'text',
      description: 'Height of the content area',
      table: { defaultValue: { summary: 'fit-content' }, category: 'Content' },
    },
    contentWidth: {
      control: 'text',
      description: 'Width of the content area',
      table: { defaultValue: { summary: '100%' }, category: 'Content' },
    },
    contentMaxHeight: {
      control: 'text',
      description: 'Max height of the content area',
      table: { defaultValue: { summary: '100%' }, category: 'Content' },
    },
    contentMaxWidth: {
      control: 'text',
      description: 'Max width of the content area',
      table: { defaultValue: { summary: '100%' }, category: 'Content' },
    },
    contentJustifyC: {
      control: 'text',
      description: 'Justify content in the content area',
      table: { defaultValue: { summary: 'start' }, category: 'Content' },
    },
    contentAlignI: {
      control: 'text',
      description: 'Align items in the content area',
      table: { defaultValue: { summary: 'center' }, category: 'Content' },
    },
    contentGap: {
      control: 'text',
      description: 'Gap in the content area',
      table: { defaultValue: { summary: '5px' }, category: 'Content' },
    },
    gapSize: {
      control: 'text',
      description: 'Gap size between window sections',
      table: { defaultValue: { summary: '5px' }, category: 'Window' },
    },
  },
};

export default meta;

export const Default: StoryFn<OverlayWindowProps> = (args) => html`
  <div style="height: 100vh; width: 100vw; position: relative;">
    <overlay-window
      .compHeight=${args.compHeight}
      .compWidth=${args.compWidth}
      .compMaxHeight=${args.compMaxHeight}
      .compMaxWidth=${args.compMaxWidth}
      .compZIndex=${args.compZIndex}
      .compBackgroundColor=${args.compBackgroundColor}
      .compBackgroundWidth=${args.compBackgroundWidth}
      .compBackgroundHeight=${args.compBackgroundHeight}
      .handleBackgroundClick=${args.handleBackgroundClick}
      .windHeight=${args.windHeight}
      .windWidth=${args.windWidth}
      .windMaxHeight=${args.windMaxHeight}
      .windMaxWidth=${args.windMaxWidth}
      .windPad=${args.windPad}
      .windColor=${args.windColor}
      .windShadow=${args.windShadow}
      .windOverflowX=${args.windOverflowX}
      .windOverflowY=${args.windOverflowY}
      .windResize=${args.windResize}
      .showHeader=${args.showHeader}
      .headerHeight=${args.headerHeight}
      .headerWidth=${args.headerWidth}
      .headerGap=${args.headerGap}
      .headerText=${args.headerText}
      .headerTextFontSize=${args.headerTextFontSize}
      .headerTextFontWeight=${args.headerTextFontWeight}
      .headerTextFontFamily=${args.headerTextFontFamily}
      .headerTextColor=${args.headerTextColor}
      .headerTextShadow=${args.headerTextShadow}
      .headerTextTransform=${args.headerTextTransform}
      .showCloseButton=${args.showCloseButton}
      .handleCloseClick=${args.handleCloseClick}
      .closeButtonSrc=${args.closeButtonSrc}
      .closeHeight=${args.closeHeight}
      .closeWidth=${args.closeWidth}
      .closeHoverColor=${args.closeHoverColor}
      .closeIconHeight=${args.closeIconHeight}
      .closeIconWidth=${args.closeIconWidth}
      .contentHeight=${args.contentHeight}
      .contentWidth=${args.contentWidth}
      .contentMaxHeight=${args.contentMaxHeight}
      .contentMaxWidth=${args.contentMaxWidth}
      .contentJustifyC=${args.contentJustifyC}
      .contentAlignI=${args.contentAlignI}
      .contentGap=${args.contentGap}
      .gapSize=${args.gapSize}
    >
      <div>Overlay window content goes here.</div>
    </overlay-window>
  </div>
`;

Default.args = {
  compHeight: '100vh',
  compWidth: '100vw',
  compMaxHeight: '100vh',
  compMaxWidth: '100vw',
  compZIndex: '999999990',
  compBackgroundColor: 'rgba(0, 0, 0, 0.3)',
  compBackgroundWidth: '100%',
  compBackgroundHeight: '100%',
  windHeight: 'fit-content',
  windWidth: '400px',
  windMaxHeight: '100%',
  windMaxWidth: '400px',
  windPad: '8px',
  windColor: '#f5f5f5',
  windShadow: '0px 2px 5px #d0d0d0',
  windOverflowX: 'auto',
  windOverflowY: 'auto',
  windResize: 'none',
  showHeader: true,
  headerHeight: 'fit-content',
  headerWidth: '100%',
  headerGap: '5px',
  headerText: 'Overlay Window',
  headerTextFontSize: '24px',
  headerTextFontWeight: 'bold',
  headerTextFontFamily: "'Helvetica', 'Arial', sans-serif",
  headerTextColor: 'black',
  headerTextShadow: '0px 2px 5px #d0d0d0',
  headerTextTransform: 'none',
  showCloseButton: true,
  closeButtonSrc: undefined,
  closeHeight: 'fit-content',
  closeWidth: 'fit-content',
  closeHoverColor: '#cfd8dc',
  closeIconHeight: 'fit-content',
  closeIconWidth: 'fit-content',
  contentHeight: 'fit-content',
  contentWidth: '100%',
  contentMaxHeight: '100%',
  contentMaxWidth: '100%',
  contentJustifyC: 'start',
  contentAlignI: 'center',
  contentGap: '5px',
  gapSize: '5px',
  handleBackgroundClick: () => console.log('Background clicked'),
  handleCloseClick: () => console.log('Close clicked'),
};
