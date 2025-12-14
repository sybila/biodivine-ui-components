import { html } from 'lit';
import type { Meta, StoryFn } from '@storybook/web-components-vite';
import '../../components/utilities/page-selector';

type PageSelectorProps = {
  compHeight?: string;
  compWidth?: string;
  contHeight?: string;
  contWidth?: string;
  contOverflowX?: string;
  contOverflowY?: string;
  buttonsCenterGap?: string;
  buttonHeight?: string;
  buttonWidth?: string;
  buttonColor?: string;
  buttonHoverColor?: string;
  buttonDisabledColor?: string;
  buttonRadius?: string;
  buttonShadow?: string;
  leftButtonIconHeight?: string;
  leftButtonIconWidth?: string;
  leftButtonIconSrc?: string;
  rightButtonIconHeight?: string;
  rightButtonIconWidth?: string;
  rightButtonIconSrc?: string;
  centerHeight?: string;
  centerMinWidth?: string;
  centerMaxWidth?: string;
  centerColor?: string;
  centerRadius?: string;
  centerShadow?: string;
  centerFontSize?: string;
  centerFontWeight?: string;
  centerFontFamily?: string;
  centerTextColor?: string;
  initialPage?: number;
  nextPageExists?: boolean;
  handlePageChange?: (page: number) => void;
};

