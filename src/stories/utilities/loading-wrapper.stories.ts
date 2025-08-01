import '../../components/utilities/loading-wrapper';
import '../../components/utilities/loading-indicator';
import '../../components/buttons/text-button';
import { html } from 'lit';
import type { Meta, StoryFn } from '@storybook/web-components';
import { Loading } from '../../components/utilities/loading-wrapper';

type LoadingWrapperProps = {
  /** Height of the outer wrapper component */
  compHeight?: string;
  /** Width of the outer wrapper component */
  compWidth?: string;
  /** Z-index for loading overlay */
  compZindex?: string;
  /** Height of the wrapper container */
  wrapperHeight?: string;
  /** Width of the wrapper container */
  wrapperWidth?: string;
  /** Overflow-x of the wrapper container */
  wrapperOverflowX?: string;
  /** Overflow-y of the wrapper container */
  wrapperOverflowY?: string;
  /** Height of the loading component container */
  loadContHeight?: string;
  /** Width of the loading component container */
  loadContWidth?: string;
  /** Top offset of the loading container */
  loadContTop?: string;
  /** Bottom offset of the loading container */
  loadContBottom?: string;
  /** Left offset of the loading container */
  loadContLeft?: string;
  /** Right offset of the loading container */
  loadContRight?: string;
  /** Height of the content area */
  contentHeight?: string;
  /** Width of the content area */
  contentWidth?: string;
  /** Z-index of the content area */
  contentZindex?: string;
};

