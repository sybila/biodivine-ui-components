import { html } from 'lit';
import type { Meta, StoryFn } from '@storybook/web-components-vite';
import '../../components/content-panels/overlay-window';

type OverlayWindowProps = {
  compHeight?: string;
  compWidth?: string;
  compZIndex?: string;

  compBackgroundColor?: string;
  handleBackgroundClick?: () => void;

  windMinHeight?: string;
  windMinWidth?: string;
  windMaxHeight?: string;
  windMaxWidth?: string;
  windPad?: string;
  windColor?: string;
  windShadow?: string;

  showHeader?: boolean;
  headerHeight?: string;
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

  contentJustifyC?: string;
  contentAlignI?: string;
  contentGap?: string;
  contentOverflowX?: string;
  contentOverflowY?: string;

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

The window consists of a header area and a content area. The content area automatically expands to fill all remaining available space within the window. As the window grows, the content stretches to occupy the available width and height.

When the window reaches its maximum height, additional vertical content no longer increases the window size. Instead, the content area becomes vertically scrollable while the header remains visible. Horizontal scrolling is disabled, and content is expected to fit within the available width or handle overflow internally.

#### CSS Custom Properties

| Variable | Description |
|----------|-------------|
| \`--overlay-window-comp-height\` | Height of the overlay window component (doesn't support fit-content or auto)|
| \`--overlay-window-comp-width\` | Width of the overlay window component (doesn't support fit-content or auto)|
| \`--overlay-window-comp-z-index\` | Z-index of the overlay window |
| \`--overlay-window-background-color\` | Background color of the overlay |
| \`--overlay-window-min-height\` | Min height of the window panel |
| \`--overlay-window-min-width\` | Min width of the window panel |
| \`--overlay-window-max-height\` | Max height of the window panel |
| \`--overlay-window-max-width\` | Max width of the window panel |
| \`--overlay-window-padding\` | Padding of the window panel |
| \`--overlay-window-gap\` | Gap between window sections |
| \`--overlay-window-bg-color\` | Background color of the window panel |
| \`--overlay-window-shadow\` | Box shadow of the window panel |
| \`--overlay-window-overflow-x\` | Overflow-x of the window panel |
| \`--overlay-window-overflow-y\` | Overflow-y of the window panel |
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
| \`--overlay-window-content-justify-content\` | Justify content in the content area |
| \`--overlay-window-content-align-items\` | Align items in the content area |
| \`--overlay-window-content-overflow-y\` | Overflow-y of the content area |
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
    handleBackgroundClick: {
      action: 'backgroundClick',
      description: 'Function to handle background click',
      table: { category: 'Events' },
    },
    windMinHeight: {
      control: 'text',
      description: 'Min height of the window panel ',
      table: { defaultValue: { summary: '1vh' }, category: 'Window' },
    },
    windMinWidth: {
      control: 'text',
      description: 'Min width of the window panel',
      table: { defaultValue: { summary: '1vw' }, category: 'Window' },
    },
    windMaxHeight: {
      control: 'text',
      description: 'Max height of the window panel',
      table: { defaultValue: { summary: '90vh' }, category: 'Window' },
    },
    windMaxWidth: {
      control: 'text',
      description: 'Max width of the window panel',
      table: { defaultValue: { summary: '90vw' }, category: 'Window' },
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
    contentOverflowY: {
      control: 'text',
      description: 'Overflow-y of the content area',
      table: { defaultValue: { summary: 'auto' }, category: 'Content' },
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
      .compZIndex=${args.compZIndex}
      .compBackgroundColor=${args.compBackgroundColor}
      .handleBackgroundClick=${args.handleBackgroundClick}
      .windMinHeight=${args.windMinHeight}
      .windMinWidth=${args.windMinWidth}
      .windMaxHeight=${args.windMaxHeight}
      .windMaxWidth=${args.windMaxWidth}
      .windPad=${args.windPad}
      .windColor=${args.windColor}
      .windShadow=${args.windShadow}
      .showHeader=${args.showHeader}
      .headerHeight=${args.headerHeight}
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
      .contentJustifyC=${args.contentJustifyC}
      .contentAlignI=${args.contentAlignI}
      .contentGap=${args.contentGap}
      .gapSize=${args.gapSize}
      .contentOverflowY=${args.contentOverflowY}
    >
      <div>Overlay window content goes here.</div>
    </overlay-window>
  </div>
`;

Default.args = {
  compHeight: '100vh',
  compWidth: '100vw',
  compZIndex: '999999990',
  compBackgroundColor: 'rgba(0, 0, 0, 0.3)',
  windMinHeight: '1vh',
  windMinWidth: '1vw',
  windMaxHeight: '90vh',
  windMaxWidth: '90vw',
  windPad: '8px',
  windColor: '#f5f5f5',
  windShadow: '0px 2px 5px #d0d0d0',
  showHeader: true,
  headerHeight: 'fit-content',
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
  contentJustifyC: 'start',
  contentAlignI: 'center',
  contentGap: '5px',
  contentOverflowY: 'auto',
  gapSize: '5px',
  handleBackgroundClick: () => console.log('Background clicked'),
  handleCloseClick: () => console.log('Close clicked'),
};