const meta: Meta<PageSelectorProps> = {
  title: 'Components/Utilities/Page Selector',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### \`<page-selector>\`

A component for selecting pages with left/right buttons and a center indicator.

#### CSS Custom Properties

| Variable                                   | Description                              |
|---------------------------------------------|------------------------------------------|
| \`--page-selector-comp-height\`             | Outer wrapper height                     |
| \`--page-selector-comp-width\`              | Outer wrapper width                      |
| \`--page-selector-container-height\`        | Container height                         |
| \`--page-selector-container-width\`         | Container width                          |
| \`--page-selector-container-overflow-x\`    | Container overflow-x                     |
| \`--page-selector-container-overflow-y\`    | Container overflow-y                     |
| \`--page-selector-buttons-center-gap\`      | Gap between buttons and center           |
| \`--page-selector-button-height\`           | Button height                            |
| \`--page-selector-button-width\`            | Button width                             |
| \`--page-selector-button-color\`            | Button color                             |
| \`--page-selector-button-hover-color\`      | Button color on hover                    |
| \`--page-selector-button-disabled-color\`   | Button color when disabled               |
| \`--page-selector-button-radius\`           | Button border radius                     |
| \`--page-selector-button-shadow\`           | Button box shadow                        |
| \`--page-selector-left-button-icon-height\` | Left button icon height                  |
| \`--page-selector-left-button-icon-width\`  | Left button icon width                   |
| \`--page-selector-right-button-icon-height\`| Right button icon height                 |
| \`--page-selector-right-button-icon-width\` | Right button icon width                  |
| \`--page-selector-center-height\`           | Center indicator height                  |
| \`--page-selector-center-min-width\`        | Center indicator min width               |
| \`--page-selector-center-max-width\`        | Center indicator max width               |
| \`--page-selector-center-color\`            | Center indicator background color        |
| \`--page-selector-center-radius\`           | Center indicator border radius           |
| \`--page-selector-center-shadow\`           | Center indicator box shadow              |
| \`--page-selector-center-font-size\`        | Center indicator font size               |
| \`--page-selector-center-font-weight\`      | Center indicator font weight             |
| \`--page-selector-center-font-family\`      | Center indicator font family             |
| \`--page-selector-center-text-color\`       | Center indicator text color              |

#### Shadow DOM Parts

| Part Name           | Description                        |
|---------------------|------------------------------------|
| \`container\`         | Wrapper div for the whole control  |
| \`left-button\`       | Left navigation button             |
| \`left-button-icon\`  | Icon inside left button            |
| \`center-indicator\`  | Center page indicator              |
| \`right-button\`      | Right navigation button            |
| \`right-button-icon\` | Icon inside right button           |
        `,
      },
    },
  },
  argTypes: {
    compHeight: {
      control: 'text',
      description: 'Height of outer component',
      table: { defaultValue: { summary: '50px' }, category: 'Layout' },
    },
    compWidth: {
      control: 'text',
      description: 'Width of outer component',
      table: { defaultValue: { summary: '100px' }, category: 'Layout' },
    },
    contHeight: {
      control: 'text',
      description: 'Height of container',
      table: { defaultValue: { summary: '100%' }, category: 'Container' },
    },
    contWidth: {
      control: 'text',
      description: 'Width of container',
      table: { defaultValue: { summary: '100%' }, category: 'Container' },
    },
    contOverflowX: {
      control: 'text',
      description: 'Overflow-x of container',
      table: { defaultValue: { summary: 'hidden' }, category: 'Container' },
    },
    contOverflowY: {
      control: 'text',
      description: 'Overflow-y of container',
      table: { defaultValue: { summary: 'hidden' }, category: 'Container' },
    },
    buttonsCenterGap: {
      control: 'text',
      description: 'Gap between buttons and center indicator',
      table: { defaultValue: { summary: '8px' }, category: 'Layout' },
    },
    buttonHeight: {
      control: 'text',
      description: 'Button height',
      table: { defaultValue: { summary: '30px' }, category: 'Button' },
    },
    buttonWidth: {
      control: 'text',
      description: 'Button width',
      table: { defaultValue: { summary: '30px' }, category: 'Button' },
    },
    buttonColor: {
      control: 'color',
      description: 'Button color',
      table: { defaultValue: { summary: '#eceff1' }, category: 'Button' },
    },
    buttonHoverColor: {
      control: 'color',
      description: 'Button color on hover',
      table: { defaultValue: { summary: '#b0bec5' }, category: 'Button' },
    },
    buttonDisabledColor: {
      control: 'color',
      description: 'Button color when disabled',
      table: { defaultValue: { summary: '#b1b1b1ff' }, category: 'Button' },
    },
    buttonRadius: {
      control: 'text',
      description: 'Button border radius',
      table: { defaultValue: { summary: '4px' }, category: 'Button' },
    },
    buttonShadow: {
      control: 'text',
      description: 'Button box shadow',
      table: {
        defaultValue: { summary: '0px 2px 5px #d0d0d0' },
        category: 'Button',
      },
    },
    leftButtonIconHeight: {
      control: 'text',
      description: 'Left button icon height',
      table: { defaultValue: { summary: '70%' }, category: 'Button' },
    },
    leftButtonIconWidth: {
      control: 'text',
      description: 'Left button icon width',
      table: { defaultValue: { summary: '70%' }, category: 'Button' },
    },
    leftButtonIconSrc: {
      control: 'text',
      description: 'Left button icon src',
      table: { defaultValue: { summary: 'undefined' }, category: 'Button' },
    },
    rightButtonIconHeight: {
      control: 'text',
      description: 'Right button icon height',
      table: { defaultValue: { summary: '70%' }, category: 'Button' },
    },
    rightButtonIconWidth: {
      control: 'text',
      description: 'Right button icon width',
      table: { defaultValue: { summary: '70%' }, category: 'Button' },
    },
    rightButtonIconSrc: {
      control: 'text',
      description: 'Right button icon src',
      table: { defaultValue: { summary: 'undefined' }, category: 'Button' },
    },
    centerHeight: {
      control: 'text',
      description: 'Center indicator height',
      table: { defaultValue: { summary: '30px' }, category: 'Center' },
    },
    centerMinWidth: {
      control: 'text',
      description: 'Center indicator min width',
      table: { defaultValue: { summary: '30px' }, category: 'Center' },
    },
    centerMaxWidth: {
      control: 'text',
      description: 'Center indicator max width',
      table: { defaultValue: { summary: 'fit-content' }, category: 'Center' },
    },
    centerColor: {
      control: 'color',
      description: 'Center indicator background color',
      table: { defaultValue: { summary: '#f3f2f1' }, category: 'Center' },
    },
    centerRadius: {
      control: 'text',
      description: 'Center indicator border radius',
      table: { defaultValue: { summary: '4px' }, category: 'Center' },
    },
    centerShadow: {
      control: 'text',
      description: 'Center indicator box shadow',
      table: {
        defaultValue: { summary: '0px 2px 5px #d0d0d0' },
        category: 'Center',
      },
    },
    centerFontSize: {
      control: 'text',
      description: 'Center indicator font size',
      table: { defaultValue: { summary: '14px' }, category: 'Center' },
    },
    centerFontWeight: {
      control: 'text',
      description: 'Center indicator font weight',
      table: { defaultValue: { summary: '600' }, category: 'Center' },
    },
    centerFontFamily: {
      control: 'text',
      description: 'Center indicator font family',
      table: {
        defaultValue: { summary: "'Helvetica', 'Arial', sans-serif" },
        category: 'Center',
      },
    },
    centerTextColor: {
      control: 'color',
      description: 'Center indicator text color',
      table: { defaultValue: { summary: '#000000' }, category: 'Center' },
    },
    initialPage: {
      control: 'number',
      description: 'Initial page number',
      table: { defaultValue: { summary: undefined }, category: 'Pages' },
    },
    nextPageExists: {
      control: 'boolean',
      description: 'Whether a next page exists',
      table: { defaultValue: { summary: 'false' }, category: 'Pages' },
    },
    handlePageChange: {
      action: 'pageChanged',
      description: 'Callback when page changes',
      table: {
        type: { summary: '(page: number) => void' },
        category: 'Events',
      },
      control: false,
    },
  },
};

