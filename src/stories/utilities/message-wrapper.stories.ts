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
  messageHeight?: string;
  messageWidth?: string;
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
};

const meta: Meta<MessageWrapperProps> = {
  title: 'Components/Utilities/Message Wrapper',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### \`<message-wrapper>\`

Used for displaying contextual messages such as info, success, or error banners. Typically, you should wrap your entire app (or the main container) with this component to enable global message display anywhere in your application.

#### CSS Custom Properties

| Variable                                 | Description                             |
|------------------------------------------|-----------------------------------------|
| \`--message-wrapper-comp-height\`         | Outer component height                  |
| \`--message-wrapper-comp-width\`          | Outer component width                   |
| \`--message-wrapper-z-index\`             | Z-index for the component               |
| \`--message-wrapper-height\`              | Height of outer wrapper                 |
| \`--message-wrapper-width\`               | Width of outer wrapper                  |
| \`--message-wrapper-message-padding\`     | Padding inside the message container    |
| \`--message-wrapper-message-height\`      | Height of message container             |
| \`--message-wrapper-message-width\`       | Width of message container              |
| \`--message-wrapper-message-top\`         | Top offset                              |
| \`--message-wrapper-message-bottom\`      | Bottom offset                           |
| \`--message-wrapper-message-left\`        | Left offset                             |
| \`--message-wrapper-message-right\`       | Right offset                            |
| \`--message-wrapper-message-color\`       | Background color                        |
| \`--message-wrapper-message-shadow\`      | Shadow applied to the message box       |
| \`--message-wrapper-message-font-size\`   | Font size of message text               |
| \`--message-wrapper-message-font-weight\` | Font weight of message text             |
| \`--message-wrapper-message-font-family\` | Font family of message text             |
| \`--message-wrapper-message-text-transform\` | Text transformation (e.g., uppercase) |
| \`--message-wrapper-message-align\`       | Text alignment                          |
| \`--message-wrapper-info-color\`          | Color for informational text            |
| \`--message-wrapper-success-color\`       | Color for success text                  |
| \`--message-wrapper-error-color\`         | Color for error text                    |

#### Shadow DOM Parts

| Part Name           | Element             | Description              |
|---------------------|---------------------|--------------------------|
| \`outer-wrapper\`     | Outer container      | Wrapper container        |
| \`message-container\` | Message box          | Inner message container  |
| \`message\`           | Message text (\`<p>\`) | The actual message text  |

### How to use the \`Message\` functions

The global \`Message\` object allows you to show contextual messages anywhere in your app, provided there is a \`<message-wrapper>\` element on the page.

---

#### \`Message.showInfo(message: string, duration?: number)\`

Displays an informational message.

\`\`\`ts
Message.showInfo('Informational message', 3000);
\`\`\`

- \`message\`: The info message text to display.  
- \`duration\` (optional): How long to display the message in milliseconds (default: 3000).

---

#### \`Message.showSuccess(message: string, duration?: number)\`

Displays a success message.

\`\`\`ts
Message.showSuccess('Success message', 3000);
\`\`\`

- \`message\`: The success message text to display.  
- \`duration\` (optional): How long to display the message in milliseconds (default: 3000).

---

#### \`Message.showError(message: string, duration?: number)\`

Displays an error message.

\`\`\`ts
Message.showError('Error message', 3000);
\`\`\`

- \`message\`: The error message text to display.  
- \`duration\` (optional): How long to display the message in milliseconds (default: 3000).

---

Messages appear inside the global \`<message-wrapper>\` element and hide automatically after the duration expires.

        `,
      },
    },
  },
  argTypes: {
    compHeight: {
      control: 'text',
      description: 'Height of the outer component container',
      table: { defaultValue: { summary: '100%' }, category: 'Props' },
    },
    compWidth: {
      control: 'text',
      description: 'Width of the outer component container',
      table: { defaultValue: { summary: '100%' }, category: 'Props' },
    },
    compZindex: {
      control: 'text',
      description: 'Z-index for layering control',
      table: { defaultValue: { summary: '1000000000' }, category: 'Props' },
    },
    wrapperHeight: {
      control: 'text',
      description: 'Height of the wrapper element',
      table: { defaultValue: { summary: '100%' }, category: 'Props' },
    },
    wrapperWidth: {
      control: 'text',
      description: 'Width of the wrapper element',
      table: { defaultValue: { summary: '100%' }, category: 'Props' },
    },
    messageHeight: {
      control: 'text',
      description: 'Height of the message container',
      table: { defaultValue: { summary: 'fit-content' }, category: 'Props' },
    },
    messageWidth: {
      control: 'text',
      description: 'Width of the message container',
      table: { defaultValue: { summary: 'fit-content' }, category: 'Props' },
    },
    messagePad: {
      control: 'text',
      description: 'Padding inside the message container',
      table: { defaultValue: { summary: '5px' }, category: 'Props' },
    },
    messageTop: {
      control: 'text',
      description: 'Top offset for the message box',
      table: { defaultValue: { summary: '20px' }, category: 'Props' },
    },
    messageBottom: {
      control: 'text',
      description: 'Bottom offset for the message box',
      table: { defaultValue: { summary: 'auto' }, category: 'Props' },
    },
    messageLeft: {
      control: 'text',
      description: 'Left offset for the message box',
      table: { defaultValue: { summary: 'auto' }, category: 'Props' },
    },
    messageRight: {
      control: 'text',
      description: 'Right offset for the message box',
      table: { defaultValue: { summary: 'auto' }, category: 'Props' },
    },
    messageColor: {
      control: 'color',
      description: 'Background color of the message box',
      table: { defaultValue: { summary: '#eceff1' }, category: 'Props' },
    },
    messageShadow: {
      control: 'text',
      description: 'Box shadow applied to the message container',
      table: {
        defaultValue: { summary: '0px 2px 5px #d0d0d0' },
        category: 'Props',
      },
    },
    messageFontSize: {
      control: 'text',
      description: 'Font size of the message text',
      table: { defaultValue: { summary: '90%' }, category: 'Props' },
    },
    messageFontWeight: {
      control: 'text',
      description: 'Font weight of the message text',
      table: { defaultValue: { summary: 'bold' }, category: 'Props' },
    },
    messageFontFamily: {
      control: 'text',
      description: 'Font family used in the message text',
      table: {
        defaultValue: { summary: `'Helvetica', 'Arial', sans-serif` },
        category: 'Props',
      },
    },
    messageTransform: {
      control: 'text',
      description: 'Text transformation (e.g., uppercase)',
      table: { defaultValue: { summary: 'none' }, category: 'Props' },
    },
    messageAlign: {
      control: 'text',
      description: 'Text alignment inside the message box',
      table: { defaultValue: { summary: 'start' }, category: 'Props' },
    },
    infoColor: {
      control: 'color',
      description: 'Color used for informational messages',
      table: { defaultValue: { summary: 'black' }, category: 'Props' },
    },
    successColor: {
      control: 'color',
      description: 'Color used for success messages',
      table: { defaultValue: { summary: 'green' }, category: 'Props' },
    },
    errorColor: {
      control: 'color',
      description: 'Color used for error messages',
      table: { defaultValue: { summary: 'red' }, category: 'Props' },
    },
  },
};

