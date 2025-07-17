import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

class LoadingHandler {
  instance: LoadingWrapper | null = null;

  findGlobalLoading(): LoadingWrapper | null {
    if (this.instance) return this.instance;

    let el = document.querySelector('loading-wrapper') as LoadingWrapper;

    if (!el) return null;

    this.instance = el;
    return el;
  }

  startLoading(): void {
    const el = this.findGlobalLoading();

    if (!el) {
      return;
    }

    el.setVisible(true);
  }

  endLoading(): void {
    const el = this.findGlobalLoading();

    if (!el) {
      return;
    }

    el.setVisible(false);
  }
}

export const Loading: LoadingHandler = new LoadingHandler();

@customElement('loading-wrapper')
export class LoadingWrapper extends LitElement {
  @property({ type: String }) declare compHeight?: string;
  @property({ type: String }) declare compWidth?: string;

  @property({ type: String }) declare compZindex?: string;

  @property({ type: String }) declare wrapperHeight?: string;
  @property({ type: String }) declare wrapperWidth?: string;

  @property({ type: String }) declare loadContHeight?: string;
  @property({ type: String }) declare loadContWidth?: string;
  @property({ type: String }) declare loadContTop?: string;
  @property({ type: String }) declare loadContBottom?: string;
  @property({ type: String }) declare loadContLeft?: string;
  @property({ type: String }) declare loadContRight?: string;

  @state() declare visible?: boolean;

  static styles = css`
    :host {
      display: inline-block;
      height: var(--loading-wrapper-comp-height, 100%);
      width: var(--loading-wrapper-comp-width, 100%);
      max-height: var(--loading-wrapper-comp-height, 100%);
      max-width: var(--loading-wrapper-comp-width, 100%);
    }

    #outer-wrapper {
      display: block;
      height: var(--loading-wrapper-height, 100%);
      width: var(--loading-wrapper-width, 100%);
      position: relative;
    }

    #loading-container {
      opacity: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      height: var(--loading-wrapper-container-height, fit-content);
      width: var(--loading-wrapper-container-width, fit-content);
      box-sizing: border-box;
      position: absolute;
      top: var(--loading-wrapper-container-top, 20px);
      bottom: var(--loading-wrapper-container-bottom, auto);
      left: var(--loading-wrapper-container-left, 50%);
      right: var(--loading-wrapper-container-right, 50%);
      border-radius: 24px;

      transition:
        opacity 0.4s ease,
        transform 0.4s ease;
      transform: translateY(-10px);
      pointer-events: none;
      transform: translate(-50%, -50%);
      z-index: var(--loading-wrapper-z-index, 999999999);
    }

    #loading-container.visible {
      opacity: 1;
    }
  `;

  public setVisible(show: boolean) {
    this.visible = show;
  }

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

    update('compHeight', '--loading-wrapper-comp-height', '100%');
    update('compWidth', '--loading-wrapper-comp-width', '100%');
    update('compZindex', '--loading-wrapper-z-index', '1000000000');

    update('wrapperHeight', '--loading-wrapper-height', '100%');
    update('wrapperWidth', '--loading-wrapper-width', '100%');

    update(
      'loadContHeight',
      '--loading-wrapper-container-height',
      'fit-content'
    );
    update('loadContWidth', '--loading-wrapper-container-width', 'fit-content');
    update('loadContPad', '--loading-wrapper-container-padding', '5px');
    update('loadContTop', '--loading-wrapper-container-top', '20px');
    update('loadContBottom', '--loading-wrapper-container-bottom', 'auto');
    update('loadContLeft', '--loading-wrapper-container-left', 'auto');
    update('loadContRight', '--loading-wrapper-container-right', 'auto');
  }

  render() {
    return html`
      <div id="outer-wrapper" part="outer-wrapper">
        <div
          id="loading-container"
          part="loading-container"
          class="${this.visible ? 'visible' : ''}"
        >
          <slot name="loading-component" part="loading-component"></slot>
        </div>

        <slot></slot>
      </div>
    `;
  }
}
