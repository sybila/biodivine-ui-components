import '../../components/utilities/message-wrapper';
import '../../components/content-panels/content-window';
import '../../components/buttons/text-button';
import { html } from 'lit';
import type { Meta, StoryFn } from '@storybook/web-components';
import { Message } from '../../components/utilities/message-wrapper';

type MessageWrapperProps = {
  compHeight?: string;
  compWidth?: string;
  compZindex?: string;
  wrapperHeight?: string;
  wrapperWidth?: string;
  wrapperOverflowX?: string;
  wrapperOverflowY?: string;
  messageHeight?: string;
  messageWidth?: string;
  messageLineHeight?: string;
  messagePad?: string;
  messageTop?: string;
  messageBottom?: string;
  messageLeft?: string;
  messageRight?: string;
  messageColor?: string;
  messageShadow?: string;
  messageFontSize?: string;
  messageFontWeight?: string;
  messageFontFamily?: string;
  messageTransform?: string;
  messageAlign?: string;
  infoColor?: string;
  successColor?: string;
  errorColor?: string;
  contentHeight?: string;
  contentWidth?: string;
  contentZindex?: string;
};

const meta: Meta<MessageWrapperProps> = {
  title: 'Components/Utilities/Message Wrapper',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### \`<message-wrapper>\`

A global message overlay component. Place once at the root of your app and control visibility via the global \`Message\` handler.

#### CSS Custom Properties

| Variable                                       | Description                             |
|------------------------------------------------|-----------------------------------------|
| \`--message-wrapper-comp-height\`               | Outer component height                  |
| \`--message-wrapper-comp-width\`                | Outer component width                   |
| \`--message-wrapper-z-index\`                   | Z-index for the component               |
| \`--message-wrapper-height\`                    | Height of outer wrapper                 |
| \`--message-wrapper-width\`                     | Width of outer wrapper                  |
| \`--message-wrapper-overflow-x\`                | Overflow-x of the wrapper container     |
| \`--message-wrapper-overflow-y\`                | Overflow-y of the wrapper container     |
| \`--message-wrapper-message-padding\`           | Padding inside the message container    |
| \`--message-wrapper-message-height\`            | Height of message container             |
| \`--message-wrapper-message-width\`             | Width of message container              |
| \`--message-wrapper-message-line-height\`       | Line height of message text             |
| \`--message-wrapper-message-top\`               | Top offset                              |
| \`--message-wrapper-message-bottom\`            | Bottom offset                           |
| \`--message-wrapper-message-left\`              | Left offset                             |
| \`--message-wrapper-message-right\`             | Right offset                            |
| \`--message-wrapper-message-color\`             | Background color                        |
| \`--message-wrapper-message-shadow\`            | Shadow applied to the message box       |
| \`--message-wrapper-message-font-size\`         | Font size of message text               |
| \`--message-wrapper-message-font-weight\`       | Font weight of message text             |
| \`--message-wrapper-message-font-family\`       | Font family of message text             |
| \`--message-wrapper-message-text-transform\`    | Text transformation (e.g., uppercase)   |
| \`--message-wrapper-message-align\`             | Text alignment                          |
| \`--message-wrapper-info-color\`                | Color for informational text            |
| \`--message-wrapper-success-color\`             | Color for success text                  |
| \`--message-wrapper-error-color\`               | Color for error text                    |
| \`--message-wrapper-content-height\`            | Height of the content area              |
| \`--message-wrapper-content-width\`             | Width of the content area               |
| \`--message-wrapper-content-z-index\`           | Z-index of the content area             |

#### Shadow DOM Parts

| Part Name           | Element             | Description              |
|---------------------|---------------------|--------------------------|
| \`outer-wrapper\`     | Outer container      | Wrapper container        |
| \`message-container\` | Message box          | Inner message container  |
| \`message\`           | Message text (\`<p>\`) | The actual message text  |
| \`content\`           | Slot content         | Main content area        |

---

### How to Show Messages Globally

Use the global \`Message\` handler to display messages anywhere in your app:

\`\`\`ts
// Show an info message
Message.showInfo('Your info message', 3000);

// Show a success message
Message.showSuccess('Success!', 3000);

// Show an error message
Message.showError('Something went wrong', 3000);
\`\`\`

Message handler function type:
\`\`\`ts
Message.showFunction(message: string, duration?: number)\`
\`\`\`
- \`message\`: The text to display.
- \`duration\` (optional): How long to show the message (in milliseconds, default is 3000).

Just call one of these functions and the message will appear in the overlay.
        `,
      },
    },
  },
  argTypes: {
    // Layout
    compHeight: {
      control: 'text',
      description: 'Height of the outer component container',
      table: { category: 'Layout', defaultValue: { summary: '100%' } },
    },
    compWidth: {
      control: 'text',
      description: 'Width of the outer component container',
      table: { category: 'Layout', defaultValue: { summary: '100%' } },
    },
    compZindex: {
      control: 'text',
      description: 'Z-index for layering control',
      table: { category: 'Layout', defaultValue: { summary: '1000000000' } },
    },
    wrapperHeight: {
      control: 'text',
      description: 'Height of the wrapper element',
      table: { category: 'Layout', defaultValue: { summary: '100%' } },
    },
    wrapperWidth: {
      control: 'text',
      description: 'Width of the wrapper element',
      table: { category: 'Layout', defaultValue: { summary: '100%' } },
    },
    wrapperOverflowX: {
      control: 'text',
      description: 'Overflow-x of the wrapper container',
      table: { category: 'Layout', defaultValue: { summary: 'hidden' } },
    },
    wrapperOverflowY: {
      control: 'text',
      description: 'Overflow-y of the wrapper container',
      table: { category: 'Layout', defaultValue: { summary: 'hidden' } },
    },

    // Message
    messageHeight: {
      control: 'text',
      description: 'Height of the message container',
      table: { category: 'Message', defaultValue: { summary: 'fit-content' } },
    },
    messageWidth: {
      control: 'text',
      description: 'Width of the message container',
      table: { category: 'Message', defaultValue: { summary: '250px' } },
    },
    messageLineHeight: {
      control: 'text',
      description: 'Line height of the message text',
      table: { category: 'Message', defaultValue: { summary: '18px' } },
    },
    messagePad: {
      control: 'text',
      description: 'Padding inside the message container',
      table: { category: 'Message', defaultValue: { summary: '15px' } },
    },
    messageTop: {
      control: 'text',
      description: 'Top offset for the message box',
      table: { category: 'Message', defaultValue: { summary: '20px' } },
    },
    messageBottom: {
      control: 'text',
      description: 'Bottom offset for the message box',
      table: { category: 'Message', defaultValue: { summary: 'auto' } },
    },
    messageLeft: {
      control: 'text',
      description: 'Left offset for the message box',
      table: { category: 'Message', defaultValue: { summary: '50%' } },
    },
    messageRight: {
      control: 'text',
      description: 'Right offset for the message box',
      table: { category: 'Message', defaultValue: { summary: '50%' } },
    },
    messageColor: {
      control: 'color',
      description: 'Background color of the message box',
      table: { category: 'Message', defaultValue: { summary: '#eceff1' } },
    },
    messageShadow: {
      control: 'text',
      description: 'Box shadow applied to the message container',
      table: {
        category: 'Message',
        defaultValue: { summary: '0px 2px 5px #d0d0d0' },
      },
    },
    messageFontSize: {
      control: 'text',
      description: 'Font size of the message text',
      table: { category: 'Message', defaultValue: { summary: '14px' } },
    },
    messageFontWeight: {
      control: 'text',
      description: 'Font weight of the message text',
      table: { category: 'Message', defaultValue: { summary: 'bold' } },
    },
    messageFontFamily: {
      control: 'text',
      description: 'Font family used in the message text',
      table: {
        category: 'Message',
        defaultValue: { summary: `'Helvetica', 'Arial', sans-serif` },
      },
    },
    messageTransform: {
      control: 'text',
      description: 'Text transformation (e.g., uppercase)',
      table: { category: 'Message', defaultValue: { summary: 'none' } },
    },
    messageAlign: {
      control: 'text',
      description: 'Text alignment inside the message box',
      table: { category: 'Message', defaultValue: { summary: 'center' } },
    },

    // Colors
    infoColor: {
      control: 'color',
      description: 'Color used for informational messages',
      table: { category: 'Colors', defaultValue: { summary: 'black' } },
    },
    successColor: {
      control: 'color',
      description: 'Color used for success messages',
      table: { category: 'Colors', defaultValue: { summary: 'green' } },
    },
    errorColor: {
      control: 'color',
      description: 'Color used for error messages',
      table: { category: 'Colors', defaultValue: { summary: 'red' } },
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
      table: { category: 'Content', defaultValue: { summary: '100%' } },
    },
    contentZindex: {
      control: 'text',
      description: 'Z-index of the content area',
      table: { category: 'Content', defaultValue: { summary: '1' } },
    },
  },
};

