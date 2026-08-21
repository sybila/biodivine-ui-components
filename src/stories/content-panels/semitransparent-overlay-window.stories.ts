import '../../components/content-panels/semitransparent-overlay-window';
import { html } from 'lit';
import type { Meta, StoryFn } from '@storybook/web-components-vite';

type SemitransparentOverlayWindowProps = {
  // Component Layout
  compHeight?: string;
  compWidth?: string;
  compZIndex?: string;
  compBackgroundColor?: string;
  handleBackgroundClick?: () => void;
  backgroundUserSelect?: string;
  backgroundPointerEvents?: string;

  // Window Layout & Appearance
  windMinHeight?: string;
  windMinWidth?: string;
  windMaxHeight?: string;
  windMaxWidth?: string;
  windPad?: string;
  windColor?: string;
  windShadow?: string;
  windowUserSelect?: string;
  windowPointerEvents?: string;
  gapSize?: string;

  // Header Configuration
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

  // Close Button Configuration
  showCloseButton?: boolean;
  closeButtonSrc?: string;
  closeHeight?: string;
  closeWidth?: string;
  closeHoverColor?: string;
  closeIconHeight?: string;
  closeIconWidth?: string;
  handleCloseClick?: () => void;

  // Content Configuration
  contentJustifyC?: string;
  contentAlignI?: string;
  contentGap?: string;
  contentOverflowY?: string;
};

