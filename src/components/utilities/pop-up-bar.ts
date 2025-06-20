import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('pop-up-bar')
export class PopUpBar extends LitElement {
  @property({ type: String }) declare compHeight?: string;
  @property({ type: String }) declare compWidth?: string;

  @property({ type: String }) declare barHeight?: string;
  @property({ type: String }) declare barWidth?: string;
  @property({ type: String }) declare barColor?: string;

  @property({ type: String }) declare butHeight?: string;
  @property({ type: String }) declare butWidth?: string;
  @property({ type: String }) declare butColor?: string;
  @property({ type: String }) declare butHoverColor?: string;

  @property({ type: String }) declare iconHeight?: string;
  @property({ type: String }) declare iconWidth?: string;
  @property({ type: String }) declare iconSrc?: string;
  @property({ type: String }) declare iconAlt?: string;

  @property({ type: String }) declare gapSize?: string;

  static styles = css`
    :host {
      display: inline-block;
      height: var(--pop-up-bar-comp-height, fit-content);
      width: var(--pop-up-bar-comp-width, fit-content);
      max-height: var(--pop-up-bar-comp-height, fit-content);
      max-width: var(--pop-up-bar-comp-width, fit-content);
    }

    #container {
      display: flex;
      flex-direction: column-reverse;
      justify-content: end;
      align-items: center;
    }

    #bar {
      margin-bottom: var(--pop-up-bar-gap, 4px);
      display: flex;
      justify-content: center;
      align-items: center;
      height: var(--pop-up-bar-height, 30px);
      width: var(--pop-up-bar-width, 200px);
      box-sizing: border-box;
      padding: 0 10px;
      border: none;
      border-radius: 10px;
      background-color: var(--pop-up-bar-color, #eceff1);
    }

    #bar-container {
      opacity: 0;
      height: calc(var(--pop-up-bar-height, 30px) + var(--pop-up-bar-gap, 4px));
      width: var(--pop-up-bar-width, 200px);
      visibility: hidden;
      transition:
        opacity 0.3s ease-in-out,
        visibility 0.3s ease-in-out;
      pointer-events: none;
    }

    #bar-container:hover {
      opacity: 1;
      visibility: visible;
      pointer-events: auto;
    }

    slot {
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: 100%;
      width: 100%;
    }

    #display-button {
      display: flex;
      justify-content: center;
      align-items: center;
      height: var(--pop-up-bar-button-height, 30px);
      width: var(--pop-up-bar-button-width, 200px);
      border-radius: 10px;
      background-color: var(--pop-up-bar-button-color, #eceff1);
      cursor: pointer;
    }

    #display-button:hover {
      background-color: var(--pop-up-bar-button-hover-color, #cfd8dc);
    }

    #display-button:hover + #bar-container {
      opacity: 1;
      visibility: visible;
      pointer-events: auto;
    }

    img {
      height: var(--pop-up-bar-icon-height, 70%);
      width: var(--pop-up-bar-icon-width, 70%);
    }

    #arrow-up {
      font-size: 100%;
      font-weight: 550;
      color: black;
      line-height: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      height: var(--pop-up-bar-icon-height, 90%);
      width: var(--pop-up-bar-icon-width, 90%);
      font-family: 'Helvetica', 'Arial', sans-serif;
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

    update('compHeight', '--pop-up-bar-comp-height', 'fit-content');
    update('compWidth', '--pop-up-bar-comp-width', 'fit-content');

    update('barHeight', '--pop-up-bar-height', '30px');
    update('barWidth', '--pop-up-bar-width', '200px');
    update('barColor', '--pop-up-bar-color', '#eceff1');

    update('butHeight', '--pop-up-bar-button-height', '30px');
    update('butWidth', '--pop-up-bar-button-width', '200px');
    update('butColor', '--pop-up-bar-button-color', '#eceff1');
    update('butHoverColor', '--pop-up-bar-button-hover-color', '#cfd8dc');

    update('gapSize', '--pop-up-bar-gap', '4px');

    update('iconHeight', '--pop-up-bar-icon-height', '70%');
    update('iconWidth', '--pop-up-bar-icon-width', '70%');
  }

  render() {
    return html`
      <div id="container">
        <div id="display-button" part="button">
          ${this.iconSrc
            ? html`<img
                part="icon"
                src="${this.iconSrc}"
                alt="${this.iconAlt ?? 'icon'}"
              />`
            : html`<span id="arrow-up" part="arrow">^</span>`}
        </div>
        <div id="bar-container">
          <div id="bar" part="bar">
            <slot></slot>
          </div>
        </div>
      </div>
    `;
  }
}