export default meta;

export const Default: StoryFn<MessageWrapperProps> = (args) => html`
  <div
    style="border: 1px solid #ccc; height: ${args.compHeight}; width: ${args.compWidth}; position: relative;"
  >
    <message-wrapper
      .compHeight=${args.compHeight}
      .compWidth=${args.compWidth}
      .compZindex=${args.compZindex}
      .wrapperHeight=${args.wrapperHeight}
      .wrapperWidth=${args.wrapperWidth}
      .wrapperOverflowX=${args.wrapperOverflowX}
      .wrapperOverflowY=${args.wrapperOverflowY}
      .messageHeight=${args.messageHeight}
      .messageWidth=${args.messageWidth}
      .messageLineHeight=${args.messageLineHeight}
      .messagePad=${args.messagePad}
      .messageTop=${args.messageTop}
      .messageBottom=${args.messageBottom}
      .messageLeft=${args.messageLeft}
      .messageRight=${args.messageRight}
      .messageColor=${args.messageColor}
      .messageShadow=${args.messageShadow}
      .messageFontSize=${args.messageFontSize}
      .messageFontWeight=${args.messageFontWeight}
      .messageFontFamily=${args.messageFontFamily}
      .messageTransform=${args.messageTransform}
      .messageAlign=${args.messageAlign}
      .infoColor=${args.infoColor}
      .successColor=${args.successColor}
      .errorColor=${args.errorColor}
      .contentHeight=${args.contentHeight}
      .contentWidth=${args.contentWidth}
      .contentZindex=${args.contentZindex}
    >
      <div
        style="
          height: 100%;
          width: 100%;
          box-sizing: border-box;
          display: flex;
          justify-content: center;
          align-items: center;"
      >
        <content-window compHeight="fit-content" compWidth="fit-content">
          <text-button
            compWidth="200px"
            .handleClick=${() =>
              Message.showInfo(
                'This is info - Long Text Example That Should Wrap If Needed'
              )}
            text="Show Info"
          ></text-button>
          <text-button
            compWidth="200px"
            .handleClick=${() => Message.showSuccess('This is success')}
            text="Show Success"
          ></text-button>
          <text-button
            compWidth="200px"
            .handleClick=${() => Message.showError('This is error')}
            text="Show Error"
          ></text-button>
        </content-window>
      </div>
    </message-wrapper>
  </div>
`;

Default.args = {
  compHeight: '350px',
  compWidth: '350px',
  compZindex: '1000000000',
  wrapperHeight: '100%',
  wrapperWidth: '100%',
  wrapperOverflowX: 'hidden',
  wrapperOverflowY: 'hidden',
  messageHeight: 'fit-content',
  messageWidth: '250px',
  messageLineHeight: '18px',
  messagePad: '15px',
  messageTop: '20px',
  messageBottom: 'auto',
  messageLeft: '50%',
  messageRight: '50%',
  messageColor: '#eceff1',
  messageShadow: '0px 2px 5px #d0d0d0',
  messageFontSize: '14px',
  messageFontWeight: 'bold',
  messageFontFamily: "'Helvetica', 'Arial', sans-serif",
  messageTransform: 'none',
  messageAlign: 'center',
  infoColor: 'black',
  successColor: 'green',
  errorColor: 'red',
  contentHeight: '100%',
  contentWidth: '100%',
  contentZindex: '1',
};