const meta: Meta<SemitransparentOverlayWindowProps> = {
  title: 'Components/content-panels/Semitransparent Overlay Window',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### \`<semitransparent-overlay-window>\`

A semitransparent, full-screen overlay component rendering a centered modal window. It dims the background to maintain context while focusing user attention, making it suitable for quick help dialogs or transient instructions. The component supports configurable headers, close buttons, and slotted content via CSS custom properties or direct attributes.

#### CSS Custom Properties

| Variable | Description |
|---|---|
| \`--semitransparent-overlay-window-comp-height\` | Full screen container height |
| \`--semitransparent-overlay-window-comp-width\` | Full screen container width |
| \`--semitransparent-overlay-window-comp-z-index\` | Z-index of the overlay |
| \`--semitransparent-overlay-window-background-color\` | Background overlay color |
| \`--semitransparent-overlay-window-bg-user-select\` | Text selection behavior on background |
| \`--semitransparent-overlay-window-bg-pointer-events\` | Pointer events (clicks) on background |
| \`--semitransparent-overlay-window-min-height\` | Minimum window height |
| \`--semitransparent-overlay-window-min-width\` | Minimum window width |
| \`--semitransparent-overlay-window-max-height\` | Maximum window height |
| \`--semitransparent-overlay-window-max-width\` | Maximum window width |
| \`--semitransparent-overlay-window-padding\` | Inner padding of the window |
| \`--semitransparent-overlay-window-gap\` | Gap between header and content |
| \`--semitransparent-overlay-window-bg-color\` | Window background color |
| \`--semitransparent-overlay-window-win-user-select\` | Text selection behavior on window |
| \`--semitransparent-overlay-window-win-pointer-events\` | Pointer events on window |
| \`--semitransparent-overlay-window-shadow\` | Box shadow of the window |
| \`--semitransparent-overlay-window-header-height\` | Header height |
| \`--semitransparent-overlay-window-header-width\` | Header width |
| \`--semitransparent-overlay-window-header-gap\` | Gap inside header |
| \`--semitransparent-overlay-window-tag-font-size\` | Header text font size |
| \`--semitransparent-overlay-window-tag-font-weight\` | Header text font weight |
| \`--semitransparent-overlay-window-tag-font-family\` | Header text font family |
| \`--semitransparent-overlay-window-tag-text-shadow\` | Header text shadow |
| \`--semitransparent-overlay-window-tag-color\` | Header text color |
| \`--semitransparent-overlay-window-tag-text-transform\` | Header text transform |
| \`--semitransparent-overlay-window-close-height\` | Close button height |
| \`--semitransparent-overlay-window-close-width\` | Close button width |
| \`--semitransparent-overlay-window-close-hover-color\` | Close button hover color |
| \`--semitransparent-overlay-window-close-icon-height\` | Close icon height |
| \`--semitransparent-overlay-window-close-icon-width\` | Close icon width |
| \`--semitransparent-overlay-window-content-justify-content\` | Content justify content |
| \`--semitransparent-overlay-window-content-align-items\` | Content align items |
| \`--semitransparent-overlay-window-content-gap\` | Content item gap |
| \`--semitransparent-overlay-window-content-overflow-y\` | Content vertical overflow |

#### Shadow DOM Parts

| Part Name | Element | Description |
|---|---|---|
| \`background\` | \`div\` | The full-screen background layer |
| \`window\` | \`div\` | The central modal window container |
| \`header\` | \`div\` | The optional header section |
| \`close-button\` | \`div\` | The close button wrapper |
| \`close-button-icon\` | \`img\` | The close icon image |
| \`header-text\` | \`p\` | The header text element |
| \`content\` | \`slot\` | The slot for child content |
        `,
      },
    },
  },
  argTypes: {
    // Component Layout
    compHeight: {
      control: 'text',
      description: 'Height of the full-screen overlay container',
      table: { category: 'Layout', defaultValue: { summary: '100vh' } },
    },
    compWidth: {
      control: 'text',
      description: 'Width of the full-screen overlay container',
      table: { category: 'Layout', defaultValue: { summary: '100vw' } },
    },
    compZIndex: {
      control: 'text',
      description: 'Z-index of the overlay',
      table: { category: 'Layout', defaultValue: { summary: '999999990' } },
    },
    compBackgroundColor: {
      control: 'color',
      description: 'Background color of the overlay',
      table: {
        category: 'Layout',
        defaultValue: { summary: 'transparent' },
      },
    },
    backgroundUserSelect: {
      control: 'text',
      description: 'Controls text selection on the background layer',
      table: { defaultValue: { summary: 'none' }, category: 'Interaction' },
    },
    backgroundPointerEvents: {
      control: 'text',
      description:
        'Controls pointer events (clicks, hovers) on the background layer',
      table: { defaultValue: { summary: 'none' }, category: 'Interaction' },
    },
    handleBackgroundClick: {
      action: 'backgroundClick',
      description:
        'Function to handle background click (only works if pointer-events allows it)',
      table: { category: 'Events' },
    },

    // Window Layout & Appearance
    windMinHeight: {
      control: 'text',
      description: 'Minimum height of the modal window',
      table: { category: 'Window', defaultValue: { summary: '1vh' } },
    },
    windMinWidth: {
      control: 'text',
      description: 'Minimum width of the modal window',
      table: { category: 'Window', defaultValue: { summary: '1vw' } },
    },
    windMaxHeight: {
      control: 'text',
      description: 'Maximum height of the modal window',
      table: { category: 'Window', defaultValue: { summary: '90vh' } },
    },
    windMaxWidth: {
      control: 'text',
      description: 'Maximum width of the modal window',
      table: { category: 'Window', defaultValue: { summary: '90vw' } },
    },
    windPad: {
      control: 'text',
      description: 'Padding inside the modal window',
      table: { category: 'Window', defaultValue: { summary: '8px' } },
    },
    windColor: {
      control: 'color',
      description: 'Background color of the modal window',
      table: { category: 'Window', defaultValue: { summary: '#646464' } },
    },
    windShadow: {
      control: 'text',
      description: 'Box shadow of the modal window',
      table: {
        category: 'Window',
        defaultValue: { summary: '0px 2px 5px #d0d0d0' },
      },
    },
    windowUserSelect: {
      control: 'text',
      description: 'Controls text selection on the window panel',
      table: { defaultValue: { summary: 'none' }, category: 'Interaction' },
    },
    windowPointerEvents: {
      control: 'text',
      description: 'Controls pointer events on the window panel',
      table: { defaultValue: { summary: 'none' }, category: 'Interaction' },
    },

    gapSize: {
      control: 'text',
      description: 'Gap between header and content sections',
      table: { category: 'Window', defaultValue: { summary: '5px' } },
    },

    // Header Configuration
    showHeader: {
      control: 'boolean',
      description: 'Whether to display the header section',
      table: { category: 'Header', defaultValue: { summary: 'true' } },
    },
    headerHeight: {
      control: 'text',
      description: 'Height of the header container',
      table: { category: 'Header', defaultValue: { summary: 'fit-content' } },
    },
    headerWidth: {
      control: 'text',
      description: 'Width of the header container',
      table: { category: 'Header', defaultValue: { summary: '100%' } },
    },
    headerGap: {
      control: 'text',
      description: 'Gap between elements inside the header',
      table: { category: 'Header', defaultValue: { summary: '5px' } },
    },
    headerText: {
      control: 'text',
      description: 'Text content of the header',
      table: { category: 'Header', defaultValue: { summary: '' } },
    },
    headerTextFontSize: {
      control: 'text',
      description: 'Font size of the header text',
      table: { category: 'Header', defaultValue: { summary: '24px' } },
    },
    headerTextFontWeight: {
      control: 'text',
      description: 'Font weight of the header text',
      table: { category: 'Header', defaultValue: { summary: 'bold' } },
    },
    headerTextFontFamily: {
      control: 'text',
      description: 'Font family of the header text',
      table: {
        category: 'Header',
        defaultValue: { summary: "'Helvetica', 'Arial', sans-serif" },
      },
    },
    headerTextColor: {
      control: 'color',
      description: 'Color of the header text',
      table: { category: 'Header', defaultValue: { summary: 'white' } },
    },
    headerTextShadow: {
      control: 'text',
      description: 'Text shadow for the header text',
      table: {
        category: 'Header',
        defaultValue: { summary: 'none' },
      },
    },
    headerTextTransform: {
      control: 'text',
      description: 'Text transformation (e.g., uppercase) for the header text',
      table: { category: 'Header', defaultValue: { summary: 'none' } },
    },

    // Close Button Configuration
    showCloseButton: {
      control: 'boolean',
      description: 'Whether to display the close button',
      table: { category: 'Close Button', defaultValue: { summary: 'false' } },
    },
    closeButtonSrc: {
      control: 'text',
      description: 'Source URL for the close icon (defaults to built-in SVG)',
      table: {
        category: 'Close Button',
        defaultValue: { summary: 'Built-in SVG' },
      },
    },
    closeHeight: {
      control: 'text',
      description: 'Height of the close button container',
      table: {
        category: 'Close Button',
        defaultValue: { summary: 'fit-content' },
      },
    },
    closeWidth: {
      control: 'text',
      description: 'Width of the close button container',
      table: {
        category: 'Close Button',
        defaultValue: { summary: 'fit-content' },
      },
    },
    closeHoverColor: {
      control: 'color',
      description: 'Background color on close button hover',
      table: { category: 'Close Button', defaultValue: { summary: '#cfd8dc' } },
    },
    closeIconHeight: {
      control: 'text',
      description: 'Height of the close icon image',
      table: {
        category: 'Close Button',
        defaultValue: { summary: 'fit-content' },
      },
    },
    closeIconWidth: {
      control: 'text',
      description: 'Width of the close icon image',
      table: {
        category: 'Close Button',
        defaultValue: { summary: 'fit-content' },
      },
    },
    handleCloseClick: {
      action: 'closeClick',
      description: 'Function to handle close button click',
      table: { category: 'Events' },
    },

    // Content Configuration
    contentJustifyC: {
      control: 'text',
      description: 'Justify content alignment for slotted content',
      table: { category: 'Content', defaultValue: { summary: 'start' } },
    },
    contentAlignI: {
      control: 'text',
      description: 'Align items alignment for slotted content',
      table: { category: 'Content', defaultValue: { summary: 'center' } },
    },
    contentGap: {
      control: 'text',
      description: 'Gap between slotted content items',
      table: { category: 'Content', defaultValue: { summary: '5px' } },
    },
    contentOverflowY: {
      control: 'text',
      description: 'Vertical overflow behavior for slotted content',
      table: { category: 'Content', defaultValue: { summary: 'auto' } },
    },
  },
};