export default meta;

export const Default: StoryFn<PageSelectorProps> = (args) => html`
  <page-selector
    .compHeight=${args.compHeight}
    .compWidth=${args.compWidth}
    .contHeight=${args.contHeight}
    .contWidth=${args.contWidth}
    .contOverflowX=${args.contOverflowX}
    .contOverflowY=${args.contOverflowY}
    .buttonsCenterGap=${args.buttonsCenterGap}
    .buttonHeight=${args.buttonHeight}
    .buttonWidth=${args.buttonWidth}
    .buttonColor=${args.buttonColor}
    .buttonHoverColor=${args.buttonHoverColor}
    .buttonDisabledColor=${args.buttonDisabledColor}
    .buttonRadius=${args.buttonRadius}
    .buttonShadow=${args.buttonShadow}
    .leftButtonIconHeight=${args.leftButtonIconHeight}
    .leftButtonIconWidth=${args.leftButtonIconWidth}
    .leftButtonIconSrc=${args.leftButtonIconSrc}
    .rightButtonIconHeight=${args.rightButtonIconHeight}
    .rightButtonIconWidth=${args.rightButtonIconWidth}
    .rightButtonIconSrc=${args.rightButtonIconSrc}
    .centerHeight=${args.centerHeight}
    .centerMinWidth=${args.centerMinWidth}
    .centerMaxWidth=${args.centerMaxWidth}
    .centerColor=${args.centerColor}
    .centerRadius=${args.centerRadius}
    .centerShadow=${args.centerShadow}
    .centerFontSize=${args.centerFontSize}
    .centerFontWeight=${args.centerFontWeight}
    .centerFontFamily=${args.centerFontFamily}
    .centerTextColor=${args.centerTextColor}
    .initialPage=${args.initialPage}
    .nextPageExists=${args.nextPageExists}
    .handlePageChange=${args.handlePageChange}
  ></page-selector>
`;

Default.args = {
  compHeight: '50px',
  compWidth: '200px',
  contHeight: '100%',
  contWidth: '100%',
  contOverflowX: 'hidden',
  contOverflowY: 'hidden',
  buttonsCenterGap: '8px',
  buttonHeight: '30px',
  buttonWidth: '30px',
  buttonColor: '#eceff1',
  buttonHoverColor: '#b0bec5',
  buttonDisabledColor: '#b1b1b1ff',
  buttonRadius: '4px',
  buttonShadow: '0px 2px 5px #d0d0d0',
  leftButtonIconHeight: '70%',
  leftButtonIconWidth: '70%',
  leftButtonIconSrc: undefined,
  rightButtonIconHeight: '70%',
  rightButtonIconWidth: '70%',
  rightButtonIconSrc: undefined,
  centerHeight: '30px',
  centerMinWidth: '30px',
  centerMaxWidth: 'fit-content',
  centerColor: '#f3f2f1',
  centerRadius: '4px',
  centerShadow: '0px 2px 5px #d0d0d0',
  centerFontSize: '14px',
  centerFontWeight: '600',
  centerFontFamily: "'Helvetica', 'Arial', sans-serif",
  centerTextColor: '#000000',
  initialPage: undefined,
  nextPageExists: true,
};