const meta: Meta<LoadingWrapperProps> = {
  title: 'Components/Utilities/Loading Wrapper',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### \`<loading-wrapper>\`

A global loading overlay component. Place once at the root of your app and control visibility via the global \`Loading\` handler.

#### CSS Custom Properties

| Variable                                   | Description                              |
|--------------------------------------------|------------------------------------------|
| \`--loading-wrapper-comp-height\`           | Height of the outer wrapper component     |
| \`--loading-wrapper-comp-width\`            | Width of the outer wrapper component      |
| \`--loading-wrapper-z-index\`               | Z-index for loading overlay               |
| \`--loading-wrapper-height\`                | Height of the wrapper container           |
| \`--loading-wrapper-width\`                 | Width of the wrapper container            |
| \`--loading-wrapper-overflow-x\`            | Overflow-x of the wrapper container       |
| \`--loading-wrapper-overflow-y\`            | Overflow-y of the wrapper container       |
| \`--loading-wrapper-container-height\`      | Height of the loading component container |
| \`--loading-wrapper-container-width\`       | Width of the loading component container  |
| \`--loading-wrapper-container-top\`         | Top offset of the loading container       |
| \`--loading-wrapper-container-bottom\`      | Bottom offset of the loading container    |
| \`--loading-wrapper-container-left\`        | Left offset of the loading container      |
| \`--loading-wrapper-container-right\`       | Right offset of the loading container     |
| \`--loading-wrapper-content-height\`        | Height of the content area                |
| \`--loading-wrapper-content-width\`         | Width of the content area                 |
| \`--loading-wrapper-content-z-index\`       | Z-index of the content area               |

#### Shadow DOM Parts

| Part Name          | Element             | Description                          |
|--------------------|---------------------|--------------------------------------|
| \`outer-wrapper\`    | Outer container      | Full-screen container                |
| \`loading-container\` | Inner loading box    | Centered overlay for slot content    |
| \`loading-component\` | Slot content         | Your actual loading spinner/message  |
| \`content\`           | Slot content         | Main content area                    |

---

### Global \`Loading\` Handler

You can control visibility with the global handler:

- \`Loading.startLoading()\` — Shows the loading overlay.
- \`Loading.endLoading()\` — Hides the loading overlay.
        `,
      },
    },
  },
  argTypes: {
    compHeight: {
      control: 'text',
      description: 'Height of the outer wrapper component',
      table: { defaultValue: { summary: '100%' }, category: 'Layout' },
    },
    compWidth: {
      control: 'text',
      description: 'Width of the outer wrapper component',
      table: { defaultValue: { summary: '100%' }, category: 'Layout' },
    },
    compZindex: {
      control: 'text',
      description: 'Z-index for loading overlay',
      table: { defaultValue: { summary: '1000000000' }, category: 'Layout' },
    },
    wrapperHeight: {
      control: 'text',
      description: 'Height of the wrapper container',
      table: { defaultValue: { summary: '100%' }, category: 'Wrapper' },
    },
    wrapperWidth: {
      control: 'text',
      description: 'Width of the wrapper container',
      table: { defaultValue: { summary: '100%' }, category: 'Wrapper' },
    },
    wrapperOverflowX: {
      control: 'text',
      description: 'Overflow-x of the wrapper container',
      table: { defaultValue: { summary: 'hidden' }, category: 'Wrapper' },
    },
    wrapperOverflowY: {
      control: 'text',
      description: 'Overflow-y of the wrapper container',
      table: { defaultValue: { summary: 'hidden' }, category: 'Wrapper' },
    },
    loadContHeight: {
      control: 'text',
      description: 'Height of the loading component container',
      table: { defaultValue: { summary: 'fit-content' }, category: 'Loading' },
    },
    loadContWidth: {
      control: 'text',
      description: 'Width of the loading component container',
      table: { defaultValue: { summary: 'fit-content' }, category: 'Loading' },
    },
    loadContTop: {
      control: 'text',
      description: 'Top offset of the loading container',
      table: { defaultValue: { summary: '20px' }, category: 'Loading' },
    },
    loadContBottom: {
      control: 'text',
      description: 'Bottom offset of the loading container',
      table: { defaultValue: { summary: 'auto' }, category: 'Loading' },
    },
    loadContLeft: {
      control: 'text',
      description: 'Left offset of the loading container',
      table: { defaultValue: { summary: '50%' }, category: 'Loading' },
    },
    loadContRight: {
      control: 'text',
      description: 'Right offset of the loading container',
      table: { defaultValue: { summary: '50%' }, category: 'Loading' },
    },
    contentHeight: {
      control: 'text',
      description: 'Height of the content area',
      table: { defaultValue: { summary: '100%' }, category: 'Content' },
    },
    contentWidth: {
      control: 'text',
      description: 'Width of the content area',
      table: { defaultValue: { summary: '100%' }, category: 'Content' },
    },
    contentZindex: {
      control: 'text',
      description: 'Z-index of the content area',
      table: { defaultValue: { summary: '1' }, category: 'Content' },
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
      .wrapperOverflowX=${args.wrapperOverflowX}
      .wrapperOverflowY=${args.wrapperOverflowY}
      .loadContHeight=${args.loadContHeight}
      .loadContWidth=${args.loadContWidth}
      .loadContTop=${args.loadContTop}
      .loadContBottom=${args.loadContBottom}
      .loadContLeft=${args.loadContLeft}
      .loadContRight=${args.loadContRight}
      .contentHeight=${args.contentHeight}
      .contentWidth=${args.contentWidth}
      .contentZindex=${args.contentZindex}
    >
      <loading-indicator
        loadingMessage="Loading..."
        slot="loading-component"
      ></loading-indicator>

      <div
        style="
          height: 100%;
          width: 100%;
          box-sizing: border-box;
          display: flex;
          justify-content: center;
          align-items: end;
          gap: 16px;
          padding: 10px;
        "
      >
        <text-button
          text="Start Loading"
          compWidth="100px"
          .handleClick=${() => Loading.startLoading()}
        ></text-button>
        <text-button
          text="Stop Loading"
          compWidth="100px"
          .handleClick=${() => Loading.endLoading()}
        ></text-button>
      </div>
    </loading-wrapper>
  </div>
`;

Default.args = {
  compHeight: '400px',
  compWidth: '400px',
  compZindex: '1000000000',
  wrapperHeight: '100%',
  wrapperWidth: '100%',
  wrapperOverflowX: 'hidden',
  wrapperOverflowY: 'hidden',
  loadContHeight: 'fit-content',
  loadContWidth: 'fit-content',
  loadContTop: '20px',
  loadContBottom: 'auto',
  loadContLeft: '50%',
  loadContRight: '50%',
  contentHeight: '100%',
  contentWidth: '100%',
  contentZindex: '1',
};