export default meta;

export const Default: StoryFn<SemitransparentOverlayWindowProps> = (
  args
) => html`
  <div style="height: 100vh; width: 100vw; position: relative;">
    <semitransparent-overlay-window
      .compHeight=${args.compHeight}
      .compWidth=${args.compWidth}
      .compZIndex=${args.compZIndex}
      .compBackgroundColor=${args.compBackgroundColor}
      .backgroundUserSelect=${args.backgroundUserSelect}
      .backgroundPointerEvents=${args.backgroundPointerEvents}
      .handleBackgroundClick=${args.handleBackgroundClick}
      .windMinHeight=${args.windMinHeight}
      .windMinWidth=${args.windMinWidth}
      .windMaxHeight=${args.windMaxHeight}
      .windMaxWidth=${args.windMaxWidth}
      .windPad=${args.windPad}
      .windColor=${args.windColor}
      .windShadow=${args.windShadow}
      .windowUserSelect=${args.windowUserSelect}
      .windowPointerEvents=${args.windowPointerEvents}
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
      .contentJustifyC=${args.contentJustifyC}
      .contentAlignI=${args.contentAlignI}
      .contentGap=${args.contentGap}
      .contentOverflowY=${args.contentOverflowY}
      .gapSize=${args.gapSize}
    >
      <div style="padding: 20px; text-align: center; color: white;">
        <h3>Slotted Content</h3>
        <p>This is the content area.</p>
      </div>
    </semitransparent-overlay-window>
  </div>
`;

Default.args = {
  // Component Layout
  compHeight: '100vh',
  compWidth: '100vw',
  compZIndex: '999999990',
  compBackgroundColor: 'transparent',
  backgroundUserSelect: 'none',
  backgroundPointerEvents: 'none',
  handleBackgroundClick: () => console.log('Background clicked'),

  // Window Layout & Appearance
  windMinHeight: '1vh',
  windMinWidth: '1vw',
  windMaxHeight: '90vh',
  windMaxWidth: '90vw',
  windPad: '8px',
  windColor: '#646464',
  windShadow: '0px 2px 5px #d0d0d0',
  windowUserSelect: 'none',
  windowPointerEvents: 'none',
  gapSize: '5px',

  // Header Configuration
  showHeader: true,
  headerHeight: 'fit-content',
  headerWidth: '100%',
  headerGap: '5px',
  headerText: 'Modal Title',
  headerTextFontSize: '24px',
  headerTextFontWeight: 'bold',
  headerTextFontFamily: "'Helvetica', 'Arial', sans-serif",
  headerTextColor: 'white',
  headerTextShadow: 'none',
  headerTextTransform: 'none',

  // Close Button Configuration
  showCloseButton: false,
  closeButtonSrc: '',
  closeHeight: 'fit-content',
  closeWidth: 'fit-content',
  closeHoverColor: '#cfd8dc',
  closeIconHeight: 'fit-content',
  closeIconWidth: 'fit-content',
  handleCloseClick: () => console.log('Close clicked'),

  // Content Configuration
  contentJustifyC: 'start',
  contentAlignI: 'center',
  contentGap: '5px',
  contentOverflowY: 'auto',
};
