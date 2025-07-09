import '../../components/content-panels/content-window';
import { html } from 'lit';
import type { Meta, StoryFn } from '@storybook/web-components';

type ContentWindowProps = {
  compHeight?: string;
  compWidth?: string;
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
  closeButtonSrc?: string;
  closeHeight?: string;
  closeWidth?: string;
  closeHoverColor?: string;
  closeIconHeight?: string;
  closeIconWidth?: string;
  onCloseClick?: () => void;
  contentHeight?: string;
  contentWidth?: string;
  contentMaxHeight?: string;
  contentMaxWidth?: string;
  contentJustifyC?: string;
  contentAlignI?: string;
  contentGap?: string;
  gapSize?: string;
};

const meta: Meta<ContentWindowProps> = {
  title: 'Components/Content Panels/Content Window',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### \`<content-window>\`

Content container component with optional header and close button.

---

#### CSS Custom Properties

| Variable                                      | Description                               |
|----------------------------------------------|-------------------------------------------|
| \`--content-window-comp-height\`               | Height of the outer wrapper               |
| \`--content-window-comp-width\`                | Width of the outer wrapper                |
| \`--content-window-height\`                    | Height of the main container              |
| \`--content-window-width\`                     | Width of the main container               |
| \`--content-window-max-height\`                | Maximum height of the window              |
| \`--content-window-max-width\`                 | Maximum width of the window               |
| \`--content-window-padding\`                   | Padding inside the main window            |
| \`--content-window-gap\`                       | Gap between window elements               |
| \`--content-window-bg-color\`                  | Background color of the window            |
| \`--content-window-shadow\`                    | Box shadow applied to the window          |
| \`--content-window-overflow-x\`                | Overflow in the x-direction               |
| \`--content-window-overflow-y\`                | Overflow in the y-direction               |
| \`--content-window-resize\`                    | Resizability of the window                |
| \`--content-window-header-height\`            | Height of the header                      |
| \`--content-window-header-width\`             | Width of the header                       |
| \`--content-window-header-gap\`               | Gap between header elements               |
| \`--content-window-tag-font-size\`            | Font size of the header text              |
| \`--content-window-tag-font-weight\`          | Font weight of the header text            |
| \`--content-window-tag-font-family\`          | Font family of the header text            |
| \`--content-window-tag-color\`                | Color of the header text                  |
| \`--content-window-tag-text-shadow\`          | Text shadow of the header text            |
| \`--content-window-tag-text-transform\`       | Text transform for the header text        |
| \`--content-window-close-height\`             | Height of the close button                |
| \`--content-window-close-width\`              | Width of the close button                 |
| \`--content-window-close-hover-color\`        | Background color on close button hover    |
| \`--content-window-close-icon-height\`        | Height of the close icon                  |
| \`--content-window-close-icon-width\`         | Width of the close icon                   |
| \`--content-window-content-height\`           | Height of the content section             |
| \`--content-window-content-width\`            | Width of the content section              |
| \`--content-window-content-max-height\`       | Max height of the content section         |
| \`--content-window-content-max-width\`        | Max width of the content section          |
| \`--content-window-content-justify-content\`  | Justify-content of content layout         |
| \`--content-window-content-align-items\`      | Align-items of content layout             |
| \`--content-window-content-gap\`              | Gap between content elements              |

---

#### Shadow DOM Parts

| Part Name     | Description               |
|--------------|---------------------------|
| \`window\`     | The outer container        |
| \`header\`     | Header container |
| \`header-text\` | Text inside header         |
| \`close-button\` | Close icon container       |
| \`close-button-icon\` | Close icon                 |
| \`content\`     | Slot for component content |
        `,
      },
    },
  },
  argTypes: {
    compHeight: {
      control: 'text',
      description: 'Height of the outer wrapper of the content window.',
      table: { category: 'Layout', defaultValue: { summary: 'fit-content' } },
    },
    compWidth: {
      control: 'text',
      description: 'Width of the outer wrapper of the content window.',
      table: { category: 'Layout', defaultValue: { summary: '505px' } },
    },
    windHeight: {
      control: 'text',
      description: 'Height of the main content window.',
      table: { category: 'Window', defaultValue: { summary: 'fit-content' } },
    },
    windWidth: {
      control: 'text',
      description: 'Width of the main content window.',
      table: { category: 'Window', defaultValue: { summary: '100%' } },
    },
    windMaxHeight: {
      control: 'text',
      description: 'Maximum height allowed for the content window.',
      table: { category: 'Window', defaultValue: { summary: '100%' } },
    },
    windMaxWidth: {
      control: 'text',
      description: 'Maximum width allowed for the content window.',
      table: { category: 'Window', defaultValue: { summary: '100%' } },
    },
    windPad: {
      control: 'text',
      description: 'Padding inside the content window.',
      table: { category: 'Window', defaultValue: { summary: '8px' } },
    },
    windColor: {
      control: 'color',
      description: 'Background color of the content window.',
      table: { category: 'Window', defaultValue: { summary: '#f5f5f5' } },
    },
    windShadow: {
      control: 'text',
      description: 'Box shadow CSS for the content window.',
      table: {
        category: 'Window',
        defaultValue: { summary: '0px 2px 5px #d0d0d0' },
      },
    },
    windOverflowX: {
      control: 'text',
      description: 'Overflow-x CSS property.',
      table: { category: 'Window', defaultValue: { summary: 'auto' } },
    },
    windOverflowY: {
      control: 'text',
      description: 'Overflow-y CSS property.',
      table: { category: 'Window', defaultValue: { summary: 'auto' } },
    },
    windResize: {
      control: 'text',
      description: 'CSS resize property.',
      table: { category: 'Window', defaultValue: { summary: 'none' } },
    },

    gapSize: {
      control: 'text',
      description: 'Gap between sections inside the window.',
      table: { category: 'Layout', defaultValue: { summary: '5px' } },
    },

    showHeader: {
      control: 'boolean',
      description: 'Whether to show the header bar.',
      table: { category: 'Header', defaultValue: { summary: 'true' } },
    },
    headerHeight: {
      control: 'text',
      description: 'Height of the header.',
      table: { category: 'Header', defaultValue: { summary: 'fit-content' } },
    },
    headerWidth: {
      control: 'text',
      description: 'Width of the header.',
      table: { category: 'Header', defaultValue: { summary: '100%' } },
    },
    headerGap: {
      control: 'text',
      description: 'Gap between header elements.',
      table: { category: 'Header', defaultValue: { summary: '5px' } },
    },
    headerText: {
      control: 'text',
      description: 'Text displayed in the header.',
      table: { category: 'Header', defaultValue: { summary: 'Header Text' } },
    },
    headerTextFontSize: {
      control: 'text',
      description: 'Font size of the header text.',
      table: { category: 'Header', defaultValue: { summary: '24px' } },
    },
    headerTextFontWeight: {
      control: 'text',
      description: 'Font weight of the header text.',
      table: { category: 'Header', defaultValue: { summary: 'bold' } },
    },
    headerTextFontFamily: {
      control: 'text',
      description: 'Font family for header text.',
      table: {
        category: 'Header',
        defaultValue: { summary: `'Helvetica', 'Arial', sans-serif` },
      },
    },
    headerTextColor: {
      control: 'color',
      description: 'Color of the header text.',
      table: { category: 'Header', defaultValue: { summary: 'black' } },
    },
    headerTextShadow: {
      control: 'text',
      description: 'Text shadow CSS for header text.',
      table: {
        category: 'Header',
        defaultValue: { summary: '0px 2px 5px #d0d0d0' },
      },
    },
    headerTextTransform: {
      control: 'text',
      description: 'CSS text-transform for header text.',
      table: { category: 'Header', defaultValue: { summary: 'none' } },
    },

    showCloseButton: {
      control: 'boolean',
      description: 'Whether to show the close button in the header.',
      table: { category: 'Close Button', defaultValue: { summary: 'true' } },
    },
    closeButtonSrc: {
      control: 'text',
      description: 'Source URL for the close button icon image.',
      table: {
        category: 'Close Button',
        defaultValue: { summary: undefined },
      },
    },
    closeHeight: {
      control: 'text',
      description: 'Height of the close button.',
      table: {
        category: 'Close Button',
        defaultValue: { summary: 'fit-content' },
      },
    },
    closeWidth: {
      control: 'text',
      description: 'Width of the close button.',
      table: {
        category: 'Close Button',
        defaultValue: { summary: 'fit-content' },
      },
    },
    closeHoverColor: {
      control: 'color',
      description: 'Background color of close button on hover.',
      table: { category: 'Close Button', defaultValue: { summary: '#cfd8dc' } },
    },
    closeIconHeight: {
      control: 'text',
      description: 'Height of the close icon inside the button.',
      table: {
        category: 'Close Button',
        defaultValue: { summary: 'fit-content' },
      },
    },
    closeIconWidth: {
      control: 'text',
      description: 'Width of the close icon inside the button.',
      table: {
        category: 'Close Button',
        defaultValue: { summary: 'fit-content' },
      },
    },

    onCloseClick: {
      action: 'closeClicked',
      description: 'Handler called when close button is clicked.',
      table: { category: 'Close Button', type: { summary: '() => void' } },
      control: false,
    },

    contentHeight: {
      control: 'text',
      description: 'Height of the content area.',
      table: { category: 'Content', defaultValue: { summary: 'fit-content' } },
    },
    contentWidth: {
      control: 'text',
      description: 'Width of the content area.',
      table: { category: 'Content', defaultValue: { summary: '100%' } },
    },
    contentMaxHeight: {
      control: 'text',
      description: 'Maximum height of the content area.',
      table: { category: 'Content', defaultValue: { summary: '100%' } },
    },
    contentMaxWidth: {
      control: 'text',
      description: 'Maximum width of the content area.',
      table: { category: 'Content', defaultValue: { summary: '100%' } },
    },
    contentJustifyC: {
      control: 'text',
      description: 'Justify-content CSS for content layout.',
      table: { category: 'Content', defaultValue: { summary: 'start' } },
    },
    contentAlignI: {
      control: 'text',
      description: 'Align-items CSS for content layout.',
      table: { category: 'Content', defaultValue: { summary: 'center' } },
    },
    contentGap: {
      control: 'text',
      description: 'Gap between content elements.',
      table: { category: 'Content', defaultValue: { summary: '5px' } },
    },
  },
};

