import{i as l,a as s,x as w}from"./iframe-b_HJbMAZ.js";import{n,t as y}from"./property-D2x-rGmN.js";var h=Object.defineProperty,x=Object.getOwnPropertyDescriptor,v=(r,t,i)=>t in r?h(r,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[t]=i,e=(r,t,i,c)=>{for(var d=c>1?void 0:c?x(t,i):t,a=r.length-1,p;a>=0;a--)(p=r[a])&&(d=(c?p(t,i,d):p(d))||d);return c&&d&&h(t,i,d),d},g=(r,t,i)=>v(r,typeof t!="symbol"?t+"":t,i);let o=class extends s{updateStyleVariable(r,t,i){const c=this[r]??i;this.style.setProperty(t,c)}updated(r){const t=(i,c,d)=>r.has(i)&&this.updateStyleVariable(i,c,d);t("compHeight","--content-window-comp-height","100%"),t("compWidth","--content-window-comp-width","505px"),t("compMaxHeight","--content-window-comp-max-height","100%"),t("compMaxWidth","--content-window-comp-max-width","100%"),t("windHeight","--content-window-height","fit-content"),t("windWidth","--content-window-width","100%"),t("windMaxHeight","--content-window-max-height","100%"),t("windMaxWidth","--content-window-max-width","100%"),t("windPad","--content-window-padding","8px"),t("gapSize","--content-window-gap","5px"),t("windColor","--content-window-bg-color","#f5f5f5"),t("windShadow","--content-window-shadow","0px 2px 5px #d0d0d0"),t("windOverflowX","--content-window-overflow-x","auto"),t("windOverflowY","--content-window-overflow-y","auto"),t("windResize","--content-window-resize","none"),t("headerHeight","--content-window-header-height","fit-content"),t("headerWidth","--content-window-header-width","100%"),t("headerGap","--content-window-header-gap","5px"),t("headerTextFontSize","--content-window-tag-font-size","24px"),t("headerTextFontWeight","--content-window-tag-font-weight","bold"),t("headerTextFontFamily","--content-window-tag-font-family","'Helvetica', 'Arial', sans-serif"),t("headerTextShadow","--content-window-tag-text-shadow","0px 2px 5px #d0d0d0"),t("headerTextColor","--content-window-tag-color","black"),t("headerTextTransform","--content-window-tag-text-transform","none"),t("closeHeight","--content-window-close-height","fit-content"),t("closeWidth","--content-window-close-width","fit-content"),t("closeHoverColor","--content-window-close-hover-color","#cfd8dc"),t("closeIconHeight","--content-window-close-icon-height","fit-content"),t("closeIconWidth","--content-window-close-icon-width","fit-content"),t("contentHeight","--content-window-content-height","fit-content"),t("contentWidth","--content-window-content-width","100%"),t("contentMaxHeight","--content-window-content-max-height","100%"),t("contentMaxWidth","--content-window-content-max-width","100%"),t("contentJustifyC","--content-window-content-justify-content","start"),t("contentAlignI","--content-window-content-align-items","center"),t("contentGap","--content-window-content-gap","5px")}render(){return w`
      <div id="window" part="window">
        ${this.showHeader?w`<div id="header" part="header">
              ${this.showCloseButton?w`<div id="close-button" part="close-button" @click=${this.onCloseClick}>
                    <img id="close-button-icon" part="close-button-icon" src=${this.closeButtonSrc??o.closeIcon} ></img>
                </div>`:w`<div></div>`}
              <p id="header-text" part="header-text">
                ${this.headerText??""}
              </p>
              <div></div>
            </div>`:""}
        <slot part="content"></slot>
      </div>
    `}};g(o,"styles",l`
    :host {
      display: inline-block;
      height: var(--content-window-comp-height, 100%);
      width: var(--content-window-comp-width, 505px);
      max-height: var(--content-window-comp-max-height, 100%);
      max-width: var(--content-window-comp-max-width, 100%);
      pointer-events: none;
    }

    #window {
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: center;
      height: var(--content-window-height, fit-content);
      width: var(--content-window-width, 100%);
      max-height: var(--content-window-max-height, 100%);
      max-width: var(--content-window-max-width, 100%);
      padding: var(--content-window-padding, 8px);
      gap: var(--content-window-gap, 5px);
      border-radius: 8px;
      background-color: var(--content-window-bg-color, #f5f5f5);
      box-shadow: var(--content-window-shadow, 0px 2px 5px #d0d0d0);
      overflow-x: var(--content-window-overflow-x, auto);
      overflow-y: var(--content-window-overflow-y, auto);
      resize: var(--content-window-resize, none);
      box-sizing: border-box;
      pointer-events: auto;
    }

    #header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: var(--content-window-header-height, fit-content);
      width: var(--content-window-header-width, 100%);
      gap: var(--content-window-header-gap, 5px);
    }

    #header-text {
      margin: 0;
      font-size: var(--content-window-tag-font-size, 24px);
      font-weight: var(--content-window-tag-font-weight, bold);
      font-family: var(
        --content-window-tag-font-family,
        'Helvetica',
        'Arial',
        sans-serif
      );
      text-shadow: var(--content-window-tag-text-shadow, 0px 2px 5px #d0d0d0);
      color: var(--content-window-tag-color, black);
      text-transform: var(--content-window-tag-text-transform, none);
      cursor: default;
    }

    #close-button {
      display: flex;
      justify-content: center;
      align-items: center;
      height: var(--content-window-close-height, fit-content);
      width: var(--content-window-close-width, fit-content);
      border-radius: 8px;
      background-color: var(--content-window-bg-color, #f5f5f5);
      transition: background-color 0.3s;
    }

    #close-button:hover {
      background-color: var(--content-window-close-hover-color, #cfd8dc);
    }

    #close-button-icon {
      height: var(--content-window-close-icon-height, fit-content);
      width: var(--content-window-close-icon-width, fit-content);
      max-height: var(--content-window-close-icon-height, fit-content);
      max-width: var(--content-window-close-icon-width, fit-content);
    }

    slot {
      display: flex;
      flex-direction: column;
      justify-content: var(--content-window-content-justify-content, start);
      align-items: var(--content-window-content-align-items, center);
      height: var(--content-window-content-height, fit-content);
      width: var(--content-window-content-width, 100%);
      max-height: var(--content-window-content-max-height, 100%);
      max-width: var(--content-window-content-max-width, 100%);
      gap: var(--content-window-content-gap, 5px);
    }
  `);g(o,"closeIcon","data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTkgNi40MUwxNy41OSA1IDEyIDEwLjU5IDYuNDEgNSA1IDYuNDEgMTAuNTkgMTIgNSAxNy41OSA2LjQxIDE5IDEyIDEzLjQxIDE3LjU5IDE5IDE5IDE3LjU5IDEzLjQxIDEyeiIvPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz48L3N2Zz4=");e([n({type:String})],o.prototype,"compHeight",2);e([n({type:String})],o.prototype,"compWidth",2);e([n({type:String})],o.prototype,"compMaxHeight",2);e([n({type:String})],o.prototype,"compMaxWidth",2);e([n({type:String})],o.prototype,"windHeight",2);e([n({type:String})],o.prototype,"windWidth",2);e([n({type:String})],o.prototype,"windMaxHeight",2);e([n({type:String})],o.prototype,"windMaxWidth",2);e([n({type:String})],o.prototype,"windPad",2);e([n({type:String})],o.prototype,"windColor",2);e([n({type:String})],o.prototype,"windShadow",2);e([n({type:String})],o.prototype,"windOverflowX",2);e([n({type:String})],o.prototype,"windOverflowY",2);e([n({type:String})],o.prototype,"windResize",2);e([n({type:Boolean})],o.prototype,"showHeader",2);e([n({type:String})],o.prototype,"headerHeight",2);e([n({type:String})],o.prototype,"headerWidth",2);e([n({type:String})],o.prototype,"headerGap",2);e([n({type:String})],o.prototype,"headerText",2);e([n({type:String})],o.prototype,"headerTextFontSize",2);e([n({type:String})],o.prototype,"headerTextFontWeight",2);e([n({type:String})],o.prototype,"headerTextFontFamily",2);e([n({type:String})],o.prototype,"headerTextColor",2);e([n({type:String})],o.prototype,"headerTextShadow",2);e([n({type:String})],o.prototype,"headerTextTransform",2);e([n({type:Boolean})],o.prototype,"showCloseButton",2);e([n({type:Function})],o.prototype,"onCloseClick",2);e([n({type:String})],o.prototype,"closeButtonSrc",2);e([n({type:String})],o.prototype,"closeHeight",2);e([n({type:String})],o.prototype,"closeWidth",2);e([n({type:String})],o.prototype,"closeHoverColor",2);e([n({type:String})],o.prototype,"closeIconHeight",2);e([n({type:String})],o.prototype,"closeIconWidth",2);e([n({type:String})],o.prototype,"contentHeight",2);e([n({type:String})],o.prototype,"contentWidth",2);e([n({type:String})],o.prototype,"contentMaxHeight",2);e([n({type:String})],o.prototype,"contentMaxWidth",2);e([n({type:String})],o.prototype,"contentJustifyC",2);e([n({type:String})],o.prototype,"contentAlignI",2);e([n({type:String})],o.prototype,"contentGap",2);e([n({type:String})],o.prototype,"gapSize",2);o=e([y("content-window")],o);
