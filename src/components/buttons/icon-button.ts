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

  static styles = css`
    :host {
      display: inline-block;
      height: var(--icon-button-comp-height, fit-content);
      width: var(--icon-button-comp-width, fit-content);
      max-height: var(--icon-button-comp-height, fit-content);
      max-width: var(--icon-button-comp-width, fit-content);
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
    if (changed.has('compHeight')) {
      this.updateStyleVariable(
        'compHeight',
        '--icon-button-comp-height',
        'fit-content'
      );
    }
    if (changed.has('compWidth')) {
      this.updateStyleVariable(
        'compWidth',
        '--icon-button-comp-width',
        'fit-content'
      );
    }
    if (changed.has('buttonSize')) {
      this.updateStyleVariable('buttonSize', '--icon-button-size', '30px');
    }
    if (changed.has('buttonColor')) {
      this.updateStyleVariable(
        'buttonColor',
        '--icon-button-bg-color',
        '#eceff1'
      );
    }
    if (changed.has('buttonHoverColor')) {
      this.updateStyleVariable(
        'buttonHoverColor',
        '--icon-button-hover-bg-color',
        '#cfd8dc'
      );
    }

    if (changed.has('iconSize')) {
      this.updateStyleVariable('iconSize', '--icon-button-icon-size', '70%');
    }
  }

  render() {
    const sizeClass =
      this.sizeBy === 'width' ? 'size-by-width' : 'size-by-height';
    return html`
      <button part="button" class="${sizeClass}" @click=${this.onClick}>
        ${this.iconSrc
          ? html`<img
              part="icon"
              src="${this.iconSrc}"
              alt="${this.iconAlt ?? 'icon'}"
            />`
          : ''}
      </button>
    `;
  }
}