export default meta;

export const Default: StoryFn<ContentWindowProps> = (args) => html`
  <content-window
    .compHeight=${args.compHeight}
    .compWidth=${args.compWidth}
    .windHeight=${args.windHeight}
    .windWidth=${args.windWidth}
    .windMaxHeight=${args.windMaxHeight}
    .windMaxWidth=${args.windMaxWidth}
    .windColor=${args.windColor}
    .windShadow=${args.windShadow}
    .windOverflowX=${args.windOverflowX}
    .windOverflowY=${args.windOverflowY}
    .windResize=${args.windResize}
    .gapSize=${args.gapSize}
    .showHeader=${args.showHeader}
    .headerText=${args.headerText}
    .headerHeight=${args.headerHeight}
    .headerWidth=${args.headerWidth}
    .headerGap=${args.headerGap}
    .headerTextFontSize=${args.headerTextFontSize}
    .headerTextFontWeight=${args.headerTextFontWeight}
    .headerTextFontFamily=${args.headerTextFontFamily}
    .headerTextColor=${args.headerTextColor}
    .headerTextShadow=${args.headerTextShadow}
    .headerTextTransform=${args.headerTextTransform}
    .showCloseButton=${args.showCloseButton}
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
  >
    <div style="width: 200px; height: 200px;">
      This is content inside the window.
    </div>
  </content-window>
`;

Default.args = {
  compHeight: 'fit-content',
  compWidth: '505px',
  windHeight: 'fit-content',
  windWidth: '100%',
  windMaxHeight: '100%',
  windMaxWidth: '100%',
  windPad: '8px',
  windColor: '#f5f5f5',
  windShadow: '0px 2px 5px #d0d0d0',
  windOverflowX: 'auto',
  windOverflowY: 'auto',
  windResize: 'none',
  gapSize: '5px',

  showHeader: true,
  headerHeight: 'fit-content',
  headerWidth: '100%',
  headerGap: '5px',
  headerText: 'Header Text',
  headerTextFontSize: '24px',
  headerTextFontWeight: 'bold',
  headerTextFontFamily: `'Helvetica', 'Arial', sans-serif`,
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
};
