import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

type StyleProperty =
  | 'compWidth'
  | 'compBgColor'
  | 'compBorder'
  | 'compBorderRadius'
  | 'compShadow'
  | 'contentHeight'
  | 'contentJustifyContent'
  | 'contentAlignItems'
  | 'contentPadding'
  | 'contentOverflowX'
  | 'contentOverflowY'
  | 'buttonHeight'
  | 'buttonHoverColor'
  | 'iconHeight'
  | 'iconWidth'
  | 'iconVisibilityTransform';

@customElement('vertical-hidable-content')
export class VerticalHidableContent extends LitElement {
  @property({ type: String }) declare compWidth?: string;
  @property({ type: String }) declare compBgColor?: string;
  @property({ type: String }) declare compBorder?: string;
  @property({ type: String }) declare compBorderRadius?: string;
  @property({ type: String }) declare compShadow?: string;

  @property({ type: String }) declare contentHeight?: string;
  @property({ type: String }) declare contentJustifyContent?: string;
  @property({ type: String }) declare contentAlignItems?: string;
  @property({ type: String }) declare contentPadding?: string;
  @property({ type: String }) declare contentOverflowX?: string;
  @property({ type: String }) declare contentOverflowY?: string;

  @property({ type: String }) declare buttonHeight?: string;
  @property({ type: String }) declare buttonHoverColor?: string;

  @property({ type: String }) declare iconHeight?: string;
  @property({ type: String }) declare iconWidth?: string;
  @property({ type: String }) declare iconSrc?: string;
  @property({ type: String }) declare iconAlt?: string;
  @property({ type: String }) declare iconVisibilityTransform?: string;

  @property({ type: Boolean }) declare buttonDown?: boolean;

  @property({ type: Boolean }) declare contentVisible?: boolean;

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;

      height: fit-content;
      width: fit-content;
      overflow: hidden;

      background-color: var(--hidable-content-comp-bg-color, #eceff1);
      border: var(--hidable-content-comp-border, none);
      border-radius: var(--hidable-content-comp-border-radius, 5px);
      box-shadow: var(--hidable-content-comp-shadow, none);
    }

    #content {
      display: flex;
      flex-direction: column;

      height: var(--hidable-content-content-height, 200px);
      width: var(--hidable-content-component-width, 200px);

      justify-content: var(--hidable-content-content-justify-content, start);
      align-items: var(--hidable-content-content-align-items, center);

      box-sizing: border-box;

      overflow-x: var(--hidable-content-content-overflow-x, hidden);
      overflow-y: var(--hidable-content-content-overflow-y, hidden);