export default meta;

export const Default: StoryFn<MessageWrapperProps> = (args) => html`
  <div
    style="border: 1px solid black; height: ${args.compHeight}; width: ${args.compWidth};"
  >
    <message-wrapper
      .compHeight=${args.compHeight}
      .compWidth=${args.compWidth}
      .compZindex=${args.compZindex}
      .wrapperHeight=${args.wrapperHeight}
      .wrapperWidth=${args.wrapperWidth}
      .messageHeight=${args.messageHeight}
      .messageWidth=${args.messageWidth}
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
    >
      <content-window style="position: absolute; left: 10%; bottom: 10%;">
        <text-button
          buttonWidth="200px"
          .onClick=${() => Message.showInfo('This is info')}
          tagText="Show Info"
        ></text-button>
        <text-button
          buttonWidth="200px"
          .onClick=${() => Message.showSuccess('This is success')}
          tagText="Show Success"
        ></text-button>
        <text-button
          buttonWidth="200px"
          .onClick=${() => Message.showError('This is error')}
          tagText="Show Error"
        ></text-button>
      </content-window>
    </message-wrapper>
  </div>
`;

Default.args = {
  compHeight: '350px',
  compWidth: '350px',
  compZindex: '1000000000',
  wrapperHeight: '100%',
  wrapperWidth: '100%',
  messageHeight: '50px',
  messageWidth: '200px',
  messagePad: '5px',
  messageTop: '40px',
  messageBottom: 'auto',
  messageLeft: '50%',
  messageRight: '50%',
  messageColor: '#eceff1',
  messageShadow: '0px 2px 5px #d0d0d0',
  messageFontSize: '16px',
  messageFontWeight: 'bold',
  messageFontFamily: 'Arial, sans-serif',
  messageTransform: 'none',
  messageAlign: 'center',
  infoColor: 'black',
  successColor: 'green',
  errorColor: 'red',
};
