import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('icon-button')
export class IconButton extends LitElement {
  @property({ type: String }) declare compHeight?: string;
  @property({ type: String }) declare compWidth?: string;

  @property({ type: String }) declare buttonSize?: string;
  @property({ type: String }) declare sizeBy?: 'height' | 'width';
  @property({ type: String }) declare buttonColor?: string;
  @property({ type: String }) declare buttonHoverColor?: string;
  @property({ type: String }) declare iconSize?: string;
  @property({ type: Function }) declare onClick?: () => void;
  @property({ type: String }) declare iconSrc?: string;
  @property({ type: String }) declare iconAlt?: string;

  @property({ type: Boolean }) declare showTag?: boolean;
  @property({ type: String }) declare tagText?: string;
  @property({ type: String }) declare tagWidth?: string;
  @property({ type: String }) declare tagPadX?: string;

  @property({ type: String }) declare tagTextFontSize?: string;
  @property({ type: String }) declare tagTextFontWeight?: string;
  @property({ type: String }) declare tagTextFontFamily?: string;
  @property({ type: String }) declare tagTextColor?: string;
  @property({ type: String }) declare tagTextShadow?: string;
  @property({ type: String }) declare tagTextTransform?: string;
  @property({ type: String }) declare tagTextAlign?: string;

  static styles = css`
    :host {
      display: inline-block;
      height: var(--icon-button-comp-height, fit-content);
      width: var(--icon-button-comp-width, fit-content);
      max-height: var(--icon-button-comp-height, fit-content);
      max-width: var(--icon-button-comp-width, fit-content);
    }

    div {
      display: flex;
      align-items: center;
      height: var(--icon-button-size, 30px);
      width: var(--icon-button-size, 30px);
      border: none;
      border-radius: calc(var(--icon-button-size, 30px) * 0.4);
      background-color: var(--icon-button-bg-color, #eceff1);
      transition: width 0.5s ease;
    }

    div.has-tag:has(button:hover) {
      width: var(--icon-button-tag-width, fit-content);
    }

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      aspect-ratio: 1 / 1;
      border: none;
      border-radius: 40%;
      background-color: var(--icon-button-bg-color, #eceff1);
      transition: background-color 0.3s;
      cursor: pointer;
    }

    button.size-by-height {
      height: var(--icon-button-size, 30px);
    }

    button.size-by-width {
      width: var(--icon-button-size, 30px);
    }

    button:hover {
      background-color: var(--icon-button-hover-bg-color, #cfd8dc);
    }

    img {
      height: var(--icon-button-icon-size, 70%);
      aspect-ratio: 1 / 1;
    }

    span {
      display: flex;
      justify-content: var(--icon-button-tag-text-align, center);
      align-items: center;
      overflow: hidden;
      box-sizing: border-box;
      opacity: 0;
      height: 100%;
      width: var(--icon-button-tag-width, fit-content);
      padding-left: var(--icon-button-tag-padx, 10px);
      padding-right: var(--icon-button-tag-padx, 10px);
      pointer-events: none;
      font-size: var(--icon-button-tag-font-size, 90%);
      font-weight: var(--icon-button-tag-font-weight, bold);
      font-family: var(
        --icon-button-tag-font-family,
        'Helvetica',
        'Arial',
        sans-serif
      );
      text-shadow: var(--icon-button-tag-text-shadow, 0px 2px 5px #d0d0d0);
      color: var(--icon-button-tag-color, black);
      text-transform: var(--icon-button-tag-text-transform, none);
    }

    button:hover + span {
      opacity: 1;
      transition: opacity 0.3s ease;
      transition-delay: 0.05s;
      pointer-events: none;
    }
  `;

  private updateStyleVariable(
    propertyName: string,
    cssVar: string,
    fallback: string
  ) {
    const value = (this as any)[propertyName] ?? fallback;
    this.style.setProperty(cssVar, value);
  }

  updated(changed: Map<string, any>) {
    const update = (prop: string, cssVar: string, fallback: string) =>
      changed.has(prop) && this.updateStyleVariable(prop, cssVar, fallback);

    update('compHeight', '--icon-button-comp-height', 'fit-content');
    update('compWidth', '--icon-button-comp-width', 'fit-content');

    update('buttonSize', '--icon-button-size', '30px');
    update('buttonColor', '--icon-button-bg-color', '#eceff1');
    update('buttonHoverColor', '--icon-button-hover-bg-color', '#cfd8dc');
    update('iconSize', '--icon-button-icon-size', '70%');

    update('tagPadX', '--icon-button-tag-padx', '10px');
    update('tagWidth', '--icon-button-tag-width', 'fit-content');

    update('tagTextFontSize', '--icon-button-tag-font-size', '1rem');
    update('tagTextFontWeight', '--icon-button-tag-font-weight', 'bold');
    update(
      'tagTextFontFamily',
      '--icon-button-tag-font-family',
      `'Helvetica', 'Arial', sans-serif`
    );
    update('tagTextColor', '--icon-button-tag-color', 'black');
    update(
      'tagTextShadow',
      '--icon-button-tag-text-shadow',
      '0px 2px 5px #d0d0d0'
    );
    update('tagTextTransform', '--icon-button-tag-text-transform', 'none');
    update('tagTextAlign', '--icon-button-tag-text-align', 'center');
  }

  render() {
    const sizeClass =
      this.sizeBy === 'width' ? 'size-by-width' : 'size-by-height';
    const hasTagClass = this.showTag ? 'has-tag' : '';

    return html`
      <div class="${hasTagClass}">
        <button part="button" class="${sizeClass}" @click=${this.onClick}>
          ${this.iconSrc
            ? html`<img
                part="icon"
                src="${this.iconSrc}"
                alt="${this.iconAlt ?? 'icon'}"
              />`
            : ''}
        </button>
        ${this.showTag
          ? html`<span part="tag-text">${this.tagText ?? ''}</span>`
          : ''}
      </div>
    `;
  }
}