      padding: var(--hidable-content-content-padding, 8px);
    }

    #visibility-button {
      display: flex;

      justify-content: center;
      align-items: center;

      height: var(--hidable-content-button-height, 20px);
      width: var(--hidable-content-component-width, 200px);

      background-color: transparent;

      border: none;
      transition: background-color 0.3s;
      cursor: pointer;

      padding: 0;
      overflow: hidden;
    }

    #visibility-button:hover {
      background-color: var(--hidable-content-button-hover-bg-color, #b0bec5);
    }

    #visibility-icon {
      height: var(--hidable-content-button-icon-height, 12px);
      width: var(--hidable-content-button-icon-width, 12px);
      max-height: var(--hidable-content-button-icon-height, 12px);
      max-width: var(--hidable-content-button-icon-width, 12px);
    }

    #visibility-icon.visible {
      transform: var(
        --hidable-content-icon-visibility-transform,
        rotate(180deg)
      );
    }

    #visibility-icon.buttonDown {
      transform: rotate(180deg);
    }
  `;

  private updateStyleVariable(
    propertyName: StyleProperty,
    cssVar: string,
    fallback: string
  ) {
    const value = this[propertyName] ?? fallback;
    this.style.setProperty(cssVar, value);
  }

  updated(changed: Map<string, StyleProperty>) {
    const update = (prop: StyleProperty, cssVar: string, fallback: string) =>
      changed.has(prop) && this.updateStyleVariable(prop, cssVar, fallback);

    update('compWidth', '--hidable-content-component-width', '200px');
    update('compBgColor', '--hidable-content-comp-bg-color', '#eceff1');
    update('compBorder', '--hidable-content-comp-border', 'none');
    update('compBorderRadius', '--hidable-content-comp-border-radius', '5px');
    update('compShadow', '--hidable-content-comp-shadow', 'none');

    update('contentHeight', '--hidable-content-content-height', '200px');
    update(
      'contentJustifyContent',
      '--hidable-content-content-justify-content',
      'start'
    );
    update(
      'contentAlignItems',
      '--hidable-content-content-align-items',
      'center'
    );
    update('contentPadding', '--hidable-content-content-padding', '8px');
    update(
      'contentOverflowX',
      '--hidable-content-content-overflow-x',
      'hidden'
    );
    update(
      'contentOverflowY',
      '--hidable-content-content-overflow-y',
      'hidden'
    );

    update('buttonHeight', '--hidable-content-button-height', '20px');
    update(
      'buttonHoverColor',
      '--hidable-content-button-hover-bg-color',
      '#b0bec5'
    );

    update('iconHeight', '--hidable-content-button-icon-height', '12px');
    update('iconWidth', '--hidable-content-button-icon-width', '12px');
    update(
      'iconVisibilityTransform',
      '--hidable-content-icon-visibility-transform',
      'rotate(180deg)'
    );
  }

  static arrowIcon =
    'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPg0KPHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgLTQuNSAyMCAyMCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4NCiAgICANCiAgICA8dGl0bGU+YXJyb3dfZG93biBbIzMzOF08L3RpdGxlPg0KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPg0KICAgIDxkZWZzPg0KDQo8L2RlZnM+DQogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+DQogICAgICAgIDxnIGlkPSJEcmliYmJsZS1MaWdodC1QcmV2aWV3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjIwLjAwMDAwMCwgLTY2ODQuMDAwMDAwKSIgZmlsbD0iIzAwMDAwMCI+DQogICAgICAgICAgICA8ZyBpZD0iaWNvbnMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDU2LjAwMDAwMCwgMTYwLjAwMDAwMCkiPg0KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNjQuMjkyMzA4LDY1MjQuMzY1ODMgTDE2NC4yOTIzMDgsNjUyNC4zNjU4MyBDMTYzLjkwMjU2NCw2NTI0Ljc3MDcxIDE2My45MDI1NjQsNjUyNS40MjYxOSAxNjQuMjkyMzA4LDY1MjUuODMwMDQgTDE3Mi41NTU4NzMsNjUzNC4zOTI2NyBDMTczLjMzNjM2LDY1MzUuMjAyNDQgMTc0LjYwMjUyOCw2NTM1LjIwMjQ0IDE3NS4zODMwMTQsNjUzNC4zOTI2NyBMMTgzLjcwNzU0LDY1MjUuNzY3OTEgQzE4NC4wOTMyODYsNjUyNS4zNjcxNiAxODQuMDk4MjgzLDY1MjQuNzE5OTcgMTgzLjcxNzUzMyw2NTI0LjMxNDA1IEMxODMuMzI4Nzg5LDY1MjMuODk5ODUgMTgyLjY4ODIxLDY1MjMuODk0NjcgMTgyLjI5MzQ3LDY1MjQuMzAyNjYgTDE3NC42NzY0NzksNjUzMi4xOTYzNiBDMTc0LjI4NTczNiw2NTMyLjYwMTI0IDE3My42NTMxNTIsNjUzMi42MDEyNCAxNzMuMjYyNDA5LDY1MzIuMTk2MzYgTDE2NS43MDUzNzksNjUyNC4zNjU4MyBDMTY1LjMxNTYzNSw2NTIzLjk2MDk0IDE2NC42ODMwNTEsNjUyMy45NjA5NCAxNjQuMjkyMzA4LDY1MjQuMzY1ODMiIGlkPSJhcnJvd19kb3duLVsjMzM4XSI+DQoNCjwvcGF0aD4NCiAgICAgICAgICAgIDwvZz4NCiAgICAgICAgPC9nPg0KICAgIDwvZz4NCjwvc3ZnPg==';

  private toggleVisibility = () => {
    this.contentVisible = !this.contentVisible;
  };

  render() {
    const visibleContentClass = this.contentVisible ? 'visible' : '';
    const buttonDownClass = this.buttonDown ? 'buttonDown' : '';

    return html` ${this.contentVisible && this.buttonDown
        ? html` <slot id="content" name="content" part="content"></slot>`
        : ''}
      <button
        id="visibility-button"
        part="visibility-button"
        @click=${this.toggleVisibility}
      >
        <img
          id="visibility-icon"
          part="visibility-icon"
          class="${visibleContentClass} ${buttonDownClass}"
          src="${this.iconSrc ?? VerticalHidableContent.arrowIcon}"
        />
      </button>
      ${this.contentVisible && !this.buttonDown
        ? html` <slot id="content" name="content" part="content"></slot>`
        : ''}`;
  }
}

export default VerticalHidableContent;
