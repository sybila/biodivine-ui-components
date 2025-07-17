import '../../components/utilities/loading-wrapper';
import '../../components/buttons/text-button';
import { html } from 'lit';
import type { Meta, StoryFn } from '@storybook/web-components';
import { Loading } from '../../components/utilities/loading-wrapper';

type LoadingWrapperProps = {
  compHeight?: string;
  compWidth?: string;
  compZindex?: string;
  wrapperHeight?: string;
  wrapperWidth?: string;
  loadContHeight?: string;
  loadContWidth?: string;
  loadContTop?: string;
  loadContBottom?: string;
  loadContLeft?: string;
  loadContRight?: string;
};

const meta: Meta<LoadingWrapperProps> = {
  title: 'Components/Utilities/Loading Wrapper',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### \`<loading-wrapper>\`

Used to show a loading indicator globally in the app. Should be placed once at the root of your application, and loading can be toggled using the global \`Loading\` handler.

---

#### CSS Custom Properties

| Variable                                   | Description                              |
|--------------------------------------------|------------------------------------------|
| \`--loading-wrapper-comp-height\`           | Height of the outer wrapper component     |
| \`--loading-wrapper-comp-width\`            | Width of the outer wrapper component      |
| \`--loading-wrapper-z-index\`               | Z-index for loading overlay               |
| \`--loading-wrapper-height\`                | Height of the wrapper container           |
| \`--loading-wrapper-width\`                 | Width of the wrapper container            |
| \`--loading-wrapper-container-height\`      | Height of the loading component container |
| \`--loading-wrapper-container-width\`       | Width of the loading component container  |
| \`--loading-wrapper-container-top\`         | Top offset of the loading component container         |
| \`--loading-wrapper-container-bottom\`      | Bottom offset of the loading component container      |
| \`--loading-wrapper-container-left\`        | Left offset of the loading component container        |
| \`--loading-wrapper-container-right\`       | Right offset of the loading component container       |

---

#### Shadow DOM Parts

| Part Name          | Element             | Description                          |
|--------------------|---------------------|--------------------------------------|
| \`outer-wrapper\`    | Outer container      | Full-screen container                |
| \`loading-container\` | Inner loading box    | Centered overlay for slot content    |
| \`loading-component\` | Slot content         | Your actual loading spinner/message  |

---

### Global \`Loading\` Handler

You can control visibility with the global handler:

#### \`Loading.startLoading()\`

Shows the loading overlay if a \`<loading-wrapper>\` is on the page.

#### \`Loading.endLoading()\`

Hides the loading overlay.

        `,
      },
    },
  },
  argTypes: {
    compHeight: {
      control: 'text',
      description: 'Height of the outer component',
      table: { defaultValue: { summary: '100%' }, category: 'Props' },
    },
    compWidth: {
      control: 'text',
      description: 'Width of the outer component',
      table: { defaultValue: { summary: '100%' }, category: 'Props' },
    },
    compZindex: {
      control: 'text',
      description: 'Z-index of the loading overlay',
      table: { defaultValue: { summary: '999999999' }, category: 'Props' },
    },
    wrapperHeight: {
      control: 'text',
      description: 'Height of the internal wrapper',
      table: { defaultValue: { summary: '100%' }, category: 'Props' },
    },
    wrapperWidth: {
      control: 'text',
      description: 'Width of the internal wrapper',
      table: { defaultValue: { summary: '100%' }, category: 'Props' },
    },
    loadContHeight: {
      control: 'text',
      description: 'Height of the loading container',
      table: { defaultValue: { summary: 'fit-content' }, category: 'Props' },
    },
    loadContWidth: {
      control: 'text',
      description: 'Width of the loading container',
      table: { defaultValue: { summary: 'fit-content' }, category: 'Props' },
    },
    loadContTop: {
      control: 'text',
      description: 'Top offset of the loading box',
      table: { defaultValue: { summary: '20px' }, category: 'Props' },
    },
    loadContBottom: {
      control: 'text',
      description: 'Bottom offset of the loading box',
      table: { defaultValue: { summary: 'auto' }, category: 'Props' },
    },
    loadContLeft: {
      control: 'text',
      description: 'Left offset of the loading box',
      table: { defaultValue: { summary: '50%' }, category: 'Props' },
    },
    loadContRight: {
      control: 'text',
      description: 'Right offset of the loading box',
      table: { defaultValue: { summary: '50%' }, category: 'Props' },
    },
  },
};

export default meta;

export const Default: StoryFn<LoadingWrapperProps> = (args) => html`
  <div
    style="border: 1px solid #ccc; height: ${args.compHeight}; width: ${args.compWidth}; position: relative;"
  >
    <loading-wrapper
      .compHeight=${args.compHeight}
      .compWidth=${args.compWidth}
      .compZindex=${args.compZindex}
      .wrapperHeight=${args.wrapperHeight}
      .wrapperWidth=${args.wrapperWidth}
      .loadContHeight=${args.loadContHeight}
      .loadContWidth=${args.loadContWidth}
      .loadContTop=${args.loadContTop}
      .loadContBottom=${args.loadContBottom}
      .loadContLeft=${args.loadContLeft}
      .loadContRight=${args.loadContRight}
    >
      <div slot="loading-component">
        <div
          style="
            background: #333;
            color: white;
            padding: 10px 20px;
            border-radius: 20px;
            font-weight: bold;
            box-shadow: 0px 2px 8px rgba(0,0,0,0.3);
          "
        >
          Loading...
        </div>
      </div>

      <text-button
        tagText="Start Loading"
        buttonWidth="200px"
        .onClick=${() => Loading.startLoading()}
      ></text-button>
      <text-button
        tagText="Stop Loading"
        buttonWidth="200px"
        .onClick=${() => Loading.endLoading()}
      ></text-button>
    </loading-wrapper>
  </div>
`;

Default.args = {
  compHeight: '400px',
  compWidth: '400px',
  compZindex: '999999999',
  wrapperHeight: '100%',
  wrapperWidth: '100%',
  loadContHeight: 'fit-content',
  loadContWidth: 'fit-content',
  loadContTop: '50%',
  loadContBottom: 'auto',
  loadContLeft: '50%',
  loadContRight: 'auto',
};
